/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */
import { exec } from 'child_process';
import path from 'path';
import { getFileContent, generateFileContent } from './file-content';

const replaceUnnecessaryWords = (fileContent: string) => {
    const firstContentIndex = fileContent.indexOf('React.forwardRef(');
    const lastContentIndex = fileContent.indexOf('export');
    return fileContent.slice(firstContentIndex, lastContentIndex).replace(/\/\*#__PURE__\*\//g, '');
};

const injectRef = (fileContent: string) => {
    const matchInfo = fileContent.match(/return\s+React\.createElement\("[\s\S]*?",\s+(null|\{)/);

    if (matchInfo === null || matchInfo.index === undefined) {
        throw new Error('injectRef중 matchInfo의 값이 없습니다.');
    }

    const startIndex = matchInfo.index + matchInfo[0].length;

    const result =
        matchInfo[1] === 'null'
            ? `${fileContent.slice(0, startIndex - 4)}{ ref }, ${fileContent.slice(startIndex + 1)}`
            : `${fileContent.slice(0, startIndex - 1)}{ ref, ${fileContent.slice(startIndex + 1)}`;

    return result;
};

const prettierCodeAsync = (filePath: string) => {
    exec(`npx prettier --write ${filePath}`, error => {
        if (error) {
            console.error(`prettier 명령어 실행 중 오류 발생: ${error}`);
        }
        console.log(`${filePath} prettier 적용 완료`);
    });
};

/** 한 줄에 대해서 importName을 추출한다. */
const parseImportNameBlock = (importNameBlock: string) => {
    // import a from '@a';
    // import { b } from '@b';
    // import { b, c } from '@c';
    // import a, { b, c } from '@d';

    // import a as A from '@a'; -> 대응 안 함
    // import * as B from '@b';
    // 타입 import에 대해서도 대응 안 함. 컴파일 시 어차피 사라질 정보이기 때문

    const regex = /(\w+|\{(?:\s*\w+\s*,\s*)*\w+\s*\}|\w+\s+as\s+\w+|\*\s+as\s+\w+)/g;
    const matchResult = importNameBlock.match(regex);

    if (matchResult === null) return [];

    return Array.from(matchResult).reduce((acc, result) => {
        if (importNameBlock.includes('{') || importNameBlock.includes('}')) {
            const modules = result
                .split(',')
                .map(e => e.trim())
                .map(name => ({ name, isDefault: false }));
            return [...acc, ...modules];
        }

        if (result.includes(' as ')) {
            const module = result.replace(/[\w*]{1,}\sas\s(.*)/g, '$1');
            return [...acc, { name: module, isDefault: true }];
        }

        return [...acc, { name: result, isDefault: true }];
    }, [] as { name: string; isDefault: boolean }[]);
};

/** import문에서 importName과 라이브러리 이름을 가져온다. */
const getImportInfos = (fileContent: string) => {
    const regex = /(?:import\s+([*\w{},\s]+)\s+from\s+['"]([^'"]+)['"]);/g;
    const matches = fileContent.matchAll(regex);

    return Array.from(matches)
        .flatMap(match => {
            const [, imports, libraryName] = Array.from(match);
            const namedImports = `${imports}`.split(',').flatMap(item => parseImportNameBlock(item.trim()));
            return namedImports.map(importName => ({ importName, libraryName }));
        })
        .filter(e => e.libraryName !== 'react');
};

/** package-lock.json에서 라이브러리 정보(이름, 버전)를 가져온다. */
const getLibraryVersion = async (
    libraryName: string,
    packageLockJson: { packages: { [key: string]: { dependencies?: object; devDependencies?: object } } }
) => {
    const { dependencies, devDependencies } = packageLockJson.packages[''];
    return dependencies?.[libraryName] ?? devDependencies?.[libraryName];
};

const getPackageLockJsonLibrayNames = (packageLockJson: {
    packages: { [key: string]: { dependencies?: object; devDependencies?: object } };
}) => {
    const { dependencies, devDependencies } = packageLockJson.packages[''];
    let libraryNames: string[] = [];

    if (dependencies) {
        libraryNames = [...Object.keys(dependencies)];
    }

    if (devDependencies) {
        libraryNames = [...libraryNames, ...Object.keys(devDependencies)];
    }

    return libraryNames;
};

const formatComponentName = componentName => {
    return componentName.replace(/\^/g, '').replace(/[-/.]/g, '_').replace(/@/g, 'at_');
};

const replaceLibraryComponentNames = async (fileContent: string, packageLockJsonPath: string) => {
    const importInfos = getImportInfos(fileContent);
    const libraryNames = [...new Set(Object.values(importInfos.map(({ libraryName }) => libraryName)))];

    const packageLockJsonContent = await getFileContent(packageLockJsonPath);
    const packageLockJson = JSON.parse(packageLockJsonContent);

    const packageLockJsonLibraryNames = getPackageLockJsonLibrayNames(packageLockJson);

    packageLockJsonLibraryNames.forEach(packageLockJsonLibraryName => {
        importInfos.forEach((importInfo, index) => {
            if (importInfo.libraryName.includes(packageLockJsonLibraryName)) {
                importInfos[index].libraryName = packageLockJsonLibraryName;
            }
        });
        libraryNames.forEach((libraryName, index) => {
            if (libraryName.includes(packageLockJsonLibraryName)) {
                libraryNames[index] = packageLockJsonLibraryName;
            }
        });
    });

    const versionInfos = await libraryNames.reduce(async (acc, libraryName) => {
        const awaitedAcc = await acc;
        const version = await getLibraryVersion(libraryName, packageLockJson);

        awaitedAcc[libraryName] = version;
        return awaitedAcc;
    }, Promise.resolve({}) as Promise<{ [key: string]: string }>);

    return importInfos.reduce((acc, { importName: { name, isDefault }, libraryName }) => {
        const regex = new RegExp(`React.createElement\\(${name}`, 'g');
        const version = versionInfos[libraryName];

        if (isDefault) {
            acc = acc.replaceAll(
                regex,
                `React.createElement(${formatComponentName(`${libraryName}_${name}_${version}`)}.default`
            );
            return acc;
        }
        acc = acc.replaceAll(
            regex,
            `React.createElement(${formatComponentName(`${libraryName}_${version}`)}.${formatComponentName(name)}`
        );
        return acc;
    }, fileContent);
};

export const generateCustomComponentJsFile = async (transpiledFilePath: string) => {
    const fileContent = await getFileContent(transpiledFilePath);

    const replacedLibraryComponentNames = await replaceLibraryComponentNames(
        fileContent,
        path.join(__dirname, '../../package-lock.json')
    );

    const replacedComponentJsFileContent = replaceUnnecessaryWords(replacedLibraryComponentNames);
    const refInjectedComponentJsFileContent = injectRef(replacedComponentJsFileContent);

    await generateFileContent(transpiledFilePath, refInjectedComponentJsFileContent);
    console.log(`${transpiledFilePath} 폴더에 파일 생성 완료`);

    prettierCodeAsync(transpiledFilePath);
};

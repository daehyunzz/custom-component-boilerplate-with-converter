/* eslint-disable import/prefer-default-export */
import { exec } from 'child_process';
import { getFileContent, generateFileContent } from './file-content';

const replaceUnnecessaryWords = (fileContent: string) => {
    const firstContentIndex = fileContent.indexOf('React.forwardRef(');
    const lastContentIndex = fileContent.indexOf('export');
    return fileContent.slice(firstContentIndex, lastContentIndex).replace(/\/\*#__PURE__\*\//g, '');
};

const injectRef = (fileContent: string) => {
    const matchInfo = fileContent.match(/return\s+React\.createElement\("[\s\S]*?",\s+(null|\{)/);
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

export const generateCustomComponentJsFile = async (transpiledFilePath: string) => {
    const fileContent = await getFileContent(transpiledFilePath);

    const replacedComponentJsFileContent = replaceUnnecessaryWords(fileContent);
    const refInjectedComponentJsFileContent = injectRef(replacedComponentJsFileContent);

    generateFileContent(transpiledFilePath, refInjectedComponentJsFileContent).then(() => {
        prettierCodeAsync(transpiledFilePath);
        console.log(`${transpiledFilePath} 폴더에 파일 생성 완료`);
    });
};

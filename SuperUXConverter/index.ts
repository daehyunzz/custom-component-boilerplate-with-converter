import fs from 'fs';
import path from 'path';
import { joinPath, resolvePath, splitPath } from './parser/utils';
import { generateSuperUXFiles } from './extractor';
import { getFileContent } from './extractor/file-content';
import twToCss from './twToCss/convert';

const [actionInput, componentFilePath] = process.argv.slice(2);
const resolvedComponentFilePath = componentFilePath && resolvePath(componentFilePath);
const resultFileBasePath = 'SuperUXCustomComponent';

const generateSuperUXComponentRecursively = async (fileOrFolderPath, resultPath) => {
    try {
        if (fileOrFolderPath.endsWith('.tsx')) {
            const resultFilePath = joinPath(splitPath(resultPath).slice(0, -1));
            generateSuperUXFiles(fileOrFolderPath, resultFilePath);
            return;
        }

        const files = await fs.promises.readdir(fileOrFolderPath, { encoding: 'utf8' });

        files.forEach(file => {
            const resultFilePath = path.join(resultPath, file);
            const filePath = path.join(fileOrFolderPath, file);

            generateSuperUXComponentRecursively(filePath, resultFilePath);
        });
    } catch (error) {
        console.error(error);
    }
};

const convertTwToCss = async (targetFilePath: string) => {
    const originFile = await getFileContent(targetFilePath);
    const convertedFile = twToCss(originFile);
    await fs.promises.writeFile(targetFilePath, convertedFile);
};

(() => {
    if (resolvedComponentFilePath === undefined) {
        console.error('첫 번째 인자에 변환 대상 컴포넌트 경로가 입력되지 않았습니다.');
        return;
    }

    if (fs.existsSync(resolvedComponentFilePath) === false) {
        console.log({ resolvedComponentFilePath });
        console.error('해당 경로에 대상 파일이 존재하지 않습니다.');
        return;
    }

    if (actionInput === 'generate') {
        const paths = splitPath(resolvedComponentFilePath);
        const restResultPath = !paths[0].startsWith('.') ? paths.slice(1) : paths.slice(2);

        generateSuperUXComponentRecursively(
            resolvedComponentFilePath,
            path.join(resultFileBasePath, ...restResultPath)
        );
    } else if (actionInput === 'figma') {
        convertTwToCss(resolvedComponentFilePath);
    }
})();

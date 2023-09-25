import fs from 'fs';
import path from 'path';
import { generateSuperUXFiles } from './extractor';

const [componentFilePath] = process.argv.slice(2);
const resultFileBasePath = 'SuperUXCustomComponent';

const generateSuperUXComponentRecursively = (fileOrFolderPath, resultPath) => {
    try {
        if (fileOrFolderPath.endsWith('.tsx')) {
            const resultFilePath = resultPath.split('/').slice(0, -1).join('/');
            generateSuperUXFiles(fileOrFolderPath, resultFilePath);
            return;
        }

        const files = fs.readdirSync(fileOrFolderPath);

        files.forEach(file => {
            const resultFilePath = path.join(resultPath, file);
            const filePath = path.join(fileOrFolderPath, file);

            generateSuperUXComponentRecursively(filePath, resultFilePath);
        });
    } catch (error) {
        console.error(error);
    }
};

(() => {
    if (componentFilePath === undefined) {
        console.error('첫 번째 인자에 변환 대상 컴포넌트 경로가 입력되지 않았습니다.');
        return;
    }

    generateSuperUXComponentRecursively(
        componentFilePath,
        path.join(resultFileBasePath, ...componentFilePath.split('/').slice(2))
    );
})();

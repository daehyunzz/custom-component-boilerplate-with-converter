import fs from 'fs';
import path from 'path';
import { generateSuperUXFiles } from './extractor';

const [componentFilePath] = process.argv.slice(2);
const resultFileBasePath = 'SuperUXCustomComponent';

const generateSuperUXComponentRecursively = async (fileOrFolderPath, resultPath) => {
    try {
        if (fileOrFolderPath.endsWith('.tsx')) {
            const resultFilePath = resultPath.split('/').slice(0, -1).join('/');
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

(() => {
    if (componentFilePath === undefined) {
        console.error('첫 번째 인자에 변환 대상 컴포넌트 경로가 입력되지 않았습니다.');
        return;
    }

    if (fs.existsSync(componentFilePath) === false) {
        console.error('해당 경로에 대상 파일이 존재하지 않습니다.');
        return;
    }

    const paths = componentFilePath.split('/');
    const restResultPath = !paths[0].startsWith('.') ? paths.slice(1) : paths.slice(2);

    generateSuperUXComponentRecursively(componentFilePath, path.join(resultFileBasePath, ...restResultPath));
})();

import fs from 'fs';
import { joinPath, splitPath } from '../parser/utils';

export const getFileContent = (filePath: string): Promise<string> => {
    return fs.promises.readFile(filePath, { encoding: 'utf8' });
};

export const generateFileContent = async (filePath: string, fileContent: string) => {
    // 파일 디렉토리 생성
    try {
        await fs.promises.access(filePath); // 파일 존재 여부 확인
    } catch (error) {
        // @ts-ignore
        if (error.code === 'ENOENT') {
            // ENOENT 오류가 발생하면 파일이 존재하지 않는 것이므로 폴더 생성
            const folderPath = joinPath(splitPath(filePath).slice(0, -1));
            await fs.promises.mkdir(folderPath, { recursive: true });
        } else {
            console.error('오류 발생:', error);
            throw error; // 다른 오류는 throw
        }
    }

    // 파일 쓰기
    try {
        await fs.promises.writeFile(filePath, fileContent, { encoding: 'utf8' });
    } catch (error) {
        console.error('오류 발생:', error);
        throw error;
    }
};

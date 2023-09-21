/* eslint-disable consistent-return */
import fs from 'fs';

export const getFileContent = (filePath: string) => {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return fileContent;
    } catch (error) {
        console.error('오류 발생:', error);
    }
};

export const generateFileContent = (filePath: string, fileContent: string) => {
    try {
        if (!fs.existsSync(filePath)) {
            const folderPath = filePath.split('/').slice(0, -1).join('/');
            fs.mkdirSync(folderPath, { recursive: true });
        }
        fs.writeFileSync(filePath, fileContent, { encoding: 'utf8' });
    } catch (error) {
        console.error('오류 발생:', error);
    }
};

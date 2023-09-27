/* eslint-disable consistent-return */
import fs from 'fs';

export const getFileContent = (filePath: string, cb?: (data: Buffer) => void) => {
    fs.readFile(filePath, (err, data) => {
        if (err) console.error(err);
        cb?.(data);
    });
};

export const generateFileContent = (filePath: string, fileContent: string, cb?: () => void) => {
    try {
        if (!fs.existsSync(filePath)) {
            const folderPath = filePath.split('/').slice(0, -1).join('/');
            fs.mkdirSync(folderPath, { recursive: true });
        }
        fs.writeFile(filePath, fileContent, err => {
            if (err) console.error(err);
            cb?.();
        });
    } catch (error) {
        console.error('오류 발생:', error);
    }
};

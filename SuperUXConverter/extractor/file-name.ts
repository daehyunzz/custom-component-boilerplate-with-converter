/* eslint-disable import/prefer-default-export */
import path from 'path';

export const getFileName = (filePath: string) => {
    const [name] = path.basename(filePath).split('.');
    return name;
};

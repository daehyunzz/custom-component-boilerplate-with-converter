/* eslint-disable import/prefer-default-export */
import { generateFileContent } from './file-content';
import { generateContentObjects } from './file-type';

const stringifyMetaData = typeInfos => {
    const contentObjects = generateContentObjects(typeInfos);
    const json = { Content: contentObjects, Style: [], Event: [] };

    return JSON.stringify(json, null, 4);
};

export const generateCustomComponentMetaDataFile = (types, resultFilePath: string) => {
    const stringifiedJson = stringifyMetaData(types);
    generateFileContent(resultFilePath, stringifiedJson);
};

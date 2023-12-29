/* eslint-disable import/prefer-default-export */
import { generateEventObjects } from './event-type';
import { generateFileContent } from './file-content';
import { generateContentObjects } from './file-type';

const stringifyMetaData = (typeInfos, eventInfos) => {
    const contentObjects = generateContentObjects(typeInfos);
    const eventObjects = generateEventObjects(eventInfos);
    const json = { Content: contentObjects, Style: [], Event: eventObjects };

    return JSON.stringify(json, null, 4);
};

export const generateCustomComponentMetaDataFile = (
    typeInfos: unknown[],
    eventInfos: unknown[],
    resultFilePath: string
) => {
    const stringifiedJson = stringifyMetaData(typeInfos, eventInfos);
    generateFileContent(resultFilePath, stringifiedJson);
};

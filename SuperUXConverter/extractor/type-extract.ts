/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import { getFileContent } from './file-content';
import parse from '../parser/parse';

const getLastBracketIndex = (content: string, initialIndex: number) => {
    let bracket = 1;
    let index = initialIndex;

    while (bracket > 0 && index < content.length) {
        if (content[index] === '}') {
            bracket -= 1;
        } else if (content[index] === '{') {
            bracket += 1;
        }
        index += 1;
    }

    return bracket === 0 ? index - 1 : -1;
};

export const typeExtractor = (filePath: string, generateCustomComponentFilesCb: (types: any) => void) => {
    getFileContent(filePath, data => {
        const fileContent = data.toString();
        const interfaceRegex = /interface\s+[\s\S]*?\s+\{/;

        const matchInfo = fileContent.match(interfaceRegex);
        const startInterfaceIndex = matchInfo.index;
        const startBracketIndex = startInterfaceIndex + matchInfo[0].length;
        const lastBracketIndex = getLastBracketIndex(fileContent, startBracketIndex);

        const stringifiedInterface = fileContent.slice(startInterfaceIndex - 1, lastBracketIndex + 1);

        generateCustomComponentFilesCb(parse(stringifiedInterface));
    });
};

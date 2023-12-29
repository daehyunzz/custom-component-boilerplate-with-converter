/* eslint-disable import/prefer-default-export */
import { getFileContent } from './file-content';
import parse from '../parser/parse';

const getLastTargetIndex = (content: string, initialIndex: number, startTarget = '{', endTarget = '}') => {
    let bracket = 1;
    let index = initialIndex;

    while (bracket > 0 && index < content.length) {
        if (content[index] === endTarget) {
            bracket -= 1;
        } else if (content[index] === startTarget) {
            bracket += 1;
        }
        index += 1;
    }

    return bracket === 0 ? index - 1 : -1;
};

export const extractTypeInfos = async (fileContent: string) => {
    const interfaceRegex = /interface\s+[\s\S]*?\s+\{/;

    const matchInfo = fileContent.match(interfaceRegex);

    if (matchInfo === null || matchInfo.index === undefined) {
        throw new Error('해당 파일에 명시된 타입 정보가 없습니다.');
    }

    const startInterfaceIndex = matchInfo.index;
    const startBracketIndex = startInterfaceIndex + matchInfo[0].length;
    const lastBracketIndex = getLastTargetIndex(fileContent, startBracketIndex);

    const stringifiedInterface = fileContent.slice(startInterfaceIndex - 1, lastBracketIndex + 1);

    return parse(stringifiedInterface);
};

export const extractEventInfos = async (fileContent: string) => {
    const eventInfosRegex = /EventInfos[\s\S]*?\s+\[/;

    const matchInfo = fileContent.match(eventInfosRegex);

    if (matchInfo === null || matchInfo.index === undefined) {
        throw new Error('해당 파일에 명시된 이벤트 타입 정보가 없습니다.');
    }

    const startObjectIndex = matchInfo.index;
    const startBracketIndex = startObjectIndex + matchInfo[0].length;
    const lastBracketIndex = getLastTargetIndex(fileContent, startBracketIndex, '[', ']');

    const stringifiedObject = fileContent.slice(startObjectIndex - 1 + matchInfo[0].length, lastBracketIndex + 1);

    // eslint-disable-next-line no-eval
    return eval(`(${stringifiedObject})`);
};

export const extractMetaInfos = async (filePath: string) => {
    const fileContent = await getFileContent(filePath);
    const [typeInfos, eventInfos] = await Promise.all([extractTypeInfos(fileContent), extractEventInfos(fileContent)]);

    return { typeInfos, eventInfos };
};

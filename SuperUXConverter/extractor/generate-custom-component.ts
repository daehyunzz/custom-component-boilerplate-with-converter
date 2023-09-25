/* eslint-disable import/prefer-default-export */
import { getFileContent, generateFileContent } from './file-content';

const replaceUnnecessaryWords = (fileContent: string) => {
    const firstContentIndex = fileContent.indexOf('React.forwardRef(');
    const lastContentIndex = fileContent.indexOf('export');
    return fileContent.slice(firstContentIndex, lastContentIndex).replace(/\/\*#__PURE__\*\//g, '');
};

const injectRef = (fileContent: string) => {
    const matchInfo = fileContent.match(/return\s+React\.createElement\("[\s\S]*?",\s+(null|\{)/);
    const startIndex = matchInfo.index + matchInfo[0].length;

    const result =
        matchInfo[1] === 'null'
            ? `${fileContent.slice(0, startIndex - 4)}{ ref }, ${fileContent.slice(startIndex + 1)}`
            : `${fileContent.slice(0, startIndex - 1)}{ ref, ${fileContent.slice(startIndex + 1)}`;

    return result;
};

export const generateCustomComponentJsFile = (transpiledFilePath: string) => {
    const transpiledJsFileContent = getFileContent(transpiledFilePath);
    const replacedComponentJsFileContent = replaceUnnecessaryWords(transpiledJsFileContent);
    const refInjectedComponentJsFileContent = injectRef(replacedComponentJsFileContent);

    generateFileContent(transpiledFilePath, refInjectedComponentJsFileContent);
};

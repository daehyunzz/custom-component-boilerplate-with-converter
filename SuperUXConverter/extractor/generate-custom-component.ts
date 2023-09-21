/* eslint-disable import/prefer-default-export */
import { getFileContent, generateFileContent } from './file-content';

const replaceUnnecessaryWords = (fileContent: string) => {
    const firstContentIndex = fileContent.indexOf('React.forwardRef(');
    const lastContentIndex = fileContent.indexOf('export');
    return fileContent.slice(firstContentIndex, lastContentIndex).replace(/\/\*#__PURE__\*\//, '');
};

export const generateCustomComponentJsFile = (transpiledFilePath: string) => {
    const transpiledJsFileContent = getFileContent(transpiledFilePath);
    const customComponentJsFileContent = replaceUnnecessaryWords(transpiledJsFileContent);
    generateFileContent(transpiledFilePath, customComponentJsFileContent);
};

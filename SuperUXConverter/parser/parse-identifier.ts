import ts from 'typescript';
import convertType from './convert-type';

const parseIdentifier = (node: ts.Identifier) => {
    const type = (node.escapedText as string) || node.text;
    return convertType(type);
};

export default parseIdentifier;

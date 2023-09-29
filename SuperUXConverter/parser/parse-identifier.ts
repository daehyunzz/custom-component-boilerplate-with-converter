import ts from 'typescript';

const parseIdentifier = (node: ts.Identifier) => {
    const type = (node.escapedText as string) || node.text;
    return type;
};

export default parseIdentifier;

import ts from 'typescript';

const getNodeName = (node: ts.Node) => {
    // @ts-ignore
    const name = node.name?.escapedText || node.text;
    return name;
};

export default getNodeName;

import ts from 'typescript';
import parseNode from './parse-node';

const parseInterface = (node: ts.InterfaceDeclaration) => {
    const properties = node.members.map(member => parseNode(member));
    return properties;
};

export default parseInterface;

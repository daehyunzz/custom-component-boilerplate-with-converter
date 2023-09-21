import ts from 'typescript';
import parseNode from './parse-node';

// name은 타입의 key 값
const parseTypeLiteralNode = (node: ts.TypeLiteralNode) => {
    const properties = node.members.map(member => parseNode(member));
    return properties;
};

export default parseTypeLiteralNode;

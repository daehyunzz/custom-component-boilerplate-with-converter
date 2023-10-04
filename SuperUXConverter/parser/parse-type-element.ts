import ts from 'typescript';
import parseNode from './parse-node';
import { getNodeName } from './utils';

const parseTypeElement = (node: ts.TypeElement) => {
    const name = getNodeName(node);
    // @ts-ignore
    const type = parseNode(node.type);

    return { name, type };
};

export default parseTypeElement;

import ts from 'typescript';
import convertType from './convert-type';
import parseIdentifier from './parse-identifier';
import parseInterface from './parse-interface';
import parseTypeElement from './parse-type-element';
import parseTypeLiteralNode from './parse-type-literal-node';

const parseNode = (node?: ts.Node) => {
    if (!node) return null;

    if (ts.isIdentifier(node)) {
        // 식별자인 경우
        return parseIdentifier(node);
    }

    if (ts.isTypeLiteralNode(node)) {
        // 객체 타입인 경우
        return parseTypeLiteralNode(node);
    }

    if (ts.isInterfaceDeclaration(node)) {
        // 인터페이스인 경우
        return parseInterface(node);
    }

    if (ts.isTypeElement(node)) {
        // 기본형인 경우
        return parseTypeElement(node);
    }

    return convertType(node.kind, node);
};

export default parseNode;

import ts from 'typescript';
import parseNode from './parse-node';

const convertType = (type, node?: ts.Node) => {
    if (type === ts.SyntaxKind.StringKeyword) return 'string';
    if (type === ts.SyntaxKind.NumberKeyword) return 'number';
    if (type === ts.SyntaxKind.BooleanKeyword) return 'boolean';
    if (type === ts.SyntaxKind.NullKeyword) return 'null';
    if (type === ts.SyntaxKind.UndefinedKeyword) return 'undefined';
    if (type === ts.SyntaxKind.SymbolKeyword) return 'symbol';
    if (type === ts.SyntaxKind.ObjectKeyword) return 'object';
    if (type === ts.SyntaxKind.TrueKeyword) return 'true';
    if (type === ts.SyntaxKind.FalseKeyword) return 'false';

    // React.ReactNode | ReactNode
    if (type === ts.SyntaxKind.TypeReference) {
        // @ts-ignore
        const { typeName } = node;

        if (typeName.escapedText) {
            return typeName.escapedText;
        }

        if (typeName.right.escapedText) {
            return typeName.right.escapedText;
        }
    }

    if (type === ts.SyntaxKind.TupleType && node) {
        // @ts-ignore
        const { elements } = node;
        return elements.map(typeNode => convertType(typeNode.kind, typeNode));
    }

    if (type === ts.SyntaxKind.ArrayType && node) {
        // @ts-ignore
        const elementType = convertType(node.elementType.kind, node.elementType);
        return { isArray: true, type: elementType };
    }

    if (type === ts.SyntaxKind.TypeLiteral && node) {
        // @ts-ignore
        const { members } = node;
        return members.map(member => parseNode(member));
    }

    if (type === ts.SyntaxKind.LiteralType && node) {
        // @ts-ignore
        return convertType(node.literal.kind, node.literal);
    }

    if (type === ts.SyntaxKind.UnionType && node) {
        // @ts-ignore
        const { types } = node;
        return types.map(typeNode => convertType(typeNode.kind, typeNode));
    }

    if (type === ts.SyntaxKind.StringLiteral && node) {
        // @ts-ignore
        return node?.text || type;
    }

    if (type === ts.SyntaxKind.NumericLiteral && node) {
        // @ts-ignore
        return node?.text || type;
    }

    // 나머지는 string 타입으로 우선 적용. 필요하면 타입 분기
    return 'string';
};

export default convertType;

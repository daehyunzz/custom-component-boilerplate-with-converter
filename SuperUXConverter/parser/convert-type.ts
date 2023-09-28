import ts from 'typescript';
import parseNode from './parse-node';

const convertType = (node: ts.Node) => {
    const { kind } = node;

    if (kind === ts.SyntaxKind.StringKeyword) return 'string';
    if (kind === ts.SyntaxKind.NumberKeyword) return 'number';
    if (kind === ts.SyntaxKind.BooleanKeyword) return 'boolean';
    if (kind === ts.SyntaxKind.NullKeyword) return 'null';
    if (kind === ts.SyntaxKind.UndefinedKeyword) return 'undefined';
    if (kind === ts.SyntaxKind.SymbolKeyword) return 'symbol';
    if (kind === ts.SyntaxKind.ObjectKeyword) return 'object';
    if (kind === ts.SyntaxKind.TrueKeyword) return 'true';
    if (kind === ts.SyntaxKind.FalseKeyword) return 'false';

    // React.ReactNode | ReactNode
    if (kind === ts.SyntaxKind.TypeReference) {
        // @ts-ignore
        const { typeName } = node;

        if (typeName.escapedText) {
            return typeName.escapedText;
        }

        if (typeName.right.escapedText) {
            return typeName.right.escapedText;
        }
    }

    if (kind === ts.SyntaxKind.TupleType) {
        // @ts-ignore
        const { elements } = node;
        return elements.map(typeNode => convertType(typeNode));
    }

    if (kind === ts.SyntaxKind.ArrayType) {
        // @ts-ignore
        const elementType = convertType(node.elementType);
        return { isArray: true, kind: elementType };
    }

    if (kind === ts.SyntaxKind.TypeLiteral) {
        // @ts-ignore
        const { members } = node;
        return members.map(member => parseNode(member));
    }

    if (kind === ts.SyntaxKind.LiteralType) {
        // @ts-ignore
        return convertType(node.literal);
    }

    if (kind === ts.SyntaxKind.UnionType) {
        // @ts-ignore
        const { types } = node;
        return types.map(typeNode => convertType(typeNode));
    }

    if (kind === ts.SyntaxKind.StringLiteral) {
        // @ts-ignore
        return node.text || kind;
    }

    if (kind === ts.SyntaxKind.NumericLiteral) {
        // @ts-ignore
        return node.text || kind;
    }

    // 나머지는 string 타입으로 우선 적용. 필요하면 타입 분기
    return 'string';
};

export default convertType;

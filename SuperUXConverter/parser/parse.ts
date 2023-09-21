import ts from 'typescript';
import parseNode from './parse-node';

const parse = (sourceCode: string) => {
    const sourceFile = ts.createSourceFile('interface.ts', sourceCode, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const result = [];

    ts.forEachChild(sourceFile, node => {
        result.push(parseNode(node));
    });

    return result[0];
};

export default parse;

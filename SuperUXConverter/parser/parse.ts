import ts from 'typescript';
import parseNode from './parse-node';

const parse = (sourceCode: string) => {
    const sourceFile = ts.createSourceFile('interface.ts', sourceCode, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const syntaxList = sourceFile.getChildAt(0);
    const result = syntaxList.getChildAt(0);

    return parseNode(result);
};

export default parse;

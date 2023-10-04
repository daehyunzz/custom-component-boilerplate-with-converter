import ts from 'typescript';
import os from 'os';

export const getNodeName = (node: ts.Node) => {
    // @ts-ignore
    const name = node.name?.escapedText || node.text;
    return name;
};

export const splitPath = (target: string) => {
    const platform = os.platform();

    if (platform === 'darwin') {
        // mac
        return target.split('/');
    }

    if (platform === 'win32') {
        // window
        return target.split('\\');
    }

    throw new Error('지원하지 않는 os입니다.');
};

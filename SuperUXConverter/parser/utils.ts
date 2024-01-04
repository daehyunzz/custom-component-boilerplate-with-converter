import ts from 'typescript';
import os from 'os';

const platform = os.platform();

export const getNodeName = (node: ts.Node) => {
    // @ts-ignore
    const name = node.name?.escapedText || node.text;
    return name;
};

export const splitPath = (target: string) => {
    if (platform === 'darwin') {
        // mac
        return target.split('/');
    }

    if (platform === 'win32') {
        // window
        return target.replace(/\\\\/g, '\\').split('\\');
    }

    throw new Error('지원하지 않는 os입니다.');
};

export const joinPath = (target: string[]) => {
    if (platform === 'darwin') {
        // mac
        return target.join('/');
    }

    if (platform === 'win32') {
        // window
        return target.join('\\');
    }

    throw new Error('지원하지 않는 os입니다.');
};

export const resolvePath = (target: string) => {
    if (platform === 'darwin') {
        // mac
        return target;
    }

    if (platform === 'win32') {
        // window
        return target.replace(/\//g, '\\');
    }

    throw new Error('지원하지 않는 os입니다.');
};

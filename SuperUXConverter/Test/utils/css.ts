/* eslint-disable no-cond-assign */
/* eslint-disable import/prefer-default-export */

export const cssToObject = (cssText: string) => {
    const regex = /([\w-]*)\s*:\s*([^;]*)/g;
    let match: RegExpExecArray | null;
    const properties: { [key: string]: string } = {};

    while ((match = regex.exec(cssText))) {
        properties[match[1]] = match[2].trim();
    }
    return properties;
};

import React from 'react';
import { renderToString } from 'react-dom/server';
import a from '../../src/Detail/Containers/주문현황/page';
import { cssToObject } from './utils/css';

// const componentString = renderToString(<a.단건상품주문상세 />).replace(
//     /style="([^"]*)"/g,
//     (_, styleValue) =>
//         `style=${JSON.stringify(
//             Object.entries(cssToObject(styleValue))
//                 .map(([key, value]) => `${key}: ${value}`)
//                 .join(';')
//         )}`
// );
const toCamelCase = (text: string) => {
    return text.replace(/-([a-z])/g, (_, styleValue) => {
        return styleValue.toUpperCase();
    });
};

const toReactStyleObject = (cssText: string) => {
    const cssObject = cssToObject(cssText);
    return Object.entries(cssObject).reduce((acc, [key, value]) => {
        acc[toCamelCase(key)] = `${toCamelCase(value)}`;
        return acc;
    }, {} as { [key: string]: string });
    // return Object.entries(cssToObject(cssText)).map(([key, value]) => ``)
};

const componentString = renderToString(<a.단건상품주문상세 />).replace(
    /style="([^"]*)"/g,
    (_, cssText) => `style={${JSON.stringify(toReactStyleObject(cssText))}}`
    // `style={${JSON.stringify(
    //     Object.entries(cssToObject(styleValue))
    //         .map(([key, value]) => `${toCamelCase(key)}: ${toCamelCase(value)}`)
    //         .join(';')
    // )}}`
);

console.log({ componentString: componentString.replace(/"/g, '') });
const TransformedComponent = () => {
    return <div dangerouslySetInnerHTML={{ __html: componentString }} />;
};

export default TransformedComponent;

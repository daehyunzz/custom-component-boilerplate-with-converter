// eslint-disable-next-line import/no-extraneous-dependencies
import { twj } from 'tw-to-css';

const extractClassNameFromJSX = (jsxString: string) => {
    // 정규 표현식을 사용하여 className 속성 추출
    const regex = /className=["](.*?)["]/g;
    const match = jsxString.match(regex);

    return match;
};

const twToCss = (tsxFile: string) => {
    const matches = extractClassNameFromJSX(tsxFile);

    if (matches === null) {
        throw new Error('일치하는 스타일 패턴이 없습니다.');
    }
    return matches.reduce((acc, match) => {
        return acc.replace(match, `style={${JSON.stringify(twj(match))}}`);
    }, tsxFile);
};

export default twToCss;

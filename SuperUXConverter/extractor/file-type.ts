/* eslint-disable @typescript-eslint/no-use-before-define */

// ReactNode
export const generateReactNodeContentObject = ({ name, type }) => {
    return {
        Name: name,
        Type: [generateContentTypeObject(type)],
        Control: {
            type: 'ReactNode',
        },
        DefaultValue: -1,
        InitialValue: -1,
        Basic: 1,
    };
};

// string
export const generateStringContentObject = ({ name, type }) => {
    return {
        Name: name,
        Type: [generateContentTypeObject(type)],
        Control: {
            type: 'TextField',
        },
        DefaultValue: '',
        InitialValue: '',
        Basic: 1,
    };
};

// number
export const generateNumberContentObject = ({ name, type }) => {
    return {
        Name: name,
        Type: [generateContentTypeObject(type)],
        Control: {
            type: 'Spinner',
            value: [0, null],
        },
        DefaultValue: 1,
        InitialValue: 1,
        Basic: 1,
    };
};

// boolean
export const generateBooleanContentObject = ({ name, type }) => {
    return {
        Name: name,
        Type: [generateContentTypeObject(type)],
        Control: {
            type: 'Dropdown',
            value: [true, false],
        },
        DefaultValue: false,
        InitialValue: false,
        Basic: 1,
    };
};

// Color
export const generateColorContentObject = ({ name, type }) => {
    return {
        Name: name,
        Type: [generateContentTypeObject(type)],
        Control: {
            type: 'TextField',
        },
        DefaultValue: '#ff625d',
        InitialValue: '#ff625d',
        Basic: 1,
    };
};

// literal
export const generateLiteralContentObject = ({ name, type }) => {
    return {
        Name: name,
        Type: [generateContentTypeObject(type)],
        Control: {
            type: 'Dropdown',
            value: type,
        },
        DefaultValue: type[0],
        InitialValue: type[0],
        Basic: 1,
    };
};

// object
export const generateObjectContentObject = ({ name, type }) => {
    const isArray = typeof type === 'object' && !!type.isArray;
    const isObject = Array.isArray(type) || (isArray && typeof type?.type === 'object');

    const DefaultValue = (() => {
        if (isArray && isObject) {
            const result = type.type.reduce(
                (acc, cur) => {
                    const 필드 = 오브젝트_배열_순회하면서_초기값_설정하기([cur]);
                    const [[key, value]] = Object.entries(필드) as [string, unknown][];
                    acc[0][key] = value;
                    return acc;
                },
                [{}]
            );
            return result;
        }
        if (isArray) return [];
        if (isObject) return 오브젝트_배열_순회하면서_초기값_설정하기(type);
        return {};
    })();

    return {
        Name: name,
        Type: [generateContentTypeObject(type)],
        Control: {
            type: 'TextArea',
        },
        DefaultValue,
        InitialValue: DefaultValue,
        Basic: 1,
    };
};

const 오브젝트_배열_순회하면서_초기값_설정하기 = typeInfos => {
    if (typeInfos.isArray) {
        return 오브젝트_배열_순회하면서_초기값_설정하기(typeInfos.type);
    }

    return typeInfos.reduce((acc, { name: key, type: value }) => {
        if (value === 'boolean') acc[key] = true;
        else if (value === 'number') acc[key] = 0;
        else if (value === 'string') acc[key] = '';
        else if (typeof value === 'object') acc[key] = 오브젝트_배열_순회하면서_초기값_설정하기(value);
        else acc[key] = '';
        return acc;
    }, {});
};

export const generateContentObject = typeInfo => {
    if (typeInfo.type === 'ReactNode') {
        return generateReactNodeContentObject(typeInfo);
    }

    if (typeInfo.type === 'number') {
        return generateNumberContentObject(typeInfo);
    }

    if (typeInfo.type === 'string') {
        return generateStringContentObject(typeInfo);
    }

    if (typeInfo.type === 'boolean') {
        return generateBooleanContentObject(typeInfo);
    }

    if (typeInfo.type === 'Color') {
        return generateColorContentObject(typeInfo);
    }

    if (Array.isArray(typeInfo.type) && typeInfo.type?.every(t => typeof t !== 'object')) {
        // literal 타입
        return generateLiteralContentObject(typeInfo);
    }

    // object과 이외의 타입들
    return generateObjectContentObject(typeInfo);
};
export const generateContentObjects = typeInfos => {
    return typeInfos.map(typeInfo => generateContentObject(typeInfo));
};

export const generateContentObjectWithoutSomeProps = typeInfo => {
    if (typeInfo.type === 'ReactNode' || typeInfo === 'ReactNode') {
        const { Control, Basic, ...rest } = generateReactNodeContentObject(typeInfo);
        return rest;
    }

    if (typeInfo.type === 'number' || typeInfo === 'number') {
        const { Control, Basic, ...rest } = generateNumberContentObject(typeInfo);
        return rest;
    }

    if (typeInfo.type === 'string' || typeInfo === 'string') {
        const { Control, Basic, ...rest } = generateStringContentObject(typeInfo);
        return rest;
    }

    if (typeInfo.type === 'boolean' || typeInfo === 'boolean') {
        const { Control, Basic, ...rest } = generateBooleanContentObject(typeInfo);
        return rest;
    }

    // object과 이외의 타입들
    const { Control, Basic, ...rest } = generateObjectContentObject(typeInfo);
    return rest;
};

export const generateContentObjectsWithoutSomeProps = typeInfos => {
    return typeInfos.map(typeInfo => generateContentObjectWithoutSomeProps(typeInfo));
};

// Control과 Basic 제거
export const generateContentTypeObject = typeInfo => {
    const isArray = typeof typeInfo === 'object' && !!typeInfo.isArray;
    const isObject =
        (Array.isArray(typeInfo) && typeInfo.every(t => typeof t === 'object')) ||
        (isArray && typeof typeInfo?.type === 'object');
    const isLiteral = Array.isArray(typeInfo) && typeInfo.every(t => typeof t !== 'object');

    const type = (() => {
        // SuperUX의 정책에 따라 혼합된 형태의 타입은 제공하지않음
        if (isLiteral) return typeof typeInfo[0];
        if (isObject && isArray) return generateContentObjectsWithoutSomeProps(typeInfo.type);
        if (isObject)
            return generateContentObjectsWithoutSomeProps(typeInfo.map(t => (t.name ? t : { name: t, type: t })));

        if (isArray && typeof typeInfo.type === 'string') return typeInfo.type;

        return typeInfo || typeInfo.type;
    })();

    if (isLiteral) {
        return {
            isArray,
            isObject,
            literal: typeInfo,
            type,
        };
    }

    return {
        isArray,
        isObject,
        type,
    };
};

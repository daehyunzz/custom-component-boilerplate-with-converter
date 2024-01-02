/* eslint-disable jsdoc/require-jsdoc */
import {
    generateBooleanContentObject,
    generateColorContentObject,
    generateContentTypeObject,
    generateLiteralContentObject,
    generateNumberContentObject,
    generateObjectContentObject,
    generateReactNodeContentObject,
    generateStringContentObject,
} from 'extractor/file-type';

describe('ContentTypeObject 생성을 테스트한다.', () => {
    const OBJECT_KEYS = ['isArray', 'isObject', 'type'] as const;

    it('ReactNode의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = 'ReactNode';

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: false,
            isObject: false,
            type: 'ReactNode',
        });
    });

    it('string의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = 'string';

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: false,
            isObject: false,
            type: 'string',
        });
    });

    it('number의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = 'number';

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: false,
            isObject: false,
            type: 'number',
        });
    });

    it('boolean의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = 'boolean';

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: false,
            isObject: false,
            type: 'boolean',
        });
    });

    it('string[]의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = { isArray: true, type: 'string' };

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: true,
            isObject: false,
            type: 'string',
        });
    });

    it('number[]의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = { isArray: true, type: 'number' };

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: true,
            isObject: false,
            type: 'number',
        });
    });

    it('boolean[]의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = { isArray: true, type: 'boolean' };

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: true,
            isObject: false,
            type: 'boolean',
        });
    });

    it('objectArray의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = {
            isArray: true,
            type: [
                { name: 'daehyun', type: 'string' },
                { name: 'tmax', type: 'string' },
            ],
        };

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: true,
            isObject: true,
            type: [
                {
                    Name: 'daehyun',
                    Type: [
                        {
                            isArray: false,
                            isObject: false,
                            type: 'string',
                        },
                    ],
                    DefaultValue: '',
                    InitialValue: '',
                },
                {
                    Name: 'tmax',
                    Type: [
                        {
                            isArray: false,
                            isObject: false,
                            type: 'string',
                        },
                    ],
                    DefaultValue: '',
                    InitialValue: '',
                },
            ],
        });
    });

    it('objectNotArray의 ContentTypeObject를 생성한다.', () => {
        // Arrange
        const type = [
            { name: 'daehyun', type: 'string' },
            { name: 'tmax', type: 'string' },
        ];

        // Act
        const result = generateContentTypeObject(type);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            isArray: false,
            isObject: true,
            type: [
                {
                    Name: 'daehyun',
                    Type: [
                        {
                            isArray: false,
                            isObject: false,
                            type: 'string',
                        },
                    ],
                    DefaultValue: '',
                    InitialValue: '',
                },
                {
                    Name: 'tmax',
                    Type: [
                        {
                            isArray: false,
                            isObject: false,
                            type: 'string',
                        },
                    ],
                    DefaultValue: '',
                    InitialValue: '',
                },
            ],
        });
    });
});

describe('ContentObject 생성을 테스트한다.', () => {
    const OBJECT_KEYS = ['Name', 'Type', 'Control', 'DefaultValue', 'InitialValue', 'Basic'] as const;

    it('ReactNode ContentObject를 생성한다.', () => {
        // Arrange
        const node = { name: 'node', type: 'ReactNode' };

        // Act
        const result = generateReactNodeContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            Name: 'node',
            Type: [
                {
                    isArray: false,
                    isObject: false,
                    type: 'ReactNode',
                },
            ],
            Control: {
                type: 'ReactNode',
            },
            DefaultValue: -1,
            InitialValue: -1,
            Basic: 1,
        });
    });

    it('string ContentObject를 생성한다.', () => {
        // Arrange
        const node = { name: 'daehyun', type: 'string' };

        // Act
        const result = generateStringContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            Name: 'daehyun',
            Type: [
                {
                    isArray: false,
                    isObject: false,
                    type: 'string',
                },
            ],
            Control: {
                type: 'TextField',
            },
            DefaultValue: '',
            InitialValue: '',
            Basic: 1,
        });
    });

    it('number ContentObject를 생성한다.', () => {
        // Arrange
        const node = { name: 'age', type: 'number' };

        // Act
        const result = generateNumberContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            Name: 'age',
            Type: [
                {
                    isArray: false,
                    isObject: false,
                    type: 'number',
                },
            ],
            Control: {
                type: 'Spinner',
                value: [0, null],
            },
            DefaultValue: 1,
            InitialValue: 1,
            Basic: 1,
        });
    });

    it('boolean ContentObject를 생성한다.', () => {
        // Arrange
        const node = { name: 'trueOrFalse', type: 'boolean' };

        // Act
        const result = generateBooleanContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            Name: 'trueOrFalse',
            Type: [
                {
                    isArray: false,
                    isObject: false,
                    type: 'boolean',
                },
            ],
            Control: {
                type: 'Dropdown',
                value: [true, false],
            },
            DefaultValue: false,
            InitialValue: false,
            Basic: 1,
        });
    });

    it('Color ContentObject를 생성한다.', () => {
        // Arrange
        const node = { name: 'color', type: 'Color' };

        // Act
        const result = generateColorContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            Name: 'color',
            Type: [
                {
                    isArray: false,
                    isObject: false,
                    type: 'Color',
                },
            ],
            Control: {
                type: 'TextField',
            },
            DefaultValue: '#ff625d',
            InitialValue: '#ff625d',
            Basic: 1,
        });
    });

    it('literal ContentObject를 생성한다.', () => {
        // Arrange
        const node = { name: 'dropdownString', type: ['Apple', 'Banana', 'Cherry'] };

        // Act
        const result = generateLiteralContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);

        expect(result).toEqual({
            Name: 'dropdownString',
            Type: [
                {
                    isArray: false,
                    isObject: false,
                    literal: ['Apple', 'Banana', 'Cherry'],
                    type: 'string',
                },
            ],
            Control: {
                type: 'Dropdown',
                value: ['Apple', 'Banana', 'Cherry'],
            },
            DefaultValue: 'Apple',
            InitialValue: 'Apple',
            Basic: 1,
        });
    });

    it('objectArray ContentObject를 생성한다.', () => {
        // Arrange
        const node = {
            name: 'objectArray',
            type: {
                isArray: true,
                type: [
                    { name: 'key1', type: 'string' },
                    { name: 'key2', type: 'number' },
                    { name: 'key3', type: 'boolean' },
                ],
            },
        };

        // Act
        const result = generateObjectContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            Name: 'objectArray',
            Type: [
                {
                    isArray: true,
                    isObject: true,
                    type: [
                        {
                            Name: 'key1',
                            Type: [{ isArray: false, isObject: false, type: 'string' }],
                            DefaultValue: '',
                            InitialValue: '',
                        },
                        {
                            Name: 'key2',
                            Type: [{ isArray: false, isObject: false, type: 'number' }],
                            DefaultValue: 1,
                            InitialValue: 1,
                        },
                        {
                            Name: 'key3',
                            Type: [{ isArray: false, isObject: false, type: 'boolean' }],
                            DefaultValue: false,
                            InitialValue: false,
                        },
                    ],
                },
            ],
            Control: {
                type: 'TextArea',
            },
            DefaultValue: [
                {
                    key1: '',
                    key2: 0,
                    key3: true,
                },
            ],
            InitialValue: [
                {
                    key1: '',
                    key2: 0,
                    key3: true,
                },
            ],
            Basic: 1,
        });
    });

    it('objectNotArray ContentObject를 생성한다.', () => {
        // Arrange
        const node = {
            name: 'objectNotArray',
            type: [
                { name: 'key1', type: 'string' },
                { name: 'key2', type: 'number' },
                { name: 'key3', type: 'boolean' },
            ],
        };

        // Act
        const result = generateObjectContentObject(node);

        // Assert
        expect(Object.keys(result)).toEqual(OBJECT_KEYS);
        expect(result).toEqual({
            Name: 'objectNotArray',
            Type: [
                {
                    isArray: false,
                    isObject: true,
                    type: [
                        {
                            Name: 'key1',
                            Type: [{ isArray: false, isObject: false, type: 'string' }],
                            DefaultValue: '',
                            InitialValue: '',
                        },
                        {
                            Name: 'key2',
                            Type: [{ isArray: false, isObject: false, type: 'number' }],
                            DefaultValue: 1,
                            InitialValue: 1,
                        },
                        {
                            Name: 'key3',
                            Type: [{ isArray: false, isObject: false, type: 'boolean' }],
                            DefaultValue: false,
                            InitialValue: false,
                        },
                    ],
                },
            ],
            Control: {
                type: 'TextArea',
            },
            DefaultValue: {
                key1: '',
                key2: 0,
                key3: true,
            },
            InitialValue: {
                key1: '',
                key2: 0,
                key3: true,
            },
            Basic: 1,
        });
    });
});

import parse from 'parser/parse';

it('interface property를 추출한다.', () => {
    // Arrange
    const sourceCode = `interface Props {
        className: string; // Type.type이 string인 prop
        color: Color; // Type.type이 Color인 prop
        dropdownString: ['Apple', 'Banana', 'Cherry']; // Type.type이 string이며, Control.type이 Dropdown인 prop
        disabled: boolean[]; // Type.type이 boolean이며, Control.type이 Dropdown인 prop
        spinner: number; // Type.type이 number인 prop
        objectNotArray: { key1: string; key2: number }; // Type.type이 object이며, Type.isArray가 false인 prop
        objectArray: { key1: string; key2: number; key3: boolean }[]; // Type.type이 object이며, Type.isArray가 true인 prop
        node: React.ReactNode; // Type.type이 ReactNode인 prop
        objectWithLiteralObjectArray: { 소속: string; 정보: { 이름: string; 나이: number }[] }[];
    }`;

    // Act
    const result = parse(sourceCode);

    // Assert
    expect(result).toEqual([
        { name: 'className', type: 'string' },
        { name: 'color', type: 'Color' },
        { name: 'dropdownString', type: ['Apple', 'Banana', 'Cherry'] },
        { name: 'disabled', type: { isArray: true, type: 'boolean' } },
        { name: 'spinner', type: 'number' },
        {
            name: 'objectNotArray',
            type: [
                { name: 'key1', type: 'string' },
                { name: 'key2', type: 'number' },
            ],
        },
        {
            name: 'objectArray',
            type: {
                isArray: true,
                type: [
                    { name: 'key1', type: 'string' },
                    { name: 'key2', type: 'number' },
                    { name: 'key3', type: 'boolean' },
                ],
            },
        },
        { name: 'node', type: 'ReactNode' },
        {
            name: 'objectWithLiteralObjectArray',
            type: {
                isArray: true,
                type: [
                    { name: '소속', type: 'string' },
                    {
                        name: '정보',
                        type: {
                            isArray: true,
                            type: [
                                { name: '이름', type: 'string' },
                                { name: '나이', type: 'number' },
                            ],
                        },
                    },
                ],
            },
        },
    ]);
});

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';

// undefined는 prop에 사용하지말고 undefined로 명시해줘야함
interface Props {
    objectLiteral: { key: string; key2: number };
    objectLiteralArray: { key: string; key2: number }[];
    // className: string; // Type.type이 string인 prop
    // color: Color; // Type.type이 Color인 prop
    // dropdownString: ['Apple', 'Banana', 'Cherry']; // Type.type이 string이며, Control.type이 Dropdown인 prop
    // disabled: boolean[]; // Type.type이 boolean이며, Control.type이 Dropdown인 prop
    // spinner: number; // Type.type이 number인 prop
    // objectNotArray: { key1: string; key2: number }; // Type.type이 object이며, Type.isArray가 false인 prop
    // objectArray: { key1: string; key2: number; key3: boolean }[]; // Type.type이 object이며, Type.isArray가 true인 prop
    // node: React.ReactNode; // Type.type이 ReactNode인 prop

    // stringProp: string;
    // numberProp: number;
    // booleanProp: boolean;
    // symbolProp: symbol;
    // undefinedProp: undefined;
    // nullProp: null;
    // _objectProp: object;

    // stringLiteralProp: 'stringLiteral';
    // numberLiteralProp: 1;
    // booleanLiteralTrueProp: true;
    // booleanLiteralFalseProp: false;
    // objectLiteralProp: {
    //     stringProp: string;
    //     numberProp: number;
    //     booleanProp: boolean;
    // };

    // stringArrayProp: string[];
    // numberArrayProp: number[];
    // booleanArrayProp: boolean[];
    // objectLiteralArrayProp: {
    //     stringProp: string;
    //     numberProp: number;
    //     booleanProp: boolean;
    // }[];

    // unionOrProp: 'a' | 'b';
    // unionAndProp: 'a' & 'b';
    // unionOrArrayProp: ('a' | 'b')[];
    // unionAndArrayProp: ('a' & 'b')[];

    // tupleProp: [string, number, boolean, symbol, null, undefined];
    // tupleArrayProp: [string, number, boolean, symbol, null, undefined][];
}

const ExampleComponent: React.FC<any> = React.forwardRef<any, Props>(({ objectLiteral, ...rest }, ref) => {
    return <div>example</div>;
});

export default ExampleComponent;

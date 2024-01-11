/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';

interface Props {
    text: string;
    color: string;
    borderColor: string;
    backgroundColor?: string;
}

const EventInfos: EventObject[] = [
    {
        Name: 'onClick',
        Type: 'MouseEvent',
        Inputs: ['e'],
        Description: '클릭 시 페이지 이동',
    },
];
const Button: React.FC<any> = React.forwardRef<any, Props>(
    ({ text, color, borderColor, backgroundColor = 'white' }, ref) => {
        return (
            <button
                onClick={() => {
                    console.log('click');
                }}
                type="button"
                style={{
                    color,
                    width: 'fit-content',
                    border: `1.5px solid ${borderColor}`,
                    backgroundColor,
                    height: '36px',
                    padding: '8px 12px',
                    borderRadius: '4px',
                }}
            >
                {text}
            </button>
        );
    }
);

export default Button;

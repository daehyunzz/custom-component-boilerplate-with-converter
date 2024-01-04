/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */
import { EventObject } from 'extractor/types';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const EventInfos: EventObject[] = [
    {
        Name: 'onClick',
        Type: 'MouseEvent',
        Inputs: [''],
        NewValueLocation: { index: 0 },
        Description: '',
    },
];

const Container: React.FC<any> = React.forwardRef<any, Props>(({ children }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                borderRadius: '10px',
                border: '1px solid #D1D5DB',
                background: 'white',
            }}
        >
            {children}
        </div>
    );
});

export default Container;

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */
// import { EventObject } from 'extractor/types';
import React from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
}

// const EventInfos: EventObject[] = [
//     {
//         Name: 'onClick',
//         Type: 'MouseEvent',
//         Inputs: [''],
//         NewValueLocation: { index: 0 },
//         Description: '',
//     },
// ];

const DetailTextRowContainer: React.FC<any> = React.forwardRef<any, Props>(({ children }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
                background: 'white',
                width: '100%',
                gap: '24px',
            }}
        >
            {children}
        </div>
    );
});

export default DetailTextRowContainer;

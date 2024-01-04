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

const DetailTableRowContainer: React.FC<any> = React.forwardRef<any, Props>(({ children }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
                background: 'white',
                borderBottom: '1px solid #E5E7EB',
                width: '100%',
            }}
        >
            {children}
        </div>
    );
});

export default DetailTableRowContainer;

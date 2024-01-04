/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */
// import { EventObject } from 'extractor/types';
import React from 'react';

interface Props {
    title: string;
    value: React.ReactNode;
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

const DetailTableRowCell: React.FC<any> = React.forwardRef<any, Props>(({ title, value }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                height: '56px',
                boxSizing: 'border-box',
                width: '100%',
            }}
        >
            <p
                style={{
                    display: 'flex',
                    margin: 0,
                    padding: '16px',
                    background: '#F9FAFB',
                    boxSizing: 'border-box',
                    width: '302px',
                    lineHeight: '26px',

                    fontStyle: 'normal',
                    fontWeight: 600,
                }}
            >
                {title}
            </p>
            <p
                style={{
                    display: 'flex',
                    margin: 0,
                    flex: 1,
                    padding: '16px',
                    lineHeight: '26px',
                    alignItems: 'center',
                }}
            >
                {value}
            </p>
        </div>
    );
});

export default DetailTableRowCell;

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

const DetailTextRow: React.FC<any> = React.forwardRef<any, Props>(({ title, value }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                boxSizing: 'border-box',
                width: '100%',
            }}
        >
            <span
                style={{
                    display: 'flex',
                    margin: 0,
                    width: '302px',
                    lineHeight: '24px',
                    height: '24px',

                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '18px',
                }}
            >
                {title}
            </span>
            <pre
                style={{
                    display: 'flex',
                    margin: 0,
                    flex: 1,
                    lineHeight: '26px',
                    fontFamily: 'Pretendard',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,

                    paddingLeft: '16px',
                }}
            >
                {value}
            </pre>
        </div>
    );
});

export default DetailTextRow;

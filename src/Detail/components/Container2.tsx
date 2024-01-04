/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */
// import { EventObject } from 'extractor/types';
import React from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
    gap?: string;
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

const Container: React.FC<any> = React.forwardRef<any, Props>(({ title, children, gap }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '10px',
                border: '1px solid #D1D5DB',
                background: 'white',
                width: '100%',
            }}
        >
            <div
                style={{
                    height: '26px',
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#F9FAFB',
                    borderRadius: '10px 10px 0px 0px',
                }}
            >
                <span
                    style={{
                        padding: '25px 32px',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '20px',
                        lineHeight: '26px',
                    }}
                >
                    {title}
                </span>
            </div>
            <div
                style={{
                    boxSizing: 'border-box',
                    padding: '32px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap,
                }}
            >
                {children}
            </div>
        </div>
    );
});

export default Container;

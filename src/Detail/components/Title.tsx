/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';

interface Props {
    title: string;
}

const Title: React.FC<any> = React.forwardRef<any, Props>(({ title }, ref) => {
    return (
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
    );
});

export default Title;

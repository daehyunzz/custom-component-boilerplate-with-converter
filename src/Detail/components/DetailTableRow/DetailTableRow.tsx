/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const DetailTableRow: React.FC<any> = React.forwardRef<any, Props>(({ children }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                border: '1px solid #E5E7EB',
                borderBottom: '0px',
                boxSizing: 'border-box',
                width: '100%',
            }}
        >
            {children}
        </div>
    );
});

export default DetailTableRow;

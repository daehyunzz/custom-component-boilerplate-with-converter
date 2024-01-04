/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';

interface Props {
    제목: string;
    table: React.ReactNode;
}
const OptionBox: React.FC<any> = React.forwardRef<any, Props>(({ 제목, table }, ref) => {
    return (
        <div>
            <h2
                style={{
                    margin: 0,
                    padding: 0,
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '26px',
                    color: '#6B7280',
                    marginBottom: '24px',
                }}
            >
                {제목}
            </h2>
            {table}
        </div>
    );
});

export default OptionBox;

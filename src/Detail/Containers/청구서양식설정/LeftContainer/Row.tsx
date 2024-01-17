import React from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
interface Props {
    title: string;
    status: boolean;
    content?: React.ReactNode;
}

const Row = ({ title, status, content }: Props) => {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <span
                style={{
                    color: '#111928',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '20px',
                    minWidth: '180px',
                }}
            >
                {title}
            </span>
            {content}
        </div>
    );
};

export default Row;

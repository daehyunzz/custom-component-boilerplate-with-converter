/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';

interface Props {
    left: string;
    right: string;
    priceColor?: string;
    color?: string;
}

const SpaceBetweenBlock: React.FC<any> = React.forwardRef<any, Props>(
    ({ left, right, priceColor = '#1C64F2', color }, ref) => {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <span
                    style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '26px',
                        color: '#111928',
                    }}
                >
                    {left}
                </span>
                <div>
                    <span
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: '26px',
                            color: priceColor,
                        }}
                    >
                        {right}
                    </span>
                    <span
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: '26px',
                            color: color ?? '#111928',
                        }}
                    >
                        {` 원`}
                    </span>
                </div>
            </div>
        );
    }
);

export default SpaceBetweenBlock;

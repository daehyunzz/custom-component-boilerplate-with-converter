/* eslint-disable jsdoc/require-jsdoc */

import React from 'react';

interface Props {
    제목: string;
    고객정보: { key: string; value: string }[];
}

const 고객정보Container: React.FC<any> = React.forwardRef<any, Props>(({ 제목, 고객정보 }, ref) => {
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
                    {제목}
                </span>
            </div>
            <div
                style={{
                    boxSizing: 'border-box',
                    padding: '32px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
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
                                {고객정보[0].key}
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
                                {고객정보[0].value}
                            </p>
                        </div>
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
                                {고객정보[1].key}
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
                                {고객정보[1].value}
                            </p>
                        </div>
                    </div>
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
                                {고객정보[2].key}
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
                                {고객정보[2].value}
                            </p>
                        </div>
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
                                {고객정보[3].key}
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
                                {고객정보[3].value}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default 고객정보Container;

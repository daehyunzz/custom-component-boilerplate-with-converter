import React from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
interface Props {
    제목: string;
    상품상세정보: { key: string; value: string }[];
    추가상품?: { key: string; value: string }[];
}

const 상품상세정보Container: React.FC<any> = React.forwardRef<any, Props>(({ 제목, 상품상세정보, 추가상품 }, ref) => {
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
                    gap: '32px',
                }}
            >
                {/** 상품 정보 */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        background: 'white',
                        width: '100%',
                        gap: '24px',
                    }}
                >
                    {상품상세정보.map(({ key, value }) => {
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
                                    {key}
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
                    })}
                </div>

                {/** 추가상품 */}
                {추가상품 && (
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
                            }}
                        >
                            추가 상품
                        </h2>
                        <div style={{ height: '24px' }} />
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
                            {추가상품.map(({ key, value }) => {
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
                                                {key}
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
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default 상품상세정보Container;

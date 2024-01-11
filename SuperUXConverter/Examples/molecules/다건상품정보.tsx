import React from 'react';

/** 상품정보를 어떻게 할지 결정해야한다. */
// ProductInformation
// eslint-disable-next-line jsdoc/require-jsdoc
interface Props {
    제목: string;
    상품들: {
        상품기본정보: { key: string; value: string }[];
        옵션들: {
            추가상품?: { key: string; value: string }[];
            요금제?: { key: string; value: string }[];
        };
        청구금액: string;
    }[];
    총청구금액: string;
}

const 다건상품상세정보Container: React.FC<any> = React.forwardRef<any, Props>(({ 제목, 상품들, 총청구금액 }, ref) => {
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
                {상품들.map(({ 상품기본정보, 옵션들: { 추가상품, 요금제 }, 청구금액 }, index) => {
                    return (
                        <>
                            <span
                                style={{
                                    color: '#1c64f2',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '26px',
                                }}
                            >
                                상품{index + 1}
                            </span>
                            <blockquote
                                style={{
                                    borderLeft: '4px solid #e5e7eb',
                                    paddingLeft: '32px',
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '33px',
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
                                    {상품기본정보.map(({ key, value }) => {
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
                                                marginBottom: '24px',
                                            }}
                                        >
                                            추가 상품
                                        </h2>
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
                                {/** 요금제 */}
                                {요금제 && (
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
                                            요금제
                                        </h2>
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
                                            {요금제.map(({ key, value }) => {
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
                                        청구금액
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
                                                color: '#111928',
                                            }}
                                        >
                                            {청구금액}
                                        </span>
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
                                            {` 원`}
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                            <div style={{ height: '1px', width: '100%', backgroundColor: '#E5E7EB', margin: `0` }} />
                        </>
                    );
                })}
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
                        총 청구금액
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
                                color: '#1C64F2',
                            }}
                        >
                            {총청구금액}
                        </span>
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
                            {` 원`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default 다건상품상세정보Container;

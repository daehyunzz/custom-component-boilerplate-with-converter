/* eslint-disable jsdoc/require-jsdoc */
// PaymentInformation
import React from 'react';

interface Props {
    제목: string;
    과금유형: string;

    /** 청구서 정보 */
    옵션1제목: string;

    옵션1_값들: {
        옵션1_1_값: string;
        옵션1_3_값: string;
    };
    옵션1_1_키: string;

    옵션1_2_키: string;
    옵션1_2_값: React.ReactNode;

    옵션1_3_키: string;

    /** 이전 청구서 정보 */
    옵션2제목: string;

    옵션2_1_키: string;
    옵션2_1_값: string;

    옵션2_2_키: string;
    옵션2_2_값: string;

    옵션2_3_키: string;
    옵션2_3_값: string;

    옵션2_4_키: string;
    옵션2_4_값: React.ReactNode;

    옵션2_5_키: string;
    옵션2_5_값: string;

    옵션2_6_키: string;
    옵션2_6_값: React.ReactNode;
}

// const EventInfos: EventObject[] = [
//     {
//         Name: 'onClick',
//         Type: 'MouseEvent',
//         Inputs: ['e'],
//         Description: '클릭 시 페이지 이동',
//     },
// ];

const 결제정보Container: React.FC<any> = React.forwardRef<any, Props>(
    (
        {
            제목,
            과금유형,
            옵션1제목,
            옵션1_1_키,
            옵션1_값들,
            옵션1_2_키,
            옵션1_2_값,
            옵션1_3_키,
            옵션2제목,
            옵션2_1_키,
            옵션2_1_값,
            옵션2_2_키,
            옵션2_2_값,
            옵션2_3_키,
            옵션2_3_값,
            옵션2_4_키,
            옵션2_4_값,
            옵션2_5_키,
            옵션2_5_값,
            옵션2_6_키,
            옵션2_6_값,
            onClick,
        },
        ref
    ) => {
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
                        gap: '24px',
                    }}
                >
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
                                과금유형
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
                                {과금유형}
                            </pre>
                        </div>
                    </div>

                    <div
                        style={{
                            height: '1px',
                            width: '100%',
                            backgroundColor: '#E5E7EB',
                            marginTop: '0px',
                            marginBottom: '0px',
                        }}
                    />

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
                            {옵션1제목}
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
                                        {옵션1_1_키}
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
                                        {옵션1_값들.옵션1_1_값}
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
                                        {옵션1_2_키}
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
                                        {옵션1_2_값}
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
                                        {옵션1_3_키}
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
                                        {옵션1_값들.옵션1_3_값}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            {옵션2제목}
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
                                        {옵션2_1_키}
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
                                        {옵션2_1_값}
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
                                        {옵션2_2_키}
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
                                        {옵션2_2_값}
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
                                        {옵션2_3_키}
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
                                        {옵션2_3_값}
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
                                        {옵션2_4_키}
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
                                        {옵션2_4_값}
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
                                        {옵션2_5_키}
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
                                        {옵션2_5_값}
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
                                        {옵션2_6_키}
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
                                        {옵션2_6_값}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={e => onClick(e)}
                        type="button"
                        style={{
                            color: '#374151',
                            width: 'fit-content',
                            border: `1.5px solid #D1D5DB`,
                            backgroundColor: '#F9FAFB',
                            height: '36px',
                            padding: '8px 12px',
                            borderRadius: '4px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                flexGrow: 0,
                            }}
                        >
                            <span>지난 청구서 기록 바로가기</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M13.8538 8.35403L9.35375 12.854C9.25993 12.9478 9.13268 13.0006 9 13.0006C8.86732 13.0006 8.74007 12.9478 8.64625 12.854C8.55243 12.7602 8.49972 12.633 8.49972 12.5003C8.49972 12.3676 8.55243 12.2403 8.64625 12.1465L12.2931 8.50028H2.5C2.36739 8.50028 2.24021 8.4476 2.14645 8.35383C2.05268 8.26006 2 8.13289 2 8.00028C2 7.86767 2.05268 7.74049 2.14645 7.64672C2.24021 7.55296 2.36739 7.50028 2.5 7.50028H12.2931L8.64625 3.85403C8.55243 3.76021 8.49972 3.63296 8.49972 3.50028C8.49972 3.3676 8.55243 3.24035 8.64625 3.14653C8.74007 3.05271 8.86732 3 9 3C9.13268 3 9.25993 3.05271 9.35375 3.14653L13.8538 7.64653C13.9002 7.69296 13.9371 7.74811 13.9623 7.80881C13.9874 7.86951 14.0004 7.93457 14.0004 8.00028C14.0004 8.06599 13.9874 8.13105 13.9623 8.19175C13.9371 8.25245 13.9002 8.30759 13.8538 8.35403Z"
                                    fill="#374151"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
);

export default 결제정보Container;

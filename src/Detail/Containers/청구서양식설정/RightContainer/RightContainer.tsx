/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';

// PaymentFormRightContainer
// eslint-disable-next-line jsdoc/require-jsdoc
interface Props {
    기업로고: string;
    기업로고Status: boolean;
    타이틀: string;
    타이틀Status: boolean;

    고객명: string;
    청구번호: string;
    청구기간: string;
    청구금액: string;
    청구일자: string;
    결제기한: string;
    예정결제수단: string;

    청구내역: {
        주문번호: string;
        상품명: string;
        요금제: string;

        사용기간: string;
        사용요금: string;
        옵션요금: string;
        세금: string;
        적용: string;
        청구금액: string;
    }[];
    총청구금액: string;
}

const RightContainer: React.FC<any> = React.forwardRef<any, Props>(
    (
        {
            기업로고,
            기업로고Status,
            타이틀,
            타이틀Status,
            고객명,
            청구번호,
            청구기간,
            청구금액,
            청구일자,
            결제기한,
            예정결제수단,
            청구내역,
            총청구금액,
        },
        ref
    ) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;

        const HighLight = ({ word }: { word: string }) => {
            return (
                <span
                    style={{
                        color: '#1C64F2',
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: '26px',
                        wordWrap: 'break-word',
                    }}
                >
                    {word}
                </span>
            );
        };
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '10px',
                    border: '1px solid #D1D5DB',
                    background: 'white',
                    width: '664px',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        backgroundColor: '#FFF',
                        borderRadius: '10px 10px 0px 0px',
                        borderBottom: '0px',
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
                        청구서 미리보기
                    </span>
                </div>
                <div
                    style={{
                        boxSizing: 'border-box',
                        padding: '32px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#E5E7EB',
                        borderRadius: '0px 0px 10px 10px',
                        flex: 1,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#FFFFFF',
                            padding: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/** 기업로고 */}
                        {기업로고Status && (
                            <img
                                src={기업로고}
                                alt="기업로고"
                                style={{ width: '240px', height: '120px', objectFit: 'contain' }}
                            />
                        )}
                        {/** 타이틀 */}
                        {타이틀Status && (
                            <h2
                                style={{
                                    margin: '0px 0px 48px 0px',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    lineHeight: '26px',
                                }}
                            >
                                {타이틀}
                            </h2>
                        )}
                        {/** 청구서 테이블 */}
                        <h2 style={{ margin: '0px 0px 16px 0px' }}>
                            <HighLight word={`${고객명}님`} /> 의 {year}년 {month}월 청구서
                        </h2>
                        <div style={{ height: '1px', backgroundColor: '#000' }} />
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
                                        청구번호
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
                                        {청구번호}
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
                                        청구기간
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
                                        {청구기간}
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
                                        청구금액
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
                                        {청구금액}
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
                                        청구일자
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
                                        {청구일자}
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
                                        결제기한
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
                                        {결제기한}
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
                                        예정 결제수단
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
                                        {예정결제수단}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '1px', backgroundColor: '#000', marginBottom: '24px' }} />
                        {/** 청구내역 */}
                        <h2 style={{ marginBottom: '16px' }}>청구내역</h2>

                        {청구내역?.map(
                            ({ 주문번호, 상품명, 요금제, 사용기간, 사용요금, 옵션요금, 세금, 적용, 청구금액 }) => {
                                return (
                                    <React.Fragment key={주문번호}>
                                        <blockquote
                                            style={{
                                                borderLeft: '4px solid #e5e7eb',
                                                paddingLeft: '16px',
                                                margin: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '8px',
                                            }}
                                        >
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <HighLight word={주문번호} />
                                                <HighLight word={상품명} />
                                                <HighLight word={요금제} />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span
                                                    style={{
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '26px',
                                                        color: '#111928',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    사용기간
                                                </span>
                                                <span>{사용기간}</span>
                                            </div>
                                            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        lineHeight: '26px',
                                        color: '#111928',
                                        wordWrap: 'break-word',
                                    }}
                                >
                                    사용량
                                </span>
                                <span>{사용량}</span>
                            </div> */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span
                                                    style={{
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '26px',
                                                        color: '#111928',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    사용 요금
                                                </span>
                                                <span>+ {사용요금} 원</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span
                                                    style={{
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '26px',
                                                        color: '#111928',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    옵션 요금
                                                </span>
                                                <span>+ {옵션요금} 원</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span
                                                    style={{
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '26px',
                                                        color: '#111928',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    세금
                                                </span>
                                                <span>+ {세금} 원</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span
                                                    style={{
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '26px',
                                                        color: '#111928',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    적용 $포인트관리설정명칭
                                                </span>
                                                <span>- {적용}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span
                                                    style={{
                                                        fontSize: '18px',
                                                        fontWeight: 600,
                                                        lineHeight: '24px',
                                                        color: '#111928',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    청구금액
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '18px',
                                                        fontWeight: 600,
                                                        lineHeight: '24px',
                                                        color: '#111928',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    {청구금액} 원
                                                </span>
                                            </div>
                                        </blockquote>
                                        <div style={{ height: '1px', margin: '16px 0px', background: '#E5E7EB' }} />
                                    </React.Fragment>
                                );
                            }
                        )}

                        <h2
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                margin: '0px',
                                fontSize: '20px',
                                fontWeight: 600,
                                lineHeight: '26px',
                                wordWrap: 'break-word',
                            }}
                        >
                            <span>총 청구금액</span>
                            <div>
                                <span style={{ color: '#1C64F2' }}>{총청구금액}</span> 원
                            </div>
                        </h2>
                        <div style={{ height: '1px', margin: '48px 0px 16px 0px', background: '#E5E7EB' }} />
                        <pre style={{ fontSize: '12px', fontWeight: 400, lineHeight: '18px', color: '#6B7280' }}>
                            {`경기도 성남시 분당구 황새울로 258번길 29, 티맥스 수내타워 대표번호 : 031-8018-9300\n사업자 등록번호 : 1234-23-123-434235`}
                        </pre>
                        <span style={{ fontSize: '12px', fontWeight: 400, lineHeight: '18px', color: '#6B7280' }}>
                            Copyright 2023. TmaxTibero. All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        );
    }
);

export default RightContainer;

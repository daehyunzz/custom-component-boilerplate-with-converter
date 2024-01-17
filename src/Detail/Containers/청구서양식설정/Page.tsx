/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import type { EventObject } from '../../../../SuperUXConverter/extractor/types';

// PaymentFormPage
interface Props {
    title: string;
}

const EventInfos: EventObject[] = [
    {
        Name: 'onClick',
        Type: 'MouseEvent',
        Inputs: ['e'],
        Description: '클릭 시 페이지 이동',
    },
    {
        Name: 'onCancel',
        Type: 'MouseEvent',
        Inputs: ['e'],
        Description: '클릭 시 취소',
    },
    {
        Name: 'onConfirm',
        Type: 'MouseEvent',
        Inputs: ['e'],
        Description: '클릭 시 취소',
    },
];

// const Page: React.FC<any> = React.forwardRef<any, Props>(({ title, children }, ref) => {
const Page: React.FC<any> = React.forwardRef<any, Props>(({ title, onCancel, onConfirm, onClick, children }, ref) => {
    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                border: '1px solid #D1D5DB',
                background: 'white',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                overflowY: 'hidden',
            }}
        >
            {/** 뒤로가기 부분 */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '80px',
                    padding: '20px 32px',
                    boxSizing: 'border-box',
                    gap: '12px',
                    borderBottom: '1px solid #E5E7EB',
                    width: '100%',
                }}
            >
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        type="button"
                        style={{ margin: '0px', padding: '0px', backgroundColor: 'transparent', border: '0px' }}
                        onClick={e => onClick(e)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21.3759 12C21.3759 12.2984 21.2574 12.5846 21.0464 12.7955C20.8354 13.0065 20.5493 13.125 20.2509 13.125H6.46964L11.2996 17.9541C11.511 18.1654 11.6297 18.4521 11.6297 18.751C11.6297 19.0499 11.511 19.3365 11.2996 19.5478C11.0883 19.7592 10.8016 19.8779 10.5028 19.8779C10.2039 19.8779 9.91723 19.7592 9.70589 19.5478L2.95589 12.7978C2.85101 12.6933 2.76779 12.5691 2.71101 12.4324C2.65423 12.2956 2.625 12.149 2.625 12.001C2.625 11.8529 2.65423 11.7063 2.71101 11.5696C2.76779 11.4328 2.85101 11.3086 2.95589 11.2041L9.70589 4.4541C9.81053 4.34945 9.93477 4.26644 10.0715 4.20981C10.2082 4.15317 10.3548 4.12402 10.5028 4.12402C10.6508 4.12402 10.7973 4.15317 10.934 4.20981C11.0708 4.26644 11.195 4.34945 11.2996 4.4541C11.4043 4.55875 11.4873 4.68298 11.5439 4.81971C11.6006 4.95644 11.6297 5.10298 11.6297 5.25097C11.6297 5.39897 11.6006 5.54551 11.5439 5.68224C11.4873 5.81897 11.4043 5.9432 11.2996 6.04785L6.46964 10.875H20.2509C20.5493 10.875 20.8354 10.9936 21.0464 11.2045C21.2574 11.4155 21.3759 11.7017 21.3759 12Z"
                                fill="#111928"
                            />
                        </svg>
                    </button>
                    <h1
                        style={{
                            color: '#111928',
                            fontFamily: 'Pretendard',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '32px',
                        }}
                    >
                        {title}
                    </h1>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                        type="button"
                        onClick={e => onCancel(e)}
                        style={{
                            display: 'flex',
                            padding: '10px 32px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '4px',
                            borderRadius: '6px',
                            border: '1px solid #A4CAFE',
                            background: '#FFF',
                            color: '#1C64F2',
                        }}
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={e => onConfirm(e)}
                        style={{
                            display: 'flex',
                            padding: '10px 32px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '4px',
                            borderRadius: '6px',
                            background: '#1C64F2',
                            color: '#FFF',
                        }}
                    >
                        저장
                    </button>
                </div>
            </div>
            {/** 정보 리스트 */}
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    padding: '32px 32px 56px 32px',
                    gap: '32px',
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    background: '#f3f4f6',
                }}
            >
                {children}
            </div>
        </div>
    );
});

export default Page;

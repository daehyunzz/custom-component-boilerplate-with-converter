import React, { PropsWithChildren } from 'react';

// PaymentFormLeftContainer
interface Props {
    타이틀: string;
    타이틀Status: boolean;
    기업로고Status: boolean;
    상품대표이미지Status: boolean;
}

/** children으로 switch와 textarea를 받아야겠다. */
// : React.FC<any> = React.forwardRef<any, Props>(({ 타이틀, 타이틀Status, 기업로고, 기업로고Status, 상품대표이미지Status, children }, ref) => {
const LeftContainer: React.FC<any> = React.forwardRef<any, PropsWithChildren<Props>>(
    (
        {
            타이틀,
            타이틀Status,
            기업로고Status,
            상품대표이미지Status,
            onChange타이틀Status,
            onChange기업로고Status,
            onChange상품대표이미지Status,
            children,
        },
        ref
    ) => {
        const childrenArray = React.Children.toArray(children);
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
                    alignSelf: 'stretch',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        backgroundColor: '#FFF',
                        borderRadius: '10px 10px 0px 0px',
                        borderBottom: '1px solid #E5E7EB',
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
                        청구서 양식 설정
                    </span>
                </div>
                <div
                    style={{
                        boxSizing: 'border-box',
                        padding: '32px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '0px 0px 10px 10px',
                        flex: 1,
                        gap: '32px',
                    }}
                >
                    {/** 타이틀 */}
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
                            타이틀
                        </span>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                width: '100%',
                            }}
                        >
                            {React.isValidElement(childrenArray[0]) &&
                                React.cloneElement(childrenArray[0], {
                                    ...childrenArray[0].props,
                                    initialState: 타이틀Status,
                                    onClick: onChange타이틀Status,
                                })}
                            {/* <Switch initialState={타이틀Status} /> */}
                            {React.isValidElement(childrenArray[1]) &&
                                React.cloneElement(childrenArray[1], {
                                    ...childrenArray[1].props,
                                    title: 타이틀,
                                })}
                            {/* <textarea
                            value={타이틀}
                            style={{
                                resize: 'none',
                                border: '1px solid #E5E7EB',
                                borderRadius: '6px',
                                padding: '10px 12px',
                                height: '128px',
                            }}
                        /> */}
                        </div>
                    </div>
                    {/** 기업로고 */}
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
                            기업로고
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {React.isValidElement(childrenArray[2]) &&
                                React.cloneElement(childrenArray[2], {
                                    ...childrenArray[2].props,
                                    initialState: 기업로고Status,
                                    onClick: onChange기업로고Status,
                                })}
                            {/* <Switch initialState={기업로고Status} /> */}
                            {React.isValidElement(childrenArray[3]) &&
                                React.cloneElement(childrenArray[3], { ...childrenArray[3].props })}
                        </div>
                    </div>
                    {/** 사용량 */}
                    {/* <div style={{ display: 'flex', gap: '20px' }}>
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
                    사용량
                </span>
                <button type="button">{사용량Status}</button>
            </div> */}
                    {/** 상품 대표 이미지 */}
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
                            상품 대표 이미지
                        </span>
                        {React.isValidElement(childrenArray[4]) &&
                            React.cloneElement(childrenArray[4], {
                                ...childrenArray[4].props,
                                initialState: 상품대표이미지Status,
                                onClick: onChange상품대표이미지Status,
                            })}
                        {/* <Switch initialState={상품대표이미지Status} /> */}
                    </div>
                </div>
            </div>
        );
    }
);

export default LeftContainer;

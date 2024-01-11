/* eslint-disable jsdoc/require-jsdoc */
import Container from 'Detail/components/Container';

import Divider from 'Detail/components/Divider';

import Title from 'Detail/components/Title';
import React from 'react';

import DetailTextRow from 'Detail/components/DetailTextRow/DetailTextRow';
import DetailTextRowContainer from 'Detail/components/DetailTextRow/DetailTextRowContainer';
import OptionBox from 'Detail/components/OptionBox';
import SpaceBetweenBlock from 'Detail/components/SpaceBetweenBlock';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';

// interface Props2 {
//     base: {
//         // 주문정보
//         title: string; // 제목
//         orderCode: {
//             // 주문번호
//             key: string;
//             value: string;
//         };
//         orderAt: {
//             // 주문일시
//             key: string;
//             value: string;
//         };
//         invoiceAt: {
//             // 청구 기간
//             key: string;
//             value: string;
//         };
//     };
//     itemsDetail: {
//         // 상품 상세 정보
//         title: string; // 제목
//         items: [
//             // 상품 정보
//             {
//                 name: {
//                     key: string;
//                     value: string;
//                 };
//                 code: {
//                     key: string;
//                     value: string;
//                 };
//                 price: {
//                     key: string;
//                     value: string;
//                 };
//             }
//         ];
//     };
//     user: {
//         // 주문자 정보
//         title: string; // 제목
//         userName: {
//             // 주문자 이름
//             key: string;
//             value: string;
//         };
//         companyName: {
//             // 기업명
//             key: string;
//             value: string;
//         };
//         email: {
//             // 이메일
//             key: string;
//             value: string;
//         };
//         freeTrialStatus: {
//             key: string;
//             value: string;
//         };
//     };
//     payment: {
//         // 결제 정보
//         title: string; // 제목
//         paymentType: {
//             // 과금유형
//             key: string;
//             value: string;
//         };
//         current: {
//             // 결제 정보
//             paymentDue: {
//                 //
//                 key: string;
//                 value: string;
//             };
//             status: {
//                 key: string;
//                 value: string;
//             };
//             method: {
//                 key: string;
//                 value: string;
//             };
//         };
//         previous?: {
//             invoiceAt: {
//                 key: string;
//                 value: string;
//             };
//             invoicePrice: {
//                 key: string;
//                 value: string;
//             };
//             paymentAt: {
//                 key: string;
//                 value: string;
//             };
//             status: {
//                 key: string;
//                 value: string;
//             };
//             method: {
//                 key: string;
//                 value: string;
//             };
//         };
//     };
// }

interface Props {
    상품들: {
        [name: string]: { key: string; value: string };
    }[];

    // 상품들: {
    //     name: {
    //         key: string;
    //         value: string;
    //     };
    //     code: {
    //         key: string;
    //         value: string;
    //     };
    //     price: {
    //         key: string;
    //         value: string;
    //     };
    //     추가상품: {
    //         추가상품명: { key: string; value: string }
    //     };
    // }[];

    // 상품들: {
    //     상품기본정보: { key: string; value: string }[];
    //     추가상품: { key: string; value: string }[];
    //     청구금액: string;
    // }[];
    총청구금액: string;
}


interface Temp {
         name: {
            key: string;
            value: string;
        };
        code: {
            key: string;
            value: string;
        };
        price: {
            key: string;
            value: string;
        };
        추가상품: {
            추가상품명: { key: string; value: string }
        };
}
const 상품 = ({ name, code, price, 추가상품 }: Temp) => {
    return (

    );
}

const SellingProductInformation: React.FC<any> = React.forwardRef<any, Props>(({ 상품들, 총청구금액 }, ref) => {
    return (
        <Container title={<Title title="판매 상품 정보" color="#1c64f2" />} gap="32px">
            {상품들.map(({ 상품기본정보, 추가상품, 청구금액 }, index) => {
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
                            <DetailTextRowContainer>
                                {상품기본정보.map(({ key, value }) => {
                                    return <DetailTextRow title={key} value={value} />;
                                })}
                            </DetailTextRowContainer>
                            {/** 추가상품 */}
                            {추가상품 && (
                                <OptionBox
                                    제목="추가 상품"
                                    table={
                                        <DetailTableRowContainer>
                                            {추가상품.map(({ key, value }) => {
                                                return (
                                                    <DetailTableRow>
                                                        <DetailTableRowCell title={key} value={value} />
                                                    </DetailTableRow>
                                                );
                                            })}
                                        </DetailTableRowContainer>
                                    }
                                />
                            )}
                            <SpaceBetweenBlock left="청구금액" right={청구금액} priceColor="#111928" />
                        </blockquote>
                        <Divider />
                    </>
                );
            })}
            <SpaceBetweenBlock left="총 청구금액" right={총청구금액} />
        </Container>
    );
});

export default SellingProductInformation;

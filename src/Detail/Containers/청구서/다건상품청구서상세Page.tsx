/* eslint-disable jsdoc/require-jsdoc */
import Button from 'Detail/components/Button';
import Container from 'Detail/components/Container2';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';
import DetailTextRow from 'Detail/components/DetailTextRow/DetailTextRow';
import DetailTextRowContainer from 'Detail/components/DetailTextRow/DetailTextRowContainer';
import Divider from 'Detail/components/Divider';
import OptionBox from 'Detail/components/OptionBox';
import Page from 'Detail/components/Page';
import SpaceBetweenBlock from 'Detail/components/SpaceBetweenBlock';

import React from 'react';

// 이건 임시용.
// 입력 받은 props에 따라서 조건부로 각 컨테이너 보여주면 될 듯.
/**
 * 이슈사항
 *
 * 1. 2 depth 데이터 처리 불가능으로 구매 상품이 1개 이상인 경우를 처리하지 못함
 */

interface Props {
    페이지명: string;
    청구번호: string;
    주문일시: string;
    청구기간: string;

    상품들: {
        상품기본정보: { key: string; value: string }[];
        옵션들: {
            추가상품: { key: string; value: string }[];
            요금제: { key: string; value: string }[];
        };
        청구금액: string;
    }[];
    총청구금액: string;

    고객명: string;
    기업명: string;
    이메일: string;
    무료체험상태: string;

    과금유형: string;
    /** 청구서 정보 */
    결제기한: string;
    결제상태: React.ReactNode;
    결제수단: string;
    /** 이전 청구서 정보 */
    이전청구일: string;
    이전청구요금: string;
    이전결제일: string;
    이전청구요금결제상태: React.ReactNode;
    이전청구요금결제수단: string;
    이전청구서: React.ReactNode;
}

const 다건상품청구서상세Page: React.FC<any> = React.forwardRef<any, Props>(
    (
        {
            페이지명,
            청구번호,
            주문일시,
            청구기간,
            상품들,
            총청구금액,
            고객명,
            기업명,
            이메일,
            무료체험상태,
            과금유형,
            결제기한,
            결제상태,
            결제수단,
            이전청구일,
            이전청구요금,
            이전결제일,
            이전청구요금결제상태,
            이전청구요금결제수단,
            이전청구서,
        },
        ref
    ) => {
        return (
            <Page title={페이지명}>
                {/** 청구 정보 */}
                <Container title="청구 정보">
                    <DetailTableRowContainer>
                        <DetailTableRow>
                            <DetailTableRowCell title="청구번호" value={청구번호} />
                        </DetailTableRow>
                        <DetailTableRow>
                            <DetailTableRowCell title="주문일시" value={주문일시} />
                            <DetailTableRowCell title="청구기간" value={청구기간} />
                        </DetailTableRow>
                    </DetailTableRowContainer>
                </Container>
                {/* <BillingInformation
                    청구번호="97682811548"
                    주문일시="2023. 09. 25 14:12:14"
                    청구기간="2023. 09. 25 ~ 2023. 09. 25"
                /> */}

                {/** 판매 상품 정보 */}
                <Container title="판매 상품 정보" gap="32px">
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
                                    {/** 요금제 */}
                                    {요금제 && (
                                        <OptionBox
                                            제목="요금제"
                                            table={
                                                <DetailTableRowContainer>
                                                    {요금제.map(({ key, value }) => {
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
                {/* <SellingProductInformation
                    상품기본정보={[
                        {
                            key: '상품명',
                            value: '선택 상품명\n(구성제품1 + 구성제품2)',
                        },
                        { key: '상품코드', value: 'S19WFJK004' },
                        { key: '가격', value: '123,230 원' },
                    ]}
                    추가상품={[
                        {
                            key: '추가 상품명',
                            value: '선택 추가 상품명',
                        },
                        {
                            key: '가격',
                            value: '123,230 원',
                        },
                    ]}
                    청구금액="130,000,000"
                /> */}

                {/** 고객 정보 */}
                <Container title="고객 정보">
                    <DetailTableRowContainer>
                        <DetailTableRow>
                            <DetailTableRowCell title="고객명" value={고객명} />
                            <DetailTableRowCell title="기업명" value={기업명} />
                        </DetailTableRow>
                        <DetailTableRow>
                            <DetailTableRowCell title="이메일" value={이메일} />
                            <DetailTableRowCell title="무료 체험 상태" value={무료체험상태} />
                        </DetailTableRow>
                    </DetailTableRowContainer>
                </Container>
                {/* <CustomerInformation /> */}

                {/** 결제 정보 */}
                <Container title="결제 정보" gap="24px">
                    <DetailTextRowContainer>
                        <DetailTextRow title="과금유형" value={과금유형} />
                    </DetailTextRowContainer>
                    <Divider />
                    <OptionBox
                        제목="청구서 정보"
                        table={
                            <DetailTableRowContainer>
                                <DetailTableRow>
                                    <DetailTableRowCell title="결제 기한" value={결제기한} />
                                    <DetailTableRowCell title="결제 상태" value={결제상태} />
                                </DetailTableRow>
                                <DetailTableRow>
                                    <DetailTableRowCell title="결제 수단" value={결제수단} />
                                </DetailTableRow>
                            </DetailTableRowContainer>
                        }
                    />
                    <OptionBox
                        제목="이전 청구서 정보"
                        table={
                            <DetailTableRowContainer>
                                <DetailTableRow>
                                    <DetailTableRowCell title="이전 청구일" value={이전청구일} />
                                    <DetailTableRowCell title="이전 청구 요금" value={이전청구요금} />
                                </DetailTableRow>
                                <DetailTableRow>
                                    <DetailTableRowCell title="이전 결제일" value={이전결제일} />
                                    <DetailTableRowCell title="이전 청구 요금 결제 상태" value={이전청구요금결제상태} />
                                </DetailTableRow>
                                <DetailTableRow>
                                    <DetailTableRowCell title="이전 청구 요금 결제 수단" value={이전청구요금결제수단} />
                                    <DetailTableRowCell title="이전 청구서" value={이전청구서} />
                                </DetailTableRow>
                            </DetailTableRowContainer>
                        }
                    />
                    <Button
                        color="#374151"
                        backgroundColor="#F9FAFB"
                        borderColor="#D1D5DB"
                        text={
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
                        }
                    />
                </Container>

                {/* <PaymentInformation
                    과금유형={과금유형}
                    결제기한={결제기한}
                    결제상태={결제상태}
                    결제수단={결제수단}
                    이전청구일={이전청구일}
                    이전청구요금={이전청구요금}
                    이전결제일={이전결제일}
                    이전청구요금결제상태={이전청구요금결제상태}
                    이전청구요금결제수단={이전청구요금결제수단}
                    이전청구서={이전청구서}
                /> */}
            </Page>
        );
    }
);

export default 다건상품청구서상세Page;

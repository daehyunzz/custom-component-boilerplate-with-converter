/* eslint-disable react/jsx-pascal-case */

import Button from 'Detail/components/Button';
import Container from 'Detail/components/Container';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';
import DetailTextRow from 'Detail/components/DetailTextRow/DetailTextRow';
import DetailTextRowContainer from 'Detail/components/DetailTextRow/DetailTextRowContainer';
import Divider from 'Detail/components/Divider';
import OptionBox from 'Detail/components/OptionBox';
import Page from 'Detail/components/Page';
import Title from 'Detail/components/Title';
import React from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
interface Props {
    페이지명: string;

    // 주문 정보
    주문번호: string;
    주문일시: string;
    청구기간: string;

    // 상품 상세 정보
    상품상세정보: { key: string; value: string }[];
    추가상품?: { key: string; value: string }[];

    // 주문자 정보
    주문자명: string;
    기업명: string;
    이메일: string;
    무료체험상태: string;

    // 결제 정보
    과금유형: string;
    결제기한: string;
    결제상태: React.ReactNode;
    결제수단: string;
    이전청구일: string;
    이전청구요금: string;
    이전결제일: string;
    이전청구요금결제상태: React.ReactNode;
    이전청구요금결제수단: string;
    이전청구서: React.ReactNode;
}

const 구독상품주문상세Page: React.FC<any> = React.forwardRef<any, Props>(
    (
        {
            페이지명,
            주문번호,
            주문일시,
            청구기간,
            상품상세정보,
            추가상품,
            주문자명,
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
                {/** 주문 정보 */}
                <Container title={<Title title="주문 정보" />}>
                    <DetailTableRowContainer>
                        <DetailTableRow>
                            <DetailTableRowCell title="주문번호" value={주문번호} />
                        </DetailTableRow>
                        <DetailTableRow>
                            <DetailTableRowCell title="주문일시" value={주문일시} />
                            <DetailTableRowCell title="청구 기간" value={청구기간} />
                        </DetailTableRow>
                    </DetailTableRowContainer>
                </Container>

                {/** 상품 상세 정보 */}
                <Container title={<Title title="상품 상세 정보" />} gap="32px">
                    {/** 상품 정보 */}
                    <DetailTextRowContainer>
                        {상품상세정보.map(({ key, value }) => {
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
                </Container>

                {/** 주문자 정보 */}
                <Container title={<Title title="주문자 정보" />}>
                    <DetailTableRowContainer>
                        <DetailTableRow>
                            <DetailTableRowCell title="주문자 이름" value={주문자명} />
                            <DetailTableRowCell title="기업명" value={기업명} />
                        </DetailTableRow>
                        <DetailTableRow>
                            <DetailTableRowCell title="이메일" value={이메일} />
                            <DetailTableRowCell title="무료 체험 상태" value={무료체험상태} />
                        </DetailTableRow>
                    </DetailTableRowContainer>
                </Container>

                {/** 결제 정보 */}
                <Container title={<Title title="결제 정보" />} gap="24px">
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
                            <div style={{ display: 'inline-block' }}>
                                <span>지난 청구서 기록 바로가기</span>
                                <span>-</span>{' '}
                            </div>
                        }
                    />
                </Container>
            </Page>
        );
    }
);

export default 구독상품주문상세Page;

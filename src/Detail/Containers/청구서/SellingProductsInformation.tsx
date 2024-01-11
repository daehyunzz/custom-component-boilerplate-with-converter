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

interface Props {
    상품들: {
        상품기본정보: { key: string; value: string }[];
        추가상품: { key: string; value: string }[];
        청구금액: string;
    }[];
    총청구금액: string;
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

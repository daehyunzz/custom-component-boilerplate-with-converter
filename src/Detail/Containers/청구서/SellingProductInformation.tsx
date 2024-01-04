/* eslint-disable jsdoc/require-jsdoc */
import Container from 'Detail/components/Container';

import Divider from 'Detail/components/Divider';

import Title from 'Detail/components/Title';
import React from 'react';
import Spacing from 'Detail/components/Spacing';

import DetailTextRow from 'Detail/components/DetailTextRow/DetailTextRow';
import DetailTextRowContainer from 'Detail/components/DetailTextRow/DetailTextRowContainer';
import OptionBox from 'Detail/components/OptionBox';
import SpaceBetweenBlock from 'Detail/components/SpaceBetweenBlock';

interface Props {
    상품기본정보: { key: string; value: string }[];
    추가상품: { key: string; value: string }[];
    청구금액: string;
}

const SellingProductInformation: React.FC<any> = React.forwardRef<any, Props>(
    ({ 상품기본정보, 추가상품, 청구금액 }, ref) => {
        return (
            <Container title={<Title title="판매 상품 정보" />} gap="32px">
                {/** 상품 정보 */}
                <DetailTextRowContainer>
                    {상품기본정보.map(({ key, value }) => {
                        return <DetailTextRow title={key} value={value} />;
                    })}
                </DetailTextRowContainer>
                {/** 추가상품 */}
                {추가상품 && <OptionBox 제목="추가 상품" 옵션정보={추가상품} />}
                <Divider />
                <SpaceBetweenBlock left="청구금액" right={청구금액} />
            </Container>
        );
    }
);

export default SellingProductInformation;

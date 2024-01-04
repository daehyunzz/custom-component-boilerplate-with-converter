/* eslint-disable jsdoc/require-jsdoc */
import Container from 'Detail/components/Container';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';
import Title from 'Detail/components/Title';
import React from 'react';

interface Props {
    청구번호: string;
    주문일시: string;
    청구기간: string;
}

const BillingInformation: React.FC<any> = React.forwardRef<any, Props>(({ 청구번호, 주문일시, 청구기간 }, ref) => {
    return (
        <Container title={<Title title="청구 정보" />}>
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
    );
});

export default BillingInformation;

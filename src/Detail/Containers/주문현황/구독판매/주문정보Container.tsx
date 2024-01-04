import Container from 'Detail/components/Container';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';

import Title from 'Detail/components/Title';
import React from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
interface Props {
    주문번호: string;
    주문일시: string;
    청구기간: string;
}

const 주문정보Container: React.FC<any> = React.forwardRef<any, Props>(({ 주문번호, 주문일시, 청구기간 }, ref) => {
    return (
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
    );
});

export default 주문정보Container;

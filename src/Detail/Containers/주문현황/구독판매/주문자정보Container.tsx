/* eslint-disable jsdoc/require-jsdoc */

import Container from 'Detail/components/Container';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';
import Title from 'Detail/components/Title';
import React from 'react';

interface Props {
    주문자명: string;
    기업명: string;
    이메일: string;
    무료체험상태: string;
}

const 주문자정보Container: React.FC<any> = React.forwardRef<any, Props>(
    ({ 주문자명, 기업명, 이메일, 무료체험상태 }, ref) => {
        return (
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
        );
    }
);

export default 주문자정보Container;

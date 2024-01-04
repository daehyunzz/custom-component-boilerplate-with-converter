import Container from 'Detail/components/Container';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';
import DetailTextRow from 'Detail/components/DetailTextRow/DetailTextRow';
import DetailTextRowContainer from 'Detail/components/DetailTextRow/DetailTextRowContainer';

import OptionBox from 'Detail/components/OptionBox';

import Title from 'Detail/components/Title';
import React from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
interface Props {
    상품상세정보: { key: string; value: string }[];
    추가상품?: { key: string; value: string }[];
}

const 상품상세정보Container: React.FC<any> = React.forwardRef<any, Props>(({ 상품상세정보, 추가상품 }, ref) => {
    return (
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
    );
});

export default 상품상세정보Container;

/* eslint-disable jsdoc/require-jsdoc */
import Button from 'Detail/components/Button';
import Container from 'Detail/components/Container';
import DetailTableRow from 'Detail/components/DetailTableRow/DetailTableRow';
import DetailTableRowCell from 'Detail/components/DetailTableRow/DetailTableRowCell';
import DetailTableRowContainer from 'Detail/components/DetailTableRow/DetailTableRowContainer';
import DetailTextRow from 'Detail/components/DetailTextRow/DetailTextRow';
import DetailTextRowContainer from 'Detail/components/DetailTextRow/DetailTextRowContainer';
import Divider from 'Detail/components/Divider';
import OptionBox from 'Detail/components/OptionBox';
import Title from 'Detail/components/Title';
import React from 'react';

interface Props {
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

const 결제정보Container: React.FC<any> = React.forwardRef<any, Props>(
    (
        {
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
        );
    }
);

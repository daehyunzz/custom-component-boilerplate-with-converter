import LeftContainer from 'Detail/Containers/청구서양식설정/LeftContainer/LeftContainer';
import Page from 'Detail/Containers/청구서양식설정/Page';
import RightContainer from 'Detail/Containers/청구서양식설정/RightContainer/RightContainer';
import Switch from 'Detail/Containers/청구서양식설정/Switch';
import TextArea from 'Detail/Containers/청구서양식설정/TextArea';
import React from 'react';

const 청구서양식설정Page: React.FC<any> = React.forwardRef<any, any>((_, ref) => {
    return (
        <Page title="청구서 양식 설정">
            <LeftContainer
                타이틀="타이틀"
                타이틀Status={false}
                기업로고="ㅁㅁ"
                기업로고Status={false}
                상품대표이미지Status={false}
            >
                <Switch />
                <TextArea />
                <Switch />
                <Switch />
                <Switch />
            </LeftContainer>
            <RightContainer
                타이틀="타이틀"
                타이틀Status={true}
                기업로고="ㅁㅁ"
                기업로고Status={true}
                고객명="고객명"
                청구번호="청구번호"
                청구기간="청구기간"
                청구금액="청구금액"
                청구일자="청구일자"
                결제기한="결제기한"
                예정결제수단="예정결제수단"
                청구내역={[
                    {
                        주문번호: '주문번호',
                        상품명: '상품명',
                        요금제: '요금제',
                        사용기간: '사용기간',
                        사용요금: '사용요금',
                        옵션요금: '옵션요금',
                        세금: '세금',
                        적용: '적용',
                        청구금액: '청구금액',
                    },
                    {
                        주문번호: '주문번호1',
                        상품명: '상품명',
                        요금제: '요금제',
                        사용기간: '사용기간',
                        사용요금: '사용요금',
                        옵션요금: '옵션요금',
                        세금: '세금',
                        적용: '적용',
                        청구금액: '청구금액',
                    },
                ]}
                총청구금액="총청구금액"
            />
        </Page>
    );
});

export default 청구서양식설정Page;

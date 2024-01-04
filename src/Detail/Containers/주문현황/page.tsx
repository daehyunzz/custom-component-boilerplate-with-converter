/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/style-prop-object */
/* eslint-disable prefer-object-spread */
/* eslint-disable react/jsx-pascal-case */
import Badge from 'Detail/components/Badge';
import Button from 'Detail/components/Button';
import Page from 'Detail/components/Page';
import 결제정보 from 'Detail/Containers/molecules/결제정보';
import 고객정보 from 'Detail/Containers/molecules/고객정보';
import 기본정보Container from 'Detail/Containers/molecules/기본정보';
import 상품상세정보Container from 'Detail/Containers/molecules/상품정보';
import 단건상품주문상세Page from 'Detail/Containers/주문현황/단건판매/단건상품주문상세Page';
import React from 'react';

const 단건상품주문상세 = () => {
    return (
        <단건상품주문상세Page
            페이지명="주문 상세"
            주문번호="97682811548"
            주문일시="2023. 09. 25  14:12:14"
            청구기간="2023. 09. 21 ~ 2023. 09. 30"
            상품상세정보={[
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
            주문자명="김티맥"
            기업명="티맥스커머스"
            이메일="kimtmax@tmax.co.kr"
            무료체험상태="14일 남음 (잔여 포인트 : 285p)"
            과금유형="월과금"
            결제기한="2023. 09. 21 ~ 2023. 09. 31"
            결제상태={<Badge label={['결제 대기']} />}
            결제수단="WAPLPay"
            이전청구일="2023. 08. 31"
            이전청구요금="65,000,000"
            이전결제일="2023. 08. 21"
            이전청구요금결제상태={<Badge label={['결제 완료']} />}
            이전청구요금결제수단="WAPLPay"
            이전청구서={<Button color="#1C64F2" borderColor="#A4CAFE" text="23년 08월 청구서 확인하기" />}
        />
    );
};

const 구독상품주문상세 = () => {
    //     return (
    //         <단건상품주문상세Page
    //             페이지명="주문 상세"
    //             주문번호="97682811548"
    //             주문일시="2023. 09. 25  14:12:14"
    //             청구기간="2023. 09. 21 ~ 2023. 09. 30"
    //             상품상세정보={[
    //                 {
    //                     key: '상품명',
    //                     value: '선택 상품명\n(구성제품1 + 구성제품2)',
    //                 },
    //                 { key: '상품코드', value: 'S19WFJK004' },
    //                 { key: '요금제', value: '선택 요금제, 기본요금' },
    //                 { key: '누적 결제 횟수', value: '1회' },
    //             ]}
    //             추가상품={[
    //                 {
    //                     key: '추가 상품명',
    //                     value: '선택 추가 상품명',
    //                 },
    //                 {
    //                     key: '가격',
    //                     value: '123,230 원',
    //                 },
    //             ]}
    //             주문자명="김티맥"
    //             기업명="티맥스커머스"
    //             이메일="kimtmax@tmax.co.kr"
    //             무료체험상태="14일 남음 (잔여 포인트 : 285p)"
    //             과금유형="월과금"
    //             결제기한="2023. 09. 21 ~ 2023. 09. 31"
    //             결제상태={<Badge label={['결제 대기']} />}
    //             결제수단="WAPLPay"
    //             이전청구일="2023. 08. 31"
    //             이전청구요금="65,000,000"
    //             이전결제일="2023. 08. 21"
    //             이전청구요금결제상태={<Badge label={['결제 완료']} />}
    //             이전청구요금결제수단="WAPLPay"
    //             이전청구서={<Button color="#1C64F2" borderColor="#A4CAFE" text="23년 08월 청구서 확인하기" />}
    //         />
    //     );
    // };
    return (
        <Page title="주문 상세">
            <기본정보Container
                제목="주문 정보"
                기본정보={[
                    { key: '주문번호', value: '97682811548' },
                    { key: '주문일시', value: '2023. 09. 25  14:12:14' },
                    { key: '청구기간', value: '2023. 09. 21 ~ 2023. 09. 30' },
                ]}
            />
            <상품상세정보Container
                제목="상품 상세 정보"
                상품상세정보={[
                    {
                        key: '상품명',
                        value: '선택 상품명\n(구성제품1 + 구성제품2)',
                    },
                    { key: '상품코드', value: 'S19WFJK004' },
                    { key: '요금제', value: '선택 요금제, 기본요금' },
                    { key: '누적 결제 횟수', value: '1회' },
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
            />
            <고객정보
                제목="주문자 정보"
                고객정보={[
                    { key: '주문자 이름', value: '김티맥' },
                    { key: '기업명', value: '티맥스커머스' },
                    { key: '이메일', value: 'kimtmax@tmax.co.kr' },
                    { key: '무료 체험 상태', value: '14일 남음 (잔여 포인트 : 285p)' },
                ]}
            />
            <결제정보 제목="결제 정보" 과금유형="월과금" 옵션제목="결제정보" 옵션1_1_키="결제 기한" 옵션1_1_값="" />
        </Page>
    );
};

export default { 단건상품주문상세, 구독상품주문상세 };

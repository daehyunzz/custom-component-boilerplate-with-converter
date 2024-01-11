/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-object-spread */
/* eslint-disable react/jsx-pascal-case */
import Badge from 'Detail/components/Badge';
import Button from 'Detail/components/Button';
import 다건상품청구서상세Page from 'Detail/Containers/청구서/다건상품청구서상세Page';
import 단건상품청구서상세Page from 'Detail/Containers/청구서/단건상품청구서상세Page';
import React from 'react';

const 단건상품청구서상세 = () => {
    return (
        <단건상품청구서상세Page
            페이지명="청구서 상세"
            청구번호="97682811548"
            주문일시="2023. 09. 25 14:12:14"
            청구기간="2023. 09. 25 ~ 2023. 09. 25"
            상품기본정보={[
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
            청구금액="130,000,000"
            고객명="김티맥"
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

const 다건상품청구서상세 = () => {
    return (
        <다건상품청구서상세Page
            페이지명="청구서 상세"
            청구번호="97682811548"
            주문일시="2023. 09. 25 14:12:14"
            청구기간="2023. 09. 25 ~ 2023. 09. 25"
            상품들={[
                {
                    상품기본정보: [
                        {
                            key: '상품명',
                            value: '선택 상품명\n(구성제품1 + 구성제품2)',
                        },
                        { key: '상품코드', value: 'S19WFJK004' },
                        { key: '가격', value: '123,230 원' },
                    ],
                    옵션들: {
                        추가상품: [
                            { key: '추가 상품명', value: '선택 추가 상품명' },
                            { key: '가격', value: '123,230 원' },
                        ],
                        요금제: [
                            { key: '요금제 정보 (기본요금)', value: 'Dedicated($132.66)' },
                            { key: '가격', value: '65,000,000 원' },
                        ],
                    },
                    청구금액: '130,000,000',
                },
                {
                    상품기본정보: [
                        {
                            key: '상품명',
                            value: '선택 상품명\n(구성제품1 + 구성제품2)',
                        },
                        { key: '상품코드', value: 'S19WFJK004' },
                        { key: '가격', value: '123,230 원' },
                    ],
                    추가상품: [
                        {
                            key: '추가 상품명',
                            value: '선택 추가 상품명',
                        },
                        {
                            key: '가격',
                            value: '123,230 원',
                        },
                    ],
                    청구금액: '130,000,000',
                },
            ]}
            총청구금액="130,000,000"
            고객명="김티맥"
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

export default { 단건상품청구서상세, 다건상품청구서상세 };

/* eslint-disable react/jsx-pascal-case */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { render } from 'react-dom';
import { configure } from 'mobx';

import 청구서 from 'Detail/Containers/청구서/page';
import 주문현황 from 'Detail/Containers/주문현황/page';

// office-core 설정.
// setCoreMode(getProgramMode() === 'Production' ? 'Production' : 'Development');
// dLog() 등이 배포 모드에서도 출력하도록 Development로 당분간 고정.

// MobX 환경 설정.
// https://mobx.js.org/configuration.html
configure({
    enforceActions: 'observed',
    reactionRequiresObservable: true,
    observableRequiresReaction: false,
    disableErrorBoundaries: true,
});

const root = document.querySelector<HTMLDivElement>('.root');
if (!root) {
    throw new Error('Root element가 없습니다!');
}
// wheel event의 경우, component eventListener에서 preventDefault가 불가함.
root.addEventListener('wheel', (e: MouseEvent) => {
    if (e.ctrlKey) {
        e.preventDefault(); // ctrl+wheel을 통한 브라우저 자체 확대/축소 기능 막음.
    }
});

(window as any).React = React;

render(
    // <청구서.단건상품청구서상세 />
    // <주문현황.단건상품주문상세 />,
    <주문현황.구독상품주문상세 />,
    root
);

/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { render } from 'react-dom';
import { configure } from 'mobx';

import CustomComponent from './CustomComponent';
import Test from './Test';
import Test2 from 'Test2';

import { renderToString } from 'react-dom/server';
import { getConvertedClasses } from 'tailwindToCss/helpers';
import twToCss from '../SuperUXConverter/twToCss/convert';

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

// const stringified = renderToString(<Test2 />);
// // const result = getConvertedClasses(stringified);
// console.log({ stringified });

(async () => {
    const stringified =
        await twToCss(`<div className="w-[1164px] min-w-[200px] h-[124px] flex flex-col items-start justify-start p-[24px] bg-[#f9fafb] rounded-[8px]">
    <div className="self-stretch h-[76px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <div className="w-[344px] h-[28px] shrink-0 flex flex-row items-center justify-between rounded-[8px]">
            <div className="text-[14px] leading-[20px] font-['Pretendard'] font-semibold text-[#111928] whitespace-nowrap">
                금액
            </div>
            <div className="flex flex-row items-center justify-center gap-[4px] py-[7px] px-[10px] bg-[#f9fafb] border-[1px] border-solid border-[#d1d5db] rounded-[4px] overflow-hidden">
                <div className="flex flex-col items-center justify-center rounded-[6px]">
                    <div className="w-[12px] h-[12px] shrink-0 flex flex-row items-center justify-center p-[2px] rounded-[6px]">
                        <img width="12" height="12" src="PencilSimpleI502_1978;455_29480;332_44889.png"></img>
                    </div>
                </div>
                <div className="text-[12px] leading-[14px] font-['Pretendard'] font-medium text-transform-[capitalize] text-[#374151] text-center whitespace-nowrap">
                    편집
                </div>
            </div>
        </div>
        <div className="w-[344px] flex flex-col items-start justify-center py-[4px] px-0 rounded-[8px]">
            <div className="text-[24px] leading-[32px] font-['Pretendard'] font-bold text-[#111928] whitespace-nowrap">
                250,000,000
            </div>
        </div>
    </div>
    </div>`);

    console.log(stringified);
})();

render(<Test2 />, root);

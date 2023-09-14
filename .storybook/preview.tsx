/**
 * @file Storybook 설정(ex. actions, decorators)들을 모든 story들에 전역적으로 적용할 때 사용하는 파일입니다.
 */

import React, { Suspense } from 'react';
import { DecoratorFn, Parameters } from '@storybook/react';

// @ts-ignore: VSCode가 점(.)으로 시작하는 폴더 안에서는 import 검사를 제대로 안 하고 에러를 내뱉는데, 실제로 돌아가는데는 아무 문제없음.
import initializeResourceLoader from 'ux/util/ResourceUtil';

initializeResourceLoader();

/**
 * on으로 시작하는 인수들(ex. onClick, onChange, ...)을 자동으로 action으로 설정합니다.
 * https://storybook.js.org/docs/react/essentials/actions
 */
export const parameters: Parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

/**
 * 모든 story들을 공통적으로 wrapping하는 component들 입니다.
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
export const decorators: Array<DecoratorFn> = [
    Story => (
        // 리소스 로딩 동안 fallback 안의 것을 보여주다가 로딩이 끝나면 내용물을 보여줍니다.
        <Suspense fallback={'Loading...'}>{Story()}</Suspense>
    ),
];

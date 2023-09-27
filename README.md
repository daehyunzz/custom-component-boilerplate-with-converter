# SuperUX Custom Component 추가를 위한 프로젝트

https://github.com/daehyunzz/custom-component-boilerplate-with-converter/assets/125944821/d505895f-19aa-40da-84c9-30c1bfc8f8a4



## 커스텀 컴포넌트 변환기 사용 방법
본 모듈은 2023/09/21 기준, [SuperUX CustomComponent 가이드 문서](https://rightful-samba-b59.notion.site/CustomComponent-6ebc1d26b05d474d8fda2fe9b6b620d4)를 기반으로 구현했습니다.

```bash
> npm install
> npm run extract (타겟_컴포넌트_폴더_경로 | 타겟_컴포넌트_파일_경로)
# ex) npm run extract SuperUXConverter/Examples/Test1/Example.tsx
# ex) npm run extract SuperUXConverter/Examples
```

위 명령어를 실행하면 `SuperUXCustomComponent` 폴더 하위에 커스텀 컴포넌트 관련 파일들이 생성됩니다.

[컴포넌트 명].js -> js 파일

[컴포넌트 명].json -> meta data 파일

자세한 가이드는 [여기](https://github.com/daehyunzz/custom-component-boilerplate-with-converter/blob/main/SuperUXConverter/README.md)를 참고해주세요.

엣지 케이스가 존재할 수 있습니다! `CM1-1 김대현`에게 와플 주시면 반영하겠습니다.


## 커스텀 컴포넌트 화면 확인 방법
1. `src/index.tsx`의 render 함수의 첫 번째 인자로 렌더링하고자하는 컴포넌트를 jsx 형식으로 넘겨준다.
2. npm run serve 명령어 실행

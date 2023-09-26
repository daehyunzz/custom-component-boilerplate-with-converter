
본 모듈은 2023/09/21 기준, [SuperUX CustomComponent 가이드](https://rightful-samba-b59.notion.site/CustomComponent-6ebc1d26b05d474d8fda2fe9b6b620d4) 문서를 기반으로 구현했습니다.

주기적으로 업데이트 할 예정이지만 `SuperUX`의 정책 변화에 따라서 정상 동작하지 않을 수 있습니다.

꼭! 아래 커스텀 컴포넌트 파일 요구사항을 참고해서 사용해주세요.
# CustomComponent.tsx 파일 요구사항
## 1. 컴포넌트 표현 방식
1. 컴포넌트는 `함수 표현식`으로 표현되어야함
2. 컴포넌트는 `React.fowardRef`로 감싸진 형태여야함
3. 컴포넌트 파일 최하단에는 `export` 구문이 존재해야함

    (ex. const CustomComponent = React.forwardRef(...))
## 2. 컴포넌트 Props 표현 방식
 1. props는 `import` 구문 아래, `CustomComponent` 표현식 위에 정의되어야함
 2. props는 `type`이 아니라 `interface`로 선언되어야함
 3. props는 `prop`이 optional한 경우 `union` 타입으로 표현해줘야함
 

```ts
// ex) CustomComponent.tsx 파일 예시
import ...

interface Props { // 조건 2-1, 조건 2-2
 name: string | undefined; // 조건 2-3
 age: number;
}

const CustomComponent = React.forardRef<any, Props>(({ ...props들 }, ref) => { // 조건 1-1, 조건 1-2
 ...구현 내용
});

export default CustomComponent; // 조건 1-3
```

## 사용법
```bash
> npm run extract (타겟_컴포넌트_폴더_경로 | 타겟_컴포넌트_파일_경로)
# ex) npm run extract SuperUXConverter/Examples/Test1/Example.tsx
# ex) npm run extract SuperUXConverter/Examples
```

## 엣지 케이스가 존재할 수 있습니다!
- 오류 제보
- 개선사항 제안

> 와플로 연락 주시면 적극 반영하겠습니다.

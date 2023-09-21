
# CustomComponent.tsx 파일 요구사항
## 1. 컴포넌트 표현 방식
1. 컴포넌트는 `함수 표현식`으로 표현되어야함
2. `React.forardRef`로 감싸진 형태여야함
3. 파일 최하단에는 `export` 구문이 존재해야함

    (ex. const CustomComponent = React.forwardRef(...))
## 2. 컴포넌트 Props 표현 방식
 1. `import` 구문 아래, `CustomComponent` 표현식 위에 정의되어야함
 2. `type`이 아니라 `interface`로 선언되어야함
 3. `prop`이 optional한 경우 `union` 타입으로 표현해줘야함
 

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
> npm run extract 타겟_컴포넌트_경로
# ex) npm run ./SuperUXConverter/Example.tsx
```

`ref는 개인이 추가해줘야합니다!!!!!!!!`

## 엣지 케이스가 존재할 수 있습니다!
- 오류 제보
- 개선사항 제안

> 와플로 연락 주시면 적극 반영하겠습니다.

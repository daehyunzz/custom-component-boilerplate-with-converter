SuperUX Custom Component 추가를 위한 프로젝트

사용방법
CustomComponent.tsx의 CustomComponent 안에 코드를 작성해주세요.
npm run serve 명령어를 터미널에서 실행해주세요.(8080 포트를 다른데서 사용할 경우 실행되지 않습니다.)
열린 인터넷 창에서 component의 동작을 확인해주세요.
원하시는 대로 동작할 경우 dist 폴더의 main.js에서 코드를 확인할 수 있습니다.
"const CustomComponent = " 이후의 부분을 이용하시면 됩니다.
ex)
const CustomComponent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ className, children }, ref) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, ref: ref }, children));
});
의 경우
react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ className, children }, ref) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, ref: ref }, children));
});
부분을 GX의 Custom Component에 입력하면 됩니다.(해당 부분은 추후 수정될 수 있습니다.)
또한, "react__WEBPACK_IMPORTED_MODULE_0__"를 모두 React로 변경하여 GX에 입력해주셔야 합니다.

주의사항
CustomComponent에서 return 해주는 컴포넌트의 최상단에 className, ref를 prop으로 넣어주어야 SuperUX에서 resize, move 등이 동작합니다.
package.json의 내용은 현재 개발중인 SuperUX와 동일하며, 없는 library를 사용하실 경우에는 문의해주세요.
또한, CustomComponent에서 React이외의 다른 library를 사용하실 경우에도 문의해주세요.
현재는 CustomComponent안에 모든 코드가 들어가 있어야 동작할 수 있습니다.
"react__WEBPACK_IMPORTED_MODULE_0__"를 모두 React로 변경해주시지 않으면 GX에서 동작되지 않을 수 있습니다.
npm run serve를 한 상태에서 코드를 수정할 경우 main.[hash].hot-update.js에 변경된 코드가 저장됩니다.
가장 최신 파일을 찾아서 원하시는 코드를 찾으시거나, 종료후 npm run serve를 다시 실행해주세요.

MetaData 작성 방법
Prop으로 변수와 이벤트 등을 받아 사용할 수 있습니다.
MetaData를 작성해주셔야 하며, 설정하신 MetaData의 이름과 컴포넌트의 prop 이름을 일치시켜주어야 합니다.
MetaData는 현재 Content, Event에 대해 테스트 되었고, Style의 경우 추후 확인 예정입니다.
children은 Content에 작성하지 않아도 사용 가능합니다.

    Content 작성 방법
    각 변수 마다 Name, Type, Control, Basic, DefaultValue를 작성해주어야 합니다.
    Description도 작성하여 저장할 수 있습니다.

    - Name
        변수의 이름이며, 컴포넌트에서도 해당 이름으로 변수가 넘어옵니다.
        string으로 작성해주세요.
    - Basic
        우측 툴페인에 표시될 때 사용합니다.
        1일 경우 기본/상세에서, 0일 경우 상세에서, 그외의 경우 표시되지 않습니다.
    - DefaultValue
        해당 변수의 기본 값입니다.
        Type, Control을 입력할 때 입력 가능한 값으로 설정해주세요. 
        string, number, boolean, null이 가능합니다.
    - Type
        해당 변수의 타입에 대한 정보입니다.
        3가지 정보(Control이 DropDwon의 경우 4가지) 정보를 작성해주어야 합니다.
        type
            해당 변수의 데이터 타입입니다.
            object 타입이 아닐 경우
            'number', 'string', 'boolean', 'Position', 'Color', 'PageID', 'object', 'ReactNode', 'Date'
            위 항목 중 하나로 작성해주세요.

            object 타입일 경우 해당 오브젝트가 가질 수 있는 key 값 마다 아래 Name, Type, DefaultValue를 작성해주세요.
        isArray
            해당 prop이 array인지에 대한 정보입니다.
            true, false 중 하나로 작성해주세요.
            현재는 type이 object인 경우에만 가능합니다.
        isObject
            해당 변수가 object 타입인지 여부입니다.
            true, false 중 하나로 작성해주세요.        
        literal
            Dropdown일 경우 작성해주세요.
            해당 변수가 가질 수 있는 값의 배열입니다.
    - Control
        우측 툴페인에서 해당 변수를 어떻게 설정할지에 대한 정보입니다.
        type과 value(Control의 type이 Dropdown일 경우만)을 작성해주세요.
        type
            해당 변수를 어떤 Control로 설정할지에 대한 정보입니다.
            'Dropdown', 'TextArea', 'TextField', 'Spinner', 'ReactNode'
            위 항목 중 하나로 작성해주세요.
        value
            Control의 type이 Dropdown일 경우 Dropdown에 표시 될 값들의 정보입니다.
            배열로 작성해주세요.
    - Description
        해당 변수의 설명입니다.
        현재는 기능이 없지만 추후 추가될 수 있습니다.
        string으로 작성해주세요.
    
    SuperUX에서 변수를 생성하면, 동일한 타입의 작성하신 Content 값과 매핑이 가능합니다.
    하지만, 내부에서 값을 수정하셔도 SuperUX에서 정의된 변수의 값은 바뀌지 않습니다.
    값 변경을 위해서는 Event에서 onChange 혹은 onInputChange를 선언하고, SuperUX에서 BusinessLogic중 Set Event Value(variable) 로직을 이용해주세요.
    
    Event 작성 방법
    해당 항목에 Event를 작성할 경우에만 SuperUX에서 비즈니스 로직이 설정 가능합니다.
    Name, Type, Inputs, NewValueLocation, Description이 작성가능합니다.

    - Name
        해당 이벤트의 이름입니다.
        컴포넌트에 해당 이름으로 이벤트가 넘어갑니다.
    - Type
        이벤트의 타입입니다.
        "MouseEvent", "WheelEvent", "KeyEvent", "KeyboardEvent", "FocusEvent", "FormEvent", "ChangeEvent", "CompositionEvent", "SyntheticEvent", "DragEvent", "ClipboardEvent", "void"
        void의 경우 넘어온 event 값을 버리며, 이외의 경우 React의 해당 event로 변환하여 비즈니스 로직에 전달합니다.
    - Inputs
        해당 이벤트에 넘기는 prop들의 이름입니다.
        현재는 기능이 없으며, 추후 추가될 수 있습니다.
        입력하지 않으셔도 현재는 문제없습니다.
        ex) onClick(event, data1, data2) 와 같이 실행될 경우 ["event", "data1", "data2"]와 같은 식으로 작성 가능합니다.
    - NewValueLocation
        현재는 onChange, onInputChange에서만 사용됩니다.
        해당 두 이벤트의 경우 비즈니스 로직 중 Set Event Value(variable) 타입을 설정할 수 있으며, 여기서 사용되는 값입니다.
        
        SuperUX에서 변수 데이터를 생성하면, 해당 변수 데이터의 타입과 동일한 타입의 변수를 컴포넌트에 매핑할 수 있습니다.
        (이를 위해서는 우측 툴페인에 접근이 필요하기 때문에 MetaData의 Content 부분을 작성해주셔야 합니다.)
        이렇게 전달받은 값을 CustomComponent에서 수정하셔도 반영이 되지 않습니다.
        매핑한 SuperUX 데이터 변수의 변경이 필요하실 때 Set Event Value(variable) 비즈니스 로직으로 변경 가능합니다.

        아래 한가지 혹은 두가지 항목에 대해 작성해주셔야 합니다.
        Index
            onChange, 혹은 onInputChange의 몇 번째 prop으로 값을 설정할지에 대한 부분입니다.
            number로 작성해주세요.
        ValueLocation
            만약 업데이트를 원하는 값이 Index에 해당하는 prop의 특정 key에 해당하는 값일 경우 해당 object의 경로를 저장합니다.
        ex) onChange(event, newValue, trashData)
            이 경우 Index만 1로 작성해주시면 됩니다.
            onInputChange(event, trashData1, trashData2, {a: trashData3, b: {c: trashData4, d: newData}})
            이와 같은 경우 Index는 3, ValueLocation은 b.d 와 같이 작성해주시면 됩니다.
    - Description
        해당 변수의 설명입니다.
        현재는 기능이 없지만 추후 추가될 수 있습니다.
        string으로 작성해주세요.
    
    해당 항목들을 작성할 경우 컴포넌트에 해당 이벤트가 넘어갑니다.
    해당 이벤트를 호출하셔야 비즈니스 로직이 호출됩니다!


작성 예시는 CustomComponent_example/CustomComponent_example2가 있습니다.
SuperUX에서 변수 생성 및 onChange에서 BusinessLogic중 Set Event Value(variable) 설정할 경우 둘의 동작은 동일하며 매핑한 변수 값도 업데이트 됩니다.

이를 설정하지 않을 경우 SuperUX에서 생성한 변수는 업데이트 되지 않습니다.
CustomComponent_example의 경우 컴포넌트 내부의 값은 업데이트 되며, 표시되는 값도 변경됩니다.
CustomComponent_example2의 경우 컴포넌트 내부 값이 없데이트 되지 않기 때문에 표시되는 값은 변하지 않습니다.
두 컴포넌트 모두 다른 이유로 인해서 매핑된 변수 데이터 값이 변경되면 해당 값으로 다시 렌더링됩니다.
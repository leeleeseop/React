import { createRoot } from "react-dom/client";

function Flower(props) {
    const {kind, color} = props;
    return (
        <p>예쁜 {color} {kind} 꽃이 피었습니다.</p>
    )
}

// 레스트 연산자로 사용
function Human({name, age, ...rest}) {
    return (
        <>
            <p>제 이름은 {name} 이고요,</p>
            <p>나이는 {age}세 입니다.</p>
            <p>사는 곳은 {rest.address} 입니다.</p>
        </>
    );
}

// 받고자 하는 값이 없는 겨우 디폴트 값으로 지정
function Human1({name = "이아무개", age = 10}) {
    return (
        <>
            <p>제 이름은 {name} 이고요,</p>
            <p>나이는 {age}세 입니다.</p>
        </>
    );
}


createRoot(document.getElementById('root')).render(
    //<Flower kind="장미" color="빨강" amount={10}/>

    //<Human name="이이섭" age={20} address="의정부" />

    <Human1 />
);

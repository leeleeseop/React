import { createRoot } from "react-dom/client";

// props는 원하는 만큼의 프로퍼티를 전달 할 수있음 객체 속성으로 Flower 컴퍼넌트에 전달이 됨
// 숫자, 변수, 객체는 {}안에 넣어서 전달 해야 함
function Flower(props) {
  return (
    <>
    <p>나는 {props.color} {props.kind} 입니다.</p>
    <p>꽃이 {props.amount} 송이 있습니다.</p>
    <p>우리 가게에는 {props.colors[0]} {props.colors[1]} {props.colors[2]} 꽃이 있습니다.</p>
    <p>현재 남은 꽃이 {props.types.kind} {props.types.amount} 송이입니다.</p>
    </>
  )
}

// 한 컴퍼넌트에서 다른 컴퍼넌트로 props를 전달하는 방법
// props를 받아서 사용
function Flower1(props) {
  return (
    <p>예쁜 {props.kind} 꽃이 피었습니다.</p>
  )
}

// Garden이라는 컴퍼넌트에서 Flower1로 값을 전달 할 때 props를 통해서 전달을 할 수 있음
function Garden() {
  return (
    <>
      <p>이 곳은 정원입니다.</p>
      <Flower1 kind="장미" />
    </>
  )
}

// 변수로 전달할 떄 
let cnt = 20;

// 객체로 전달할 때
const a = ['빨강', '노랑', '파랑'];
const b = {kind:"장미꽃", amount:10};

createRoot(document.getElementById('root')).render(
  // 문자열로 전달
  //<Flower amount"10" color="하얀" kind="장미꽃" />
  
  //숫자로 전달
  //<Flower amount={10} color="하얀" kind="장미꽃" />

  // 변수로 전달 할 
  //<Flower amount={cnt} color="하얀" kind="장미꽃" />

  // 객체로 전달 
  //<Flower colors={a} types={b} />

  <Garden />

);

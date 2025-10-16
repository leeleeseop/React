import { createRoot } from 'react-dom/client';

// 별도로 만들어지 Flower 컴포넌트 파일을 가져오기
import Flower from './Flower.jsx';

/*
function Flower(props) {
  return (
    <p>저는 {props.color} 꽃입니다.</p>
  );
}

createRoot(document.getElementById('root')).render(
  <Flower color="빨강" />
);
*/

// 컴포넌트 안에 컴포넌트를 만들기
/*
function Flower(props) {
  return (
    <p>저는 {props.color} 꽃입니다.</p>
  );
}
  */

function Garden() {
  return (
    <>
      <p>저는 정원입니다.</p>
      <Flower />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Garden />
);

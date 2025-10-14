import { createRoot } from 'react-dom/client';

// h1를 사용했을 떄 
//const myElement = React.createElement('h1', {}, 'JSX 사용하지 않음');
//const myElement = <h1>JSX를 사용</h1>;

// 계산식
//const myElement = <h1>5 + 5 = {5 + 5}</h1>; // 5+5=10으로 나온다

// 여러 줄로 작성할 떄
/*
const myElement = (
  // 최상위 요소(ul)는 하나로 존재 아니면 오류
  <ul>
    <li>사과</li>
    <li>복숭아</li>
    <li>수박</li>
  </ul>
  
  <div>
    <p>첫번째 문단</p>
    <p>두번째 문단</p>
  </div>
);
*/


// 태그는 닫아줘야한다
//const myElement = <input type="text" />; 

// 태그에서 클래스를 사용할때는 className으로 사용해야 한다 ES6에서는 class가 키워드이기 때문에 곂친다
// const myElement = <h1 className="aaaa">Hello World</h1>

/* 컴포넌트 */
function Intro() {

  const name = "이이섭";

  return (
    <>
      <h1>내 소개</h1>
      <p>저는 {name} 입니다.</p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Intro />
);

/*
createRoot(document.getElementById('root')).render(
  myElement
);
*/

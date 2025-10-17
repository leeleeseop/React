import { createRoot } from 'react-dom/client'

function App() {
  // 기본적인 이벤트 동작
  const sayHi = () => {
    alert("안녕하세요.");
  };

  // 매개변수를 받아서 사용하는 방법
  const sayHi1 = (name) => {
    alert(`${name}님, 안녕하세요.`);
  };

  // EventHandler를 사용하는 방법
  const sayHi2 = (name, e) => {
    alert(`${name}님, 안녕하세요.`);
    alert(`발생한 이벤트는 ${e.type} 입니다.`);
  };

  // 마우스를 올렸을 때 이벤트
  const handleMouseEnter = () => {
    alert("마우스가 올라왔습니다.");
  };

  // 입력창에 타이핑할 때 이벤트
  const handleChange = (e) => {
    console.log("입력한 값:", e.target.value);
  };

  // 입력창을 클릭하면 이벤트
  const handleFoucs = () => {
    alert("입력창이 선택되었습니다.")
  };

  // 선택한 입력창 이벤트 해제
  const handelBlur = () => {
    alert("입력창 선택이 해체되었습니다.")
  };

  // 키보드 눌렀을 때 이벤트
  const handleKeyDown = (e) => {
    alert(`${e.key} 키를 눌렀습니다.`);
  };

  // 키보드 땠을 때 이벤트 
  const handleKeyUp = (e) => {
    console.log(`${e.key} 키를 눌렀습니다.`);
  };

  // 엔터키 눌렀을 때만 동작하는 이벤트
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert("엔터키를 눌렀습니다.");
    }
  };

  // 폼 제출 이벤트
  const handelSubmit = (e) => {
    e.preventDefault();
    alert("폼이 제출되었습니다.");
  };

  return (
    <>
    {/* 함수를 넣을때는 중괄호 안에 넣어서  */}
    <button onClick={sayHi}>인사 버튼</button>

    {/* 인수를 전달할 때는 화살표 함수로 전달해야 한다 */}
    <button onClick={() => sayHi1("이이섭")}>인사 버튼</button>
 
    {/* 이벤트 핸들러를 사용할때 */}
    <button onClick={(event) => sayHi2("이이섭", event)}>클릭</button>

    {/* 더블클릭 */}
    <button onDoubleClick={(event) => sayHi2("이이섭", event)}>더블클릭</button>

    {/* 마우스를 올렸을 때 */}
    <div onMouseEnter={handleMouseEnter}>마우스를 올려보세요.</div>

    {/* 입력창에 타이핑할 때 */}
    <input type="text" onKeyDown={handleChange} placeholder="키를 눌러보세요."/>

    {/* 포커스 이벤트 */}
    <input type="text" onFocus={handleFoucs} onBlur={handelBlur} placeholder="클릭해보세요." />

    {/* 키보드 이벤트 */}
    <input type="text" onKeyDown={handleKeyDown} placeholder="키를 눌러보세요." />

    {/* 엔터키 이벤트 */}
    <input type="text" onKeyPress={handleKeyPress} placeholder="엔터를 눌러보세요."/>

    {/* 폼 제출 이벤트 */}
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder="이름" />
      <button type="submit">제출</button>
    </form>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
);

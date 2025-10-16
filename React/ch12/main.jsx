import { createRoot } from 'react-dom/client';

function Human() {

  const a = "title";

  // 이벤트 동작
  const myFunc = () => {
    alert("서울에 살고 있어요")
  }

  // 스타일 적용 jsx에서는 카멜 케이스로 작성해야한다.
  const style = {
    color: "white",
    fontSize: "3rem",
    backgroundColor:"black",
    fontWeight: "700"
  }

  /*
  return (
    // p태그를 클릭하면 이벤트 발생
    <p className={a} onClick={myFunc}>저는 이이섭입니다.</p>
  );
  */

  /*
  return (
    // disabled = 기본값(true) 버튼 비활성화 false일때만 버튼 활성화 disabled={false}
    <button onClick={myFunc} disabled>버튼</button>
  )
  */

  return (
    <span style={style}>저는 이이섭입니다.</span>
  )
}

createRoot(document.getElementById('root')).render(
  <Human />
)

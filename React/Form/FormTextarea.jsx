import { useState } from "react";
import { createRoot } from "react-dom/client";

function App () {
    // myText: textarea에 입력된 텍스트를 저장
    // setMyText: myText 상태를 업데이트하는 함수
    // useState(""): 빈 textarea로 시작
    const [myText, setMyText] = useState("");

    function handleChange(e) {
        // e.target.value: 현재 textarea에 입력된 모든 텍스트
        setMyText(e.target.value);
    }

    return (
        // 리액트에서는 textarea의 value의 속성에 값을 입력함
        // onChange: 입력값이 변경될 때마다 handleChange 함수가 실행됨 
        <form>
            <label>값을 입력 : </label>
            <textarea value={myText} onChange={handleChange} />
            <p>입력 텍스트 : {myText}</p> {/* 입력한 값이 실시간으로 출력 */}
        </form>
    )
}

createRoot(document.getElementById('root')).render(
    <App />
);

import { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
    // name: 현재 입력 필드의 값을 저장 상태
    // setName: name을 업데이트 하는 함수
    // useState(""): 초기값은 비어있음
    const [name, setName] = useState("");

    // 사용자가 input에 타이핑할 떄마다 실행
    function handleChange(e) {
        // setName: 으로 상태를 업데이트 하면 React가 자동으로 화면을 다시 렌더링 
        // e.target.value: 현재 입력된 상태 
        setName(e.target.value);
    }

    function handleSubmit(e) {
        // 폼 액션을 막아주는 메서드 <form>을 제출하면 페이지가 새로고침하는걸 막아줌
        e.preventDefault();
        // 입력한 name값을 출력을 함
        alert(name);
    }

    return (
        // onSubmit={handleSubmit} -> function handleSubmit(e)의 함수를 호출함 
        <form onSubmit={handleSubmit}>
            <label>이름 입력: </label>
            <input type="text" value={name} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

createRoot(document.getElementById('root')).render(
    <App />
);

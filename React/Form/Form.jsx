import { useState} from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <form>
            <label>이름 입력 :</label>
            <input type="text" />
        </form>
    );
}

//Controlled Component를 구현하기
function App1() {
    // useState 훅을 사용하는 문법
    // useState("이 안에 초기값을 넣어주면 값이 셋팅이 된다.")
    // name: 변수 이름 setName: name의 값을 업데이트 할 함수 이름
    const [name, setName] = useState("입력 하세요");

    function handleChange(e) {
        // 값을 입력할 때 마다 setName이 동작을 해서 state를 업데이트 하여 리렌더링함
        setName(e.target.value);
    }

    return (
        <form>
            <label>이름 입력 : </label>
            <input type="text" value={name} onChange={handleChange} />
            {/* 변경된 값은 입력한 값에 렌더링이 된다 */}
            <p>입력한 값 : {name}</p>
        </form>
    );
}


createRoot(document.getElementById('root')).render(
    <App1 />
)

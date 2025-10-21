import { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {

    // 초기값을 option 중 하나로 설정
    const [myFlower, setMyFlower] = useState("장미꽃");

    const handleChange = (e) => {
        // select value={myFlower}에서 선택한 값을 setMyFlower에 저장
        setMyFlower(e.target.value);
        // select에서 선택한 값을 alert로 표시 
        alert(e.target.value);
    }

    return (
        // 선택한 값을 바꿨는지 체크 하기 위해 onChange
        // value에 값을 셋팅을 해서 사용
        <form>
            <select value={myFlower} onChange={handleChange}> 
                <option value="장미꽃">장미꽃</option>
                <option value="국화">국화</option>
                <option value="민들레">민들레</option>
            </select>
        </form>
    )
}

createRoot(document.getElementById('root')).render(
 <App />
);

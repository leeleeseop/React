import { useState } from "react"
import {createRoot} from "react-dom/client"

function App() {
    const [flower, setFlower] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;

        // 체크박스의 체크상태의 변화가 있을때 업데이트
        // 해당 요소가 체크박스인 경우에는 그 요소가 체크가 되었는지 true, false인지 담고 체크박스가 아닌 경우에는 e.target.value 값의 의미가 있다.
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFlower(values => ({...values, [name]: value}));
    }

    // onSubmit을 통해 입력한 값들이 전달이 되고 alert로 표시
    const handleSubmit = (e) => {
        e.preventDefault();
        let options = "";
        let result = "";
        if (flower.wrap) options += '선물포장 해주세요.';
        if (flower.home) options += '배달해주세요.';        
        result = `${flower.color} ${flower.kind} 을 `;
        // options값이 있는 경우에
        if(options) {
            result += '옵션사항 : ' + options;
        }
        alert(result);
    }

    return (
        <form onSubmit={handleSubmit}>
            Color : <input type="text" name="color" value={flower.color} onChange={handleChange}/>
            Kind : <input type="text" name="kind" value={flower.kind} onChange={handleChange}/>
            <label>선물 포장 희망
                <input type="checkbox" name="wrap" checked={flower.wrap} onChange={handleChange}/>
            </label>
            <label>배달 희망
                <input type="checkbox" name="home" checked={flower.home} onChange={handleChange}/>
            </label>
            <button>Submit</button>
            <p>{flower.color} {flower.kind}</p>
        </form>
    )
}

createRoot(document.getElementById('root')).render(<App />);

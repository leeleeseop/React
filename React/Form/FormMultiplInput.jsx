import { useState } from "react"
import {createRoot} from "react-dom/client"

function App() {
   
    // State로 관리해야 할 게 2개 이상이면 객체로 1개로 처리 할 때는 {} 빈 객체를 만든다 
    const [flower, setFlower] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        
        // 여러 input 중 어떤 것이 변경되었는지 식별하기 위해 name 속성 사용
        // name으로 체크해서 어디서 입력이 되는지 체크
        const value = e.target.value;
       
        // 어떤식으로 객체를 업데이트를 할 것인지
        // [flower, setFlower] 객체로 되어있어가지고 객체를 전달할때 {...value, [name]: value} 스프레드 연산자로 사용해서 
        // 기존에 있던 값을 구조분해로 활당하고 [name] (Computed Property) 계산된 속성 값을  ...value에 넣어준다.
        // [name]: 계산된 속성으로 e.target.name;의 값(name="color" name="kind")이 [name]에서 key로 사용 
        setFlower(values => ({...values, [name]: value}));
    }
    return (
        <form>
            Color : <input type="text" name="color" value={flower.color} onChange={handleChange}/>
            Kind : <input type="text" name="kind" value={flower.kind} onChange={handleChange}/>
            <p>{flower.color} {flower.kind}</p>
        </form>
    )
}

createRoot(document.getElementById('root')).render(<App />);

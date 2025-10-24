// 파라미터 전달
import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Info() {
    // 파라미터(:name)로 전달된 값을 useParams로 추출하여 화면에 표시
    const {name} = useParams();
    return <h1>저는 {name} 입니다.</h1>
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/customer/이이섭">이이섭</Link> | {" "}
                <Link to="/customer/이섭이">이섭이</Link> | {" "}
                <Link to="/customer/이섭">이섭</Link> 
            </nav>
            <Routes>
                {/* :name은 URL 파라미터를 의미
                        /customer/홍길동, /customer/철수 등 모든 경로를 하나의 Route로 처리*/}
                <Route path="/customer/:name" element={<Info />} />
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(<App />)

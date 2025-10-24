import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

function Home() {
    return <h1>Home Page</h1>
}

function About() {
    // 중첩된 경로
    return (
        <div>
            <h1>About Page</h1>
            <nav>
                <Link to="/about/ceo">CEO</Link>
            </nav>
            <Outlet />
        </div>
    )  
}

function Contact() {
    return <h1>Contact Page</h1>
}

function AboutCeo() {
    return <h2>About / ceo</h2>
}

function  App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">홈</Link> | {" "}
                <Link to="/about">회사소개</Link> | {" "}
                <Link to="/contact">문의하기</Link>
            </nav>
            {/* Routes */}
            <Routes>
                {/* 이 path로 들어왔을때 Hoem 컴포넌트를 호출을 하라*/}
                <Route path="/" element={<Home />} />
                {/* about path로 들어왔을때 About 컴포넌트를 호출을 하라 */}
                <Route path="/about" element={<About />}>
                    <Route path="ceo" element={<AboutCeo />} />
                </Route>
                {/* contact path로 들어왔을때 Contact 컴포넌트를 호출을 하라 */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(<App />)

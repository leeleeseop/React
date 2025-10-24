import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./Navbar.css";

function Home() { return <h1>Home Page</h1> }

function About() { return <h1>About Page</h1> }

function Contact() { return <h1>Contact Page</h1> }

function  App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <NavLink to="/" className={({isActive}) => (isActive ? "active-link" : "inactive-link")}>홈</NavLink> | {" "}
                <NavLink to="/about" className={({isActive}) => (isActive ? "active-link" : "inactive-link")}>회사소개</NavLink> | {" "}
                <NavLink to="/contact" className={({isActive}) => (isActive ? "active-link" : "inactive-link")}>문의하기</NavLink>
            </nav>
            {/* Routes */}
            <Routes>
                {/* 이 path로 들어왔을때 Hoem 컴포넌트를 호출을 하라*/}
                <Route path="/" element={<Home />} />
                {/* about path로 들어왔을때 About 컴포넌트를 호출을 하라 */}
                <Route path="/about" element={<About />} />
                {/* contact path로 들어왔을때 Contact 컴포넌트를 호출을 하라 */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
createRoot(document.getElementById('root')).render(
<App />
);

import {createRoot} from 'react-dom/client';
// 별도의 css파일로 적용 (index의 body)
import './style.css';
// css module
import styles from './style.module.css';

function App() {

    // {color: "blue"} 이 객체를 밖으로 빼내서 사용
    const style1 = {
        color : "#fff",
        backgroundColor:"#f00",
        padding: "5px"
    }

    return (
        <>
        {/* 자바스크립트 표현식을 사용할 때 중괄호가 필요하고 그 안에
        자바스크립트 객체를 넣어야 하기 때문에 중괄호 하나가 또 들어감 */}
        <h1 style={{color: "blue"}}>Inline Style</h1>
        <p>리액트 CSS 스타일링 인라인 사용</p>

        <h1 style={style1}>Inline Style</h1>
        <p>리액트 CSS 스타일링 인라인 변수로 분리해서 사용</p>

        <h1 className={styles.title}>Inline Style</h1>
        <p>리액트 CSS module</p>
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />)

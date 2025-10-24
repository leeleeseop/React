import { createRoot } from "react-dom/client";
import styles from './Button.module.css';

function Button() {
    return (
        <div>
            <button className={styles.btn}>bytton</button>
            <button className={`${styles.btn} ${styles.primary}`}>bytton</button>
            <button className={`${styles.btn} ${styles.secondary}`}>bytton</button>

            {/* composes를 사용 */}
            <button className={styles.primary}>My bytton</button>
            <button className={styles.secondary}>My bytton</button>

            {/* 전역스타일 (Global Style) */}
            <h1 className="myheader">타이틀</h1>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<Button />)

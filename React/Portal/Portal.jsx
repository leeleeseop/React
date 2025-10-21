import {useState} from "react";
import { createRoot } from "react-dom/client";
import Modal from "./Modal";

function App() {
    // open 상태로 모달의 열림/닫힘을 관리
    // 초기값은 false(닫힌 상태)
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h1>React Portal Example</h1>
            {/* 버튼클릭 시 open을 true로 변경하여 모달을 연다 */}
            <button onClick={() => setOpen(true)}>Open Modal</button>

            {/* open이 true일때만 Modal 컴포넌트를 렌더링 */}
            { open && (
                <Modal>
                    <h2>안녕하세요!</h2>
                    <button onClick={ () => setOpen(false)}>닫기</button>
                </Modal>
              )
            }
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);

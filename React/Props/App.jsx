import { createRoot } from "react-dom/client";
import Box from './Box';

function App() {
  return (
    <div>
      <Box>
        <h1>안녕하세요!</h1>
        <p>이 부분은 Box 컴포넌트 children 입니다.</p>
      </Box>
      <Box>
        <button>클릭</button>
      </Box>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
);

// App(부모)가 Box 태그 사이에 내용을 씀 그 내용이 children으로 Box(자식)에게 전달됨 
// Box가 받아서 chilren을 화면에 표시

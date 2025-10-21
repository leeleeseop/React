import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
// import Greeting from './Greeting';

//const LazyGreeting = React.lazy(() => import('./Greeting'));
// 인위적으로 2초 지연 시킨 lazy loading: 지연된 로딩 
const LazyGreeting = React.lazy(() => 
    new Promise((resolve) => {
        setTimeout(() => resolve(import('./Greeting')), 2000);
    })
);  

function App() {
    return (
        <div>
            {/* Suspense는 자식 컴포넌트가 로딩되는 동안 fallback UI를 보여줌
                fallback은 로딩 중에 표시할 대체 UI */}
            <Suspense fallback={<div>Loading...</div>}>
                <LazyGreeting />
            </Suspense>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App />);

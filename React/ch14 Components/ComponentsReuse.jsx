import { createRoot } from 'react-dom/client';

// 컴포넌트
function Card({ title, content}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

// 같은 컴포넌트를 여러 번 사용
function Dashboard() {
    return (
        <div>
            <Card title="공지사항" content="새 기능이 추가되었습니다." />
            <Card title="이벤트" content="할인 행사 중입니다." />
            <Card title="알림" content="업데이트가 필요합니다." />
        </div>
    );
}

createRoot(document.getElementById('root')).render(
  <Dashboard />
);

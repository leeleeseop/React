import { createRoot } from "react-dom/client";

// Login이 true면 로그아웃 버튼 표시
// Login이 false면 로그아웃 버튼 표시 안함
function Header({Login}) {
    return (
        <header>
            <h1>내 사이트</h1>
            {Login && <button>로그아웃</button>}
        </header>
    );
}

// count > 0 조건 확인(알림이 0개보다 많은가?)
// 조건이 참이면 "새 알림 x개" 표시
// 조건이 거짓이면 아무것도 표시안함
function Notification({count}) {
    return (
        <div>
            <h2>알림</h2>
            {count > 0 && <span>새 알림 {count}개</span>}
        </div>
    )
}

function LoginForm() {
    const [error, setError] = useState('');
    
    return (
        <form>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button>로그인</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    );
}

// 권한체크
// user.role === 'admin' 역할이 관리자인가?
// 관리자면 관리 버튼들 표시
// 관리자가 아니면 관리 버튼들 표시안함
function PermissionCheck({user}) {
    return (
        <div>
            <h1>관리 페이지</h1>
            {user.role === 'admin' && (
                <div>
                    <button>사용자 관리</button>
                    <button>설정</button>
                    <button>통계</button>
                </div>
            )}
        </div>
    );
}

createRoot(document.getElementById('root')).render(
    <PermissionCheck user={{role: 'admin'}} />
);

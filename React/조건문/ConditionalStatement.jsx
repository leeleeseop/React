import { createRoot } from "react-dom/client";

function AdminPanel() {
    return (
        <p>관리자 전용 페이지입니다.</p>
    );
}

function UserPanel() {
    return (
        <p>일반 사용자 페이지입니다.</p>
    );
}

// if else
function App() {
    const isAdmin = true;

    if(isAdmin) {
        // true면 관리자 페이지
        return <AdminPanel />
    }else{
        // false면 일반사용자 페이지
        return <UserPanel />
    }
}

// props를 사용하는 구조로 
function App1({isAdmin}) {

    if(isAdmin) {
        // true면 관리자 페이지
        return <AdminPanel />
    }else{
        // false면 일반사용자 페이지
        return <UserPanel />
    }
}

// 값 들을 변수에 담아서 활용
function App2({isAdmin}) {
    let content = null;
    if(isAdmin) {
        content = <AdminPanel />;
    }else{
        content = <UserPanel />
    }

    return (
        <>
            <h1>어서오세요.</h1>
            {content}
        </>
    );
}

// 앰퍼센드로 2개 들어간 연산자로 선택적으로 랜더링
function App3(props) {
    return (
        <>
            {props.kind && <p>나는 {props.kind} 꽃입니다.</p>}
        </>
    );
}

// 조건문을 3항 연산자를 사용
function App4({isAdmin}) {
    return (
        <>
            { isAdmin ? <AdminPanel /> : <UserPanel />}
        </>
    );
}

// switch문 
function App5({role}) {
    switch(role) {
        case 'admin':
            return <AdminPanel />;
        case 'User':
            return <UserPanel />;
        default:
            return <p>역할을 알 수 없습니다.</p>;
    }
}

// switch문 변수에 담아서 활용
function App6({role}) {
    let content1 = null;

    switch(role) {
        case 'admin':
            content1 = <AdminPanel />
            break;
        case 'user':
            content1 = <UserPanel />
            break;
        default:
            content1 = <p>역할을 알 수 없습니다.</p>;
    }

    return (
        <>
            <h1>어서오세요.</h1>
            {content1}
        </>
    )
}

// switch문 복잡한 조건 처리
function App7({userType, isPremium}) {
    let panel = null;

    switch(userType) {
        case 'admin':
            panel = <AdminPanel />
            break;
        case 'user':
            /** 
                isPremium ? (true일 때) : (false일 때)
                isPremium === true -> <p>프리미엄 사용자 페이지입니다.
                isPremium === fasle -> <UserPanel />
                일반 사용자 안에서도 조건문
            */
            panel = isPremium ?
                <p>프리미엄 사용자 페이지입니다.</p> :
                <UserPanel />
            break;
        default:
            panel = <p>알 수 없는 사용자입니다.</p>;
    }

    return (
        <>
            <h1>마이페이지</h1>
            {panel}
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <App7 userType="user" isPremium={false}/>
);

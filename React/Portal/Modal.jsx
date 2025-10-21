import {createPortal} from "react-dom";

function Modal({children}) {

    const style = {
        position : 'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    };

    const style2 = {
        backgroundColor:'white',
        padding:'20px',
        borderRadius:'8px'
    };

    // createPortal을 사용하여 컴포넌트를 document.body에 직접 렌더링
    return createPortal(
        <div style={style}>
            <div style={style2}>{children}</div>
        </div>,
        // 렌더링 할 위치를 정한다
        document.body
    );
}

export default Modal;

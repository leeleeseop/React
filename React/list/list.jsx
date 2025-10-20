import {createRoot} from 'react-dom/client';

// key없이 리스트 만들기
function Flowers() {
    const flowers = ['장미', '매화', '국화', '수선화'];

    return (
        <>
            <ul>
                {flowers.map((flower) => <li>나는 {flower} 입니다.</li>)}
            </ul>
        </>
    );
}

// 고유의 ID를 key로 사용하여 리스트 만들기 
// 목록을 랜더링 할 떄는 각 항목의 고유한 Key를 지정해야 한다. 이는 리액트가 어떤 항목이 변경/추가/삭제가 되었는지 쉽게 파악이 가능하기 때문
function Flowers1() {
    const flowers1 = [
        {id: 1, kind: '장미'},
        {id: 2, kind: '매화'},
        {id: 3, kind: '철쭉'}
    ];

    return (
    <>
        <ul>
            {flowers1.map((flower1) => <li key={flower1.id}>나는 {flower1.kind} 입니다.</li>)}
        </ul>
    </>
    );
}

// 배열 인덱스를 key로 사용하여 리스트 만들기 
function Flowers2() {
    const flowers2 = ['장미', '매화', '국화'];

    return (
        <>
            <ul>
               {flowers2.map((flower2, index) => <li key={index}>나는 {index} 입니다.</li>)}
            </ul>
        </>
    );
}

// 중첩된 목록
function NestedList() {
    const categories = [
        {id: 1, name: '과일', items: ['사과', '바나나', '오렌지']},
        {id: 2, name: '과일', items: ['당근', '브로콜리', '오렌지']}
    ];

    return (
        <div>
            {categories.map(category => (
                <div key={category.id}> 
                    <h3>{category.name}</h3>
                    <ul>
                        {category.items.map((items, index) =>
                            <li key={index}>{index}</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
}

// 조건부 랜더링과 목록
function FilteredList() {
    const numbers = [1, 2, 3, 4, 5, 6];

    return (
        <ul>
            {numbers
                .filter(num => num % 2 === 0) // 짝수만 필터링 
                .map(num => <li key={num}>{num}</li>)    
            }
        </ul>
    );
}

// 컴포넌트로 분리하기 
// 목록 항목을 별도 컴포넌트로 
function FlowerItem({flower3}) {
    return<li>나는 {flower3} 입니다.</li>
}

function FlowerList() {
    const flowers3 = ['장미', '매화', '국화'];

    return (
        <ul>
            {flowers3.map((flower3, index) => (
                <FlowerItem key={index} flower3={flower3} />
            ))}
        </ul>
    );
}

createRoot(document.getElementById('root')).render(
    <FlowerList />
);

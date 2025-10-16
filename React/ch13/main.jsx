import { createRoot } from 'react-dom/client';

function Human() {
  const age = 21;

  let result = "미성년자";

  /*
  if (age >= 20) {
    result = "성인"
  }
  */

  return (
    //<p>당신은 {result} 입니다.</p>

    // 3항 표현식
    <p>당신은 { age >= 20 ? "성인" : "미성년자" } 입니다.</p>
  )
}

createRoot(document.getElementById('root')).render(
  <Human />
)

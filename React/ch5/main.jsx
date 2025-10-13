import { createRoot } from 'react-dom/client'

const fruitlist = [`apple`, `banana`, `orange`];

function MyList() {
  return(
    <ul>
      {fruitlist.map(fruit =>
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  )
}

createRoot(document.getElementById('root')).render(
  <MyList />
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcount] = useState(0);
  
  const countDown = () => {
    count <= 0 ? alert("これ以上減らせません") :setcount(count - 1);
  }

  const countUp = () => {
    setcount(count + 1);
  }

  return (
    <>
      <h1>カウンター</h1>
      <div>
        現在のカウント: {count}
      </div>
      <button onClick={countDown}>-</button>
      <button onClick={countUp}>+</button>
    </>
  )
}

export default App

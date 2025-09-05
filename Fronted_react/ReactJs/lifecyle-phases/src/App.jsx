import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mounting1 from './Mounting1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mounting1 city="Sheikhupura" />
    </>
  )
}

export default App

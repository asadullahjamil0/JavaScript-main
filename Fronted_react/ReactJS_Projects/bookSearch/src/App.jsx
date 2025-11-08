import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>

        </Route>
          <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

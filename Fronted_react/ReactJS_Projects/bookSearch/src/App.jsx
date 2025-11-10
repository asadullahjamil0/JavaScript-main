import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import BookList from './Components/BookList/BookList'
import BookDetail from './Components/BookDetail/BookDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="book/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

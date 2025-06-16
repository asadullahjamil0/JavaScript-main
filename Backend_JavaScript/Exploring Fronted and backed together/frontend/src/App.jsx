import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })

  return (
    <>
      <h1>Exploring: Backend and Frontend</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((jokes, index) => {
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.joke}</p>
          </div>
        })
      }
    </>

  )
}

export default App

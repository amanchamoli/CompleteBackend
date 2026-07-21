import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios"


function App() {
  const [jokes, setJokes] = useState([])

  useEffect( () => {
    axios.get("http://localhost:3000/api/jokes")
    .then((Response) => {
      setJokes(Response.data)
    })
    .catch( () => {
      console.log(error)
    })
  })

  

  return (
    <>
      <h1>hello Forntend</h1>
      <p>jokes: {jokes.length}</p>

      {
        jokes.map( (jokes, index) => (
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

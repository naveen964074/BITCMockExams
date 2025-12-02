import { useState } from 'react'
import { Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/navbar" element={<NavBar />} />
              </Routes>
          </main>
    </>
  )
}

export default App
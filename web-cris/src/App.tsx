import { useState } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import {mid} from './mid/mid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      
      <mid/>

      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      
      <h1>holi</h1>

      <Footer />
    </>
  )
}

export default App

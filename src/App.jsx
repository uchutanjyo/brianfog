import { useState } from 'react'
import './App.css'
import LinkTree from './Pages/LinkTree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<LinkTree></LinkTree>
    </>
  )
}

export default App

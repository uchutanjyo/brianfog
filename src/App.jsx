import { useState } from 'react'
import {  Routes, Route , BrowserRouter} from 'react-router-dom';
import PersonalSite from './Pages/PersonalSite.jsx';

import './App.css'

import LinkTree from './Pages/LinkTree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
    <Routes>
      <Route path="/" element={< LinkTree/>} />
      <Route path="personalsite" element={<PersonalSite />} />

    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App


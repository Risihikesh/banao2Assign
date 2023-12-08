import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
 

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'fixed', width: '100%' }}>
        <Navbar />
      </div>
      <div style={{ marginTop: '100px' }}>
        <Home />
      </div>
    </div>
  )
}

export default App

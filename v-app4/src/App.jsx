import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
function App() {
 

  return (
    <>
    <h1 className='bg-green-400 text-black text-center w-64 h-16 rounded-lg mb-3'>i love you</h1>
    <Card username="Manash" butt="find"/>
    <Card />
    </>
  )
}

export default App

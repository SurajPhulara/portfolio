import React from 'react'
import "./App.css"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Welcome from './page/Welcome/Welcome'
import './App.css'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id='app'>
      <div className="container">
        <Navbar/>
        <Welcome/>
        <Footer/>
      </div>
    </div>
  )
}

export default App


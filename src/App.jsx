import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Slider from './Components/Slider'
function App() {
  return (
    <div className='App'>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
        </Routes>
      </Router> */}
      <Header/>
      <Slider/>
    </div>
  )
}

export default App

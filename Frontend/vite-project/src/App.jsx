import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'
import MainLayout from './Layouts/MainLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<div>About Page</div>} />
      </Route>
    </Routes>
  )
}

export default App

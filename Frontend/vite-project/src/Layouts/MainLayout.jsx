import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
     <a href="#main-content" className="skip-link text-black">
        Skip to main content
      </a>

      <header>
        <Navbar />
      </header>
        
      <main
        id="main-content"
        tabIndex="-1"
        className="min-h-screen w-full flex flex-col items-center"
      >
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
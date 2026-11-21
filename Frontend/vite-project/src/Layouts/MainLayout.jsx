import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      >
        {/* child component will gona come here  */}
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MainLayout
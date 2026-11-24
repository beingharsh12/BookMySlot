import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/navigation/UserNavbar'
const UserLayout = () => {
  return (
  <>

  <header>
  <UserNavbar/> 
  </header> 



  <main>
    

    <Outlet/> 

  </main>


  </>
  )
}

export default UserLayout

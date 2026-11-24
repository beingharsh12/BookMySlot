import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/navigation/UserNavbar'
const UserLayout = () => {
  return (
  <>
  <UserNavbar/>
    <Outlet/>
  </>
  )
}

export default UserLayout

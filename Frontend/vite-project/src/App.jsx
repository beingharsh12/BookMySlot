import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navbar from "./components/Navbar";
import MainLayout from "./Layouts/MainLayout";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserLayout from "./Layouts/UserLayout";

function App() {
  return (
    <>
      {/*routes for home  */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

       
        </Route>
   {/* routes for useres dash board  */}

         {/* USER DASHBOARD ROUTES */}
      <Route path="/users" element={<UserLayout />}>
  
        <Route
          path="services"
          element={<h1>Explore Services</h1>}
        />
 
        <Route
          path="bookings"
          element={<h1>My Bookings</h1>}
        />

        <Route
          path="favorites"
          element={<h1>Favorites</h1>}
        />

        <Route
          path="profile"
          element={<h1>My Profile</h1>}
        />
      </Route>


      </Routes>
    </>
  );
}

export default App;

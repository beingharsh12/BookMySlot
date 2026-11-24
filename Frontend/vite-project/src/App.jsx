import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navbar from "./components/navigation/PublicNavbar";
import MainLayout from "./Layouts/MainLayout";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import UserLayout from "./Layouts/UserLayout";
import   Services from  './pages/user/Services'

function App() {
  return (
    <>
      <Routes>



      {/*routes for home  */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

       
        </Route>

  

   {/* routes for useres dash board  */}
   
         {/* USER DASHBOARD ROUTES */}
      <Route path="/users" element={<UserLayout />}>

      {/* child pages  that will be routed in the users layout  */}
      <Route path="services" element={<Services/>}  />
         
      </Route>


      </Routes>
    </>
  );
}

export default App;

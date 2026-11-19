import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navbar from "./components/Navbar";
import MainLayout from "./Layouts/MainLayout";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
    {/*routes for home  */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>

      {/* routes for useres dash board  */}

      <Routes>
        <Route
          element={
            <section>
              <h1 className="mb-6 rounded-xl bg-slate-900 px-6 py-4 text-2xl font-bold text-white">default healder of the users dashboard </h1>
              <Outlet />
            </section>
          }
        >
          <Route
            path="/users/services"
            element={<div> services thanks </div>}
          />

          <Route path="/users/dashboard" element={<div>dashboard </div>} />

        </Route>
      </Routes>


    </>
  );
}

export default App;

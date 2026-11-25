
import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/navigation/UserNavbar";

const UserLayout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <UserNavbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* MAIN CONTENT */}
      <main
        className={`pt-24 p-8 min-h-screen transition-all duration-300 ${
          menuOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;

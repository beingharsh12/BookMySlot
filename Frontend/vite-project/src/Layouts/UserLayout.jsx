import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/navigation/UserNavbar";

const UserLayout = () => {
  const [menuOpen, setMenuOpen] = useState(
    () => window.innerWidth >= 768
  );

  return (
    <>
      <UserNavbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main
        className={`
          min-h-screen pt-24 p-4 sm:p-8
          transition-all duration-300
          ${menuOpen ? "md:ml-64" : "ml-0"}
        `}
      >
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
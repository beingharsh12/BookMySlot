
import { NavLink, Link, useNavigate } from "react-router-dom";

import {
  MdHome,
  MdLocationOn,
  MdKeyboardArrowDown,
} from "react-icons/md";

import { CiMenuBurger } from "react-icons/ci";

const UserNavbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  function logoutUser() {
    navigate("/");
  }

  const navLinks = [
    {
      name: "Explore Services",
      path: "/users/services",
      icon: <MdHome />,
    },
    {
      name: "My Bookings",
      path: "/users/my-bookings",
    },
    {
      name: "Favorites",
      path: "/users/favorites",
    },
    {
      name: "My profile",
      path: "/users/profile",
    },
  ];

  return (
    <>
      {/* HAMBURGER BUTTON */}
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-5 left-5 z-[60] text-xl 
          cursor-pointer p-2 "
          aria-label="Open sidebar"
        >
          <CiMenuBurger />
        </button>
      )}

      {/* LEFT SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64
        bg-[#171638] text-white z-50 flex flex-col
        transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* LOGO */}
        <div className="h-20 flex items-center justify-between
          px-6 border-b border-white/10 shrink-0">

          <h1 className="text-2xl font-bold">
            BookMySlot
          </h1>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl cursor-pointer"
            aria-label="Close sidebar"
          >
            X
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl
                transition-all duration-200
                ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <span className="text-xl">
                {link.icon}
              </span>

              <span className="font-medium">
                {link.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* LOGOUT BUTTON */}
        <div className="p-4 shrink-0">
          <button
            onClick={logoutUser}
            className="w-full bg-purple-600 hover:bg-purple-700
            text-white px-6 py-2.5 rounded-xl
            font-medium transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* TOP NAVBAR */}
      <header
        className={`fixed top-0 ${
          menuOpen ? "left-64" : "left-0"
        } right-0 h-20 bg-white border-b border-gray-100
        z-40 flex items-center justify-between px-8
        transition-all duration-300`}
      >
        {/* LOCATION */}
        <button
          className="flex items-center gap-2
          text-gray-700 bg-gray-50 px-4 py-2 rounded-xl"
        >

          <span className="ml-3">Meerut</span>
          <MdLocationOn className="text-xl text-purple-600" />

        </button>

        {/* LOGIN BUTTON */}
        <Link
          to="/login"
          className="bg-purple-600 hover:bg-purple-700
          text-white px-6 py-2.5 rounded-xl
          font-medium transition-all duration-200"
        >
          Login
        </Link>
      </header>
    </>
  );
};

export default UserNavbar;

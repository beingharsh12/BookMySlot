
import { NavLink, Link } from "react-router-dom";

import {
  MdHome,
  MdLocationOn,
  MdSearch,
  MdKeyboardArrowDown,
} from "react-icons/md";

const UserNavbar = () => {

  const navLinks = [
    {
      name: "Explore Services",
      path: "/users/services",
      icon: <MdHome />,
    },
    {
        name:"Favorites",
        path:"/users/favorites"
    },
    {
        name:"My Bookings",
        path:"/users/my-bookings"
    }
  ];

  return (
    <>
      {/* LEFT SIDEBAR */}
      <aside
        className="fixed top-0 left-0 h-screen w-64
        bg-[#171638] text-white z-50 flex flex-col"
      >

        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">
            BookMySlot
          </h1>
        </div>

        {/* Navigation Links */}
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

      </aside>


      {/* TOP NAVBAR */}
      <header
        className="fixed top-0 left-64 right-0 h-20
        bg-white border-b border-gray-100 z-40
        flex items-center justify-between px-8"
      >

        {/* Location */}
        <button
          className="flex items-center gap-2
          text-gray-700 bg-gray-50 px-4 py-2 rounded-xl"
        >
          <MdLocationOn className="text-xl text-purple-600" />

          <span>Meerut</span>

          <MdKeyboardArrowDown />
        </button>


        {/* Search */}
        <div
          className="flex items-center gap-3
          border border-gray-200 rounded-xl
          px-4 py-3 w-[400px]"
        >
          <MdSearch className="text-xl text-gray-400" />

          <input
            type="text"
            placeholder="Search services, shops..."
            className="outline-none w-full text-sm"
          />
        </div>


        {/* Login Button */}
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

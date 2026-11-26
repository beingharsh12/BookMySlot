import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  MdHome,
  MdLocationOn,
  MdCalendarMonth,
  MdFavorite,
  MdPerson,
  MdClose,
} from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const UserNavbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Explore Services", path: "/users/services", icon: <MdHome /> },
    { name: "My Bookings", path: "/users/my-bookings", icon: <MdCalendarMonth /> },
    { name: "Favorites", path: "/users/favorites", icon: <MdFavorite /> },
    { name: "My Profile", path: "/users/profile", icon: <MdPerson /> },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-64 flex-col
          bg-[#171638] text-white
          transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-6">
          <Link to="/"><h1 className="text-2xl font-bold">BookMySlot</h1></Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-2xl hover:bg-white/10 rounded-lg"
            aria-label="Close sidebar"
          >
            <MdClose />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`
              }
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* TOP NAVBAR */}
      <header
        className={`
          fixed top-0 right-0 z-30 h-20
          ${menuOpen ? "left-0 md:left-64" : "left-0"}
          flex items-center justify-between border-b border-gray-100
          bg-white px-4 sm:px-6 md:px-8
          transition-all duration-300
        `}
      >
        <div className="flex items-center gap-4">
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 text-2xl text-gray-700 hover:bg-gray-100"
              aria-label="Open sidebar"
            >
              <CiMenuBurger />
            </button>
          )}

          <button className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700">
            <MdLocationOn className="text-xl text-purple-600" />
            <span>Meerut</span>
          </button>
        </div>

        <Link
          to="/user-login"
          className="rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
        >
          Login
        </Link>
      </header>
    </>
  );
};

export default UserNavbar;
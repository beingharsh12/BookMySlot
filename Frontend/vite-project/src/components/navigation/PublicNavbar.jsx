
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Bookings", href: "/users/my-bookings" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const linkStyle = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive
        ? "text-indigo-600"
        : "text-gray-700 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 text-xl font-bold text-indigo-600 sm:text-2xl"
        >
          BookMySlot
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} className={linkStyle}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DESKTOP LOGIN */}
        <Link
          to="/user-login"
          className="hidden rounded-lg bg-indigo-600 px-6 py-2.5 font-semibold text-white transition hover:bg-indigo-700 md:block"
        >
          Login
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="rounded-lg p-2 text-2xl text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="space-y-1 px-5 py-4 sm:px-6">

            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 font-medium transition ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li className="pt-3">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
              >
                Login
              </Link>
            </li>

          </ul>
        </div>
      </div>

    </header>
  );
};

export default Navbar;

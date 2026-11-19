import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'My Bookings', href: '/bookings' },
]
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          BookMySlot
        </Link>

        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="text-gray-700 hover:text-indigo-600">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/login" className="hidden rounded bg-indigo-600 px-4 py-2 text-white md:block">
          Login
        </Link>

        <button
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <ul id="mobile-menu" hidden={!open} className="space-y-2 border-t p-4 md:hidden">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="block py-1 text-gray-700">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/login" className="block py-1 font-semibold text-indigo-600">
            Login
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
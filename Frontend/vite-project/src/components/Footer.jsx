import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Website ka name */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-bold">
              Book<span className="text-violet-500">MySlot</span>
            </Link>

            <p className="text-slate-400 text-sm leading-7 max-w-sm">
              Book your services smarter. Save time, avoid unnecessary waiting,
              and enjoy a hassle-free experience with BookMySlot.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold mb-5">Quick Links</h2>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-violet-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-violet-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/users/services" className="hover:text-violet-400 transition">
                  Explore Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-violet-400 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services we will provide */}
          <div>
            <h2 className="text-lg font-semibold mb-5">Our Services</h2>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>Barber & Haircuts</li>
              <li>Salon & Beauty</li>
              <li>Healthcare & Clinics</li>
              <li>Car Wash</li>
              <li>Dental Care</li>
              <li>Spa & Wellness</li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h2 className="text-lg font-semibold mb-5">For Businesses</h2>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link
                  to="/business/register"
                  className="hover:text-violet-400 transition"
                >
                  Register Your Business
                </Link>
              </li>
              <li>
                <Link
                  to="/business/login"
                  className="hover:text-violet-400 transition"
                >
                  Business Login
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-violet-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} BookMySlot. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Made with <span className="text-red-500">♥</span> to save your time.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

const UserRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Connect your registration API here
    console.log(formData);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-10 sm:px-6">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-indigo-100/60 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-indigo-600 p-10 text-white md:flex lg:p-12">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10" />

          <Link
            to="/"
            className="relative z-10 flex items-center gap-2 text-2xl font-bold"
          >
            <CalendarCheck size={30} />
            BookMySlot
          </Link>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Create your account.
              <span className="mt-2 block text-indigo-200">
                Make every minute count.
              </span>
            </h1>

            <p className="mt-6 max-w-sm leading-relaxed text-indigo-100">
              Join BookMySlot to discover nearby services, book
              appointments, and avoid waiting in long queues.
            </p>
          </div>

          <p className="relative z-10 text-sm text-indigo-200">
            © 2026 BookMySlot. All rights reserved.
          </p>
        </div>

        {/* RIGHT SIDE - REGISTER FORM */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">

          <div className="w-full max-w-md">

            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-lg font-bold text-indigo-600 md:hidden"
            >
              <CalendarCheck size={25} />
              BookMySlot
            </Link>

            <div className="mb-7">
              <h2 className="text-3xl font-bold text-gray-900">
                Create an account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your details to get started with BookMySlot.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">

              {/* FULL NAME */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                  Full name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <User size={19} className="shrink-0 text-gray-400" />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                  Email address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <Mail size={19} className="shrink-0 text-gray-400" />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone number
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <Phone size={19} className="shrink-0 text-gray-400" />

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <Lock size={19} className="shrink-0 text-gray-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="shrink-0 text-gray-400 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <Lock size={19} className="shrink-0 text-gray-400" />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    className="shrink-0 text-gray-400 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* REGISTER BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                Create Account
                <ArrowRight size={19} />
              </button>

            </form>

            {/* LOGIN LINK */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/user-login"
                className="font-bold text-indigo-600 hover:text-indigo-700"
              >
                Sign in
              </Link>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRegister;

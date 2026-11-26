
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Connect your login API here
    console.log({ email, password, rememberMe });

    // Navigate after successful authentication
    // navigate("/users/services");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12 sm:px-6">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-indigo-100/60 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-indigo-600 p-10 text-white md:flex lg:p-12">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10" />

          <Link to="/" className="relative z-10 flex items-center gap-2 text-2xl font-bold">
            <CalendarCheck size={30} />
            BookMySlot
          </Link>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Your time matters.
              <span className="mt-2 block text-indigo-200">
                Book smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-sm leading-relaxed text-indigo-100">
              Discover local services, book your preferred time slot,
              and skip the long waiting queues.
            </p>
          </div>

          <p className="relative z-10 text-sm text-indigo-200">
            © 2026 BookMySlot. All rights reserved.
          </p>
        </div>

        {/* RIGHT SIDE - LOGIN FORM */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">

          <div className="w-full max-w-md">

            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-lg font-bold text-indigo-600 md:hidden"
            >
              <CalendarCheck size={25} />
              BookMySlot
            </Link>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome back!
              </h2>

              <p className="mt-2 text-gray-500">
                Sign in to continue booking your services.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <Mail size={19} className="shrink-0 text-gray-400" />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <Lock size={19} className="shrink-0 text-gray-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="shrink-0 text-gray-400 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
                />

                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                Sign In
                <ArrowRight size={19} />
              </button>

            </form>

            {/* REGISTER LINK */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/user-register"
                className="font-bold text-indigo-600 hover:text-indigo-700"
              >
                Create an account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

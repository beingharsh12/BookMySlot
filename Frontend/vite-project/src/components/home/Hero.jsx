
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, BriefcaseBusiness } from "lucide-react";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      `/users/services?location=${encodeURIComponent(location)}&service=${encodeURIComponent(service)}`
    );
  };

  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-16 sm:px-6 lg:px-8">

      {/* Background decoration */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Heading */}
        <span className="inline-block rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
          Find & Book Local Services
        </span>

        <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Book your slot.
          <span className="block text-indigo-600">
            Skip the wait.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Find nearby salons, clinics and local services.
          Book your preferred time slot without waiting in long queues.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          role="search"
          className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-indigo-100/50 sm:grid-cols-2 sm:p-4 lg:grid-cols-[1fr_1fr_auto] lg:items-center"
        >

          {/* Location Input */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
            <MapPin className="shrink-0 text-indigo-600" size={21} />

            <div className="min-w-0 flex-1 text-left">
              <label
                htmlFor="location"
                className="mb-1 block text-xs font-semibold text-gray-500"
              >
                Location
              </label>

              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                autoComplete="address-level2"
                className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          {/* Service Input */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
            <BriefcaseBusiness
              className="shrink-0 text-indigo-600"
              size={21}
            />

            <div className="min-w-0 flex-1 text-left">
              <label
                htmlFor="service"
                className="mb-1 block text-xs font-semibold text-gray-500"
              >
                Service you want
              </label>

              <input
                id="service"
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="e.g. Haircut, Dental checkup"
                className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.98] lg:w-auto"
          >
            <Search size={19} />
            Search
          </button>

        </form>

        <p className="mt-5 text-sm text-gray-500">
          Find the right service near you and book at your convenience.
        </p>

      </div>
    </section>
  );
};

export default Hero;

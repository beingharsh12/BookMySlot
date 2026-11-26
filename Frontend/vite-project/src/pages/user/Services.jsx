
import React, { useState } from "react";
import BusinessCard from "../../components/users/BusinessCard";
import {
  MdLocationOn,
  MdSearch,
  MdTune,
  MdSort,
  MdArrowForward,
  MdKeyboardArrowDown,
  MdCheckCircle,
} from "react-icons/md";

const Services = () => {

  // These values can later come from URL search parameters

  const [location] = useState("Meerut");
  const [service] = useState("Salon");

  const [sortBy, setSortBy] = useState("Recommended");

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Available Now",
    "Top Rated",
    "Most Popular",
  ];

  return (
    <div className="max-w-7xl mx-auto">

      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <span>Home</span>
        <span>/</span>
        <span>Explore Services</span>
        <span>/</span>
        <span className="text-purple-600 font-medium">
          Search Results
        </span>
      </div>


      {/* PAGE HEADING */}
      <div className="mb-7">

        <div className="flex items-center gap-2 text-purple-600 text-sm font-semibold mb-2">
          <MdCheckCircle className="text-lg" />
          SEARCH COMPLETED
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {service} Services
        </h1>

        <p className="text-gray-500 mt-2">
          Explore the best businesses available near your location.
        </p>

      </div>


      {/* SEARCH SUMMARY */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8 shadow-sm">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div className="flex flex-wrap items-center gap-5">

            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-xl">
                <MdSearch className="text-2xl text-purple-600" />
              </div>

              <div>
                <p className="text-xs text-gray-400">Service</p>
                <p className="font-semibold text-gray-800">
                  {service}
                </p>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gray-200" />

            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-xl">
                <MdLocationOn className="text-2xl text-purple-600" />
              </div>

              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="font-semibold text-gray-800">
                  {location}
                </p>
              </div>
            </div>

          </div>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 text-purple-600 font-semibold border border-purple-200 hover:bg-purple-50 px-5 py-3 rounded-xl transition cursor-pointer"
          >
            <MdSearch className="text-xl" />
            Modify Search
          </button>

        </div>

      </div>


      {/* RESULTS HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Available Businesses
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Find a business that matches your needs.
          </p>
        </div>

    

        </div>



      {/* FILTER BUTTONS */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-5">

        <div className="flex items-center gap-2 text-gray-700 font-semibold mr-2 shrink-0">
          <MdTune className="text-xl" />
          Filters
        </div>

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition cursor-pointer ${
              activeFilter === filter
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-purple-400"
            }`}
          >
            {filter}
          </button>
        ))}

      </div>


      {/* BUSINESS RESULTS */}
      <div className="mb-6 flex items-center justify-between">

        <p className="text-sm text-gray-500">
          Showing businesses for{" "}
          <span className="font-semibold text-gray-800">
            {service}
          </span>{" "}
          in{" "}
          <span className="font-semibold text-gray-800">
            {location}
          </span>
        </p>

      </div>

      <BusinessCard />

    </div>
  );
};

export default Services;


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

  const [location , setLocation] = useState("Meerut");
  const [service   , setService ]  = useState("Salon");
 


  function searchServices(e) {
    e.preventDefault()
    console.log(location, service)
  }


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
          Services
        </h1>

        <p className="text-gray-500 mt-2">
          Explore the best businesses available near your location.
        </p>

      </div>

 {/* taking input  */}

      <form action="" className="flex flex-col sm:flex-row gap-4">
        <label>
          Enter Service
          <input
            className="border-2 border-black-500"
            type="text"
            placeholder="enter service"
            onChange={(event) => {
              setService(event.target.value);
            }}
          />
        </label>

        <label>
          Enter Location
          <input
            className="border-2 border-black-500"
            type="text"
            placeholder="location"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </label>

        <button   className="w-20 bg-blue-600 text-1xl rounded-xl"
 onClick={searchServices}>search</button>
      </form>



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
 
 
 

      <BusinessCard />

    </div>
  );
};

export default Services;

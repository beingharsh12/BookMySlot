import React from "react";
import { useState } from "react";
import BusinessCard from "../../components/users/BusinessCard";

const Services = () => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  function searchServices(event) {
    event.preventDefault();
    console.log(location + service);
  }

  return (
    <>
      {/* heading and description  */}

      <div className="flex flex-col gap-5 mb-5">
        <h1 className="text-3xl font-bold ">Explore Services</h1>
        <p>Find and book services at trusted local businessses </p>
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

        <button
          className="w-20 bg-blue-600 text-1xl rounded-xl"
          onClick={searchServices}
        >
          search
        </button>
      </form>

      {/* card render  */}

      <div className="flex flex-col ">

    <BusinessCard/> 

      </div>
    </>
  );
};

export default Services;

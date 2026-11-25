import React from "react";
import BusinessCard from "../../components/users/BusinessCard";
import photo from "../../assets/barber.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServiceBookingPage = () => {
  const [duration, setDuration] = useState(0);
  const [servicesCount, setServiceCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const arrOfServices = [
    { id: 1, name: "Haircut", estimatedDuration: 30, price: 300 },
    { id: 2, name: "Hair Color", estimatedDuration: 35, price: 600 },
    { id: 3, name: "Beard Trim", estimatedDuration: 15, price: 150 },
    { id: 4, name: "Hair Spa", estimatedDuration: 45, price: 800 },
    { id: 5, name: "Facial", estimatedDuration: 40, price: 700 },
  ];

  function checkboxChange(currDuration, currAmount) {
    setDuration(duration + currDuration);
    setServiceCount(servicesCount + 1);
    setAmount(amount + currAmount);
  }

  return (
    <>
      <Link to="/users/services"> Style Studio </Link>

      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* business bard and  services select */}

        <div>
          {/* business info card  */}
          <div className="flex flex-col lg:flex-row  gap-4 bg-white p-4   rounded-2xl   ">
            <div className="h-50 w-full rounded-2xl overflow-hidden lg:w-50          ">
              <img src={photo} className="w-full h-full object-cover" alt="" />
            </div>

            <div className="flex flex-col  ">
              <h1 className="font-bold ">Style Studio</h1>

              <h3>Civil Lines Meerut</h3>

              <h2>Business Hours : 9:00 AM -5 PM </h2>
            </div>
          </div>

          {/* select service  */}

          <h1 className="text-2xl font-bold mt-2 mb-2">Select Service: </h1>

          <div className="bg-white rounded-2xl flex flex-col gap-2 p-2">
            {arrOfServices.map((service) => (
              <div className="p-5  bg-amber-100 rounded-2xl">
                <label key={service.id}>
                  <input
                    className="bg-red-400"
                    type="checkbox"
                    onChange={(e) => {
                      checkboxChange(service.estimatedDuration, service.price);
                    }}
                  />

                  <div className="flex justify-between">
                    <div>{service.name} </div>

                    <div>{service.estimatedDuration} </div>

                    <div>{service.price}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* summary  */}

        <div className="w-full lg:w-[350px] bg-white w-[350px] p-5 rounded-2xl self-start flex  flex-col">
          <h1 className="text-2xl font-bold">Booking Summary </h1>

          <div className="flex justify-between">
            <div>Total Time :</div>
            <div>{duration}</div>
          </div>

          <div className="flex justify-between">
            <div>Total services :</div>
            <div>{servicesCount}</div>
          </div>

          <div className="flex justify-between">
            <div>Total Amount</div>
            <div>{amount}</div>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              BookNow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBookingPage;

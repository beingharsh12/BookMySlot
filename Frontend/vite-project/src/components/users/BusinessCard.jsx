import React from "react";
import photo from "../../assets/barber.png";

const BusinessCard = () => {
  return (
    <>
      <div className="flex gap-4 bg-white p-4 h-[170px] rounded-2xl w-[800px] jus  ">
        <div className="h-50 w-50 rounded-2xl">
          <img src={photo} className=" rounded-2xl" alt="" />
        </div>

        <div className="flex flex-col  ">
          <h1 className="font-bold ">Style Studio</h1>

          <h3>Civil Lines Meerut</h3>

          <div className="flex gap-2.5 m-top">
            {["Haircut", "Hair Color", "Beard Trim"].map((services) => 
              (<button
                key={services}
                type="buttton"
                className="rounded-full bg-[#ede7fb] px-3 py-1.5 text-sm font-semibold text-[#30205f]"
              >
                {services}
              </button>)
            )}
          </div>
        </div>

        <div className="rounded-xl bg-[#ede7fb] flex flex-col justify-center items-center p-5">
          <p> Next Available </p>
          <p> 1:00 pm </p>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;

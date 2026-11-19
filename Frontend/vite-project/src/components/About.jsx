import React from "react";
import girlPhoto from "../assets/about-girl-image.png";
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div className="flex p-15 justify-between">
        <div className="left-div flex flex-col gap-5" >
          <div className="flex flex-col gap-5">
<h1 class="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
  Making Appointments <br /> Simple, Quick and <span class="text-violet-700">Queue-Free</span>
</h1>
            <p className="w-150"> 
                BookMySlot is a smart appointment and slot-booking platform that connects customers with local service businesses like salons, clinics, car washes and more — helping you book, manage and track appointments in real time.
            </p>
          </div>



          <div className="two-buttons flex gap-4">
            <Link to="/users/services" className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold
         text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200
         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">
              Book a Service
            </Link>

            <Link to="/business/register" className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold
         text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200
         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">
              Register Your Business
            </Link>
          </div>



        </div>

        <div className="right-div" >
          <img src={girlPhoto} className="h-100 w-150 " alt="girl-img" />
        </div>
      </div>
    </>
  );
};

export default About;

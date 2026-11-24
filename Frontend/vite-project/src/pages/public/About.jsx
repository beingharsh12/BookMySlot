
import React from "react";
import girlPhoto from "../../assets/about-page-image.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14 px-6 py-12 sm:px-10 lg:px-16 h-screen w-full">

      {/* Left Content */}
      <div className="flex w-full flex-col gap-6 md:w-1/2">

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Making Appointments
            <br />
            Simple, Quick and{" "}
            <span className="text-violet-700">
              Queue-Free
            </span>
          </h1>

          <p className="max-w-xl text-base leading-7 text-gray-700">
            BookMySlot is a smart appointment and slot-booking platform
            that connects customers with local service businesses like
            salons, clinics, car washes and more — helping you book,
            manage and track appointments in real time.
          </p>
        </div>

        {/* CTA Links */}
        <div className="flex flex-wrap gap-4">

          <Link
            to="/users/services"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
          >
            Book a Service
          </Link>

          <Link
            to="/business/register"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
          >
            Register Your Business
          </Link>

        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2">
        <img
          src={girlPhoto}
          alt=""
          className="mx-auto block h-auto w-full max-w-xl object-contain"
        />
      </div>

    </section>
  );
};

export default About;

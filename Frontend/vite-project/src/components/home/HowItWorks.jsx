
import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Discover a Service",
    description:
      "Explore nearby salons, clinics, barber shops, car washes and more. Find the service that fits your needs.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Choose Your Slot",
    description:
      "Check available appointments and choose a time slot that works perfectly with your schedule.",
    icon: "📅",
  },
  {
    number: "03",
    title: "Confirm Your Booking",
    description:
      "Review your selected service and appointment details, then confirm your booking in just a few clicks.",
    icon: "✓",
  },
  {
    number: "04",
    title: "Arrive & Enjoy",
    description:
      "Visit the business at your scheduled time and enjoy your service without unnecessary waiting.",
    icon: "⏱",
  },
];

const HowItWorks = () => {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              SIMPLE • FAST • CONVENIENT
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              How BookMySlot
              <br />
              <span className="text-violet-700">Works</span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Booking your favorite local service has never been easier.
              Discover businesses, choose your preferred time, and book
              your appointment without the hassle of waiting in queues.
            </p>

            <Link
              to="/users/services"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-violet-700 px-6 py-3 font-semibold text-white transition hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-700"
            >
              Explore Services
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>

          {/* Right sectionnn */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl bg-violet-50 p-8 sm:min-h-[400px]">
            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full bg-violet-200/60 blur-3xl"
            />

            <div className="relative w-full max-w-sm rounded-2xl border border-white bg-white p-6 shadow-xl shadow-violet-100">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Your appointment
                  </p>
                  <h2 className="text-xl font-bold text-slate-900">
                    Booking made easy
                  </h2>
                </div>

                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl"
                >
                  📅
                </div>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-lg">
                      <span aria-hidden="true">{step.icon}</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-800">
                        {step.title}
                      </p>

                      <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-violet-600"
                          style={{ width: `${(index + 1) * 25}%` }}
                        />
                      </div>
                    </div>

                    <span className="text-xs font-medium text-violet-600">
                      {step.number}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-violet-50 p-4">
                <p className="text-center text-sm font-medium text-violet-700">
                  Your time matters. Make every visit count.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skip wait section  */}
      <section
        aria-labelledby="steps-heading"
        className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold text-violet-700">
              FOUR SIMPLE STEPS
            </p>

            <h2
              id="steps-heading"
              className="text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Your next appointment,
              <br className="hidden sm:block" /> made simple
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              From finding the right service to showing up on time,
              BookMySlot makes the entire process simple and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl font-bold text-violet-200">
                    {step.number}
                  </span>

                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-2xl transition group-hover:bg-violet-100"
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skip wait section  */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-violet-700 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to skip the wait?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-violet-100">
            Find the service you need, choose your time, and make
            your next visit stress-free.
          </p>

          <Link
            to="/users/services"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-violet-700 transition hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Find a Service
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;

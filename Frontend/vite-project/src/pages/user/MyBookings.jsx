
import React from "react";

const bookings = [
  {
    id: 1,
    service: "Haircut & Styling",
    business: "Style Studio",
    date: "28 Nov 2026",
    time: "10:30 AM",
    location: "Sector 18, Noida",
    price: 299,
    status: "Confirmed",
  },
  {
    id: 2,
    service: "Dental Checkup",
    business: "Smile Care Clinic",
    date: "30 Nov 2026",
    time: "12:00 PM",
    location: "Sector 62, Noida",
    price: 500,
    status: "Pending",
  },
];

const MyBookings = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-5 py-12 sm:px-10 lg:px-20">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            My Bookings
          </h1>
          <p className="mt-2 text-slate-500">
            Here are all the services you have booked.
          </p>
        </div>

        {/* Booking Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              {/* Card Header */}
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {booking.service}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {booking.business}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              {/* Booking Details */}
              <div className="space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">

                <p>
                  <span className="font-semibold text-slate-800">Date:</span>{" "}
                  {booking.date}
                </p>

                <p>
                  <span className="font-semibold text-slate-800">Time:</span>{" "}
                  {booking.time}
                </p>

                <p>
                  <span className="font-semibold text-slate-800">Location:</span>{" "}
                  {booking.location}
                </p>

              </div>

              {/* Card Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs text-slate-400">Total Amount</p>
                  <p className="text-xl font-bold text-indigo-600">
                    ₹{booking.price}
                  </p>
                </div>

                <button className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                  Cancel Booking
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center">
            <h2 className="text-xl font-semibold text-slate-800">
              No bookings yet!
            </h2>
            <p className="mt-2 text-slate-500">
              Your booked services will appear here.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default MyBookings;

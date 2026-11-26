
import React from "react";
import { Heart, MapPin, Star, ArrowRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const favorites = [
  {
    id: 1,
    name: "Style Studio",
    category: "Salon & Grooming",
    location: "Sector 18, Noida",
    rating: 4.8,
    price: "₹299 onwards",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600",
  },
  {
    id: 2,
    name: "Smile Care Clinic",
    category: "Healthcare",
    location: "Sector 62, Noida",
    rating: 4.7,
    price: "₹500 onwards",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
  },
  {
    id: 3,
    name: "The Fitness Hub",
    category: "Fitness & Gym",
    location: "Sector 15, Noida",
    rating: 4.9,
    price: "₹199 onwards",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
  },
];

const Favorites = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-5 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <Heart className="fill-red-500 text-red-500" size={28} />
            <h1 className="text-3xl font-bold text-slate-900">
              My Favorites
            </h1>
          </div>

          <p className="mt-2 text-slate-500">
            Your favorite businesses, all in one place.
          </p>
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />

                  <button
                    aria-label={`Remove ${item.name} from favorites`}
                    className="absolute right-4 top-4 rounded-full bg-white p-2 text-red-500 shadow-md transition hover:bg-red-50"
                  >
                    <Heart size={19} className="fill-current" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-indigo-600">
                      {item.category}
                    </span>

                    <span className="flex items-center gap-1 text-sm font-semibold text-slate-700">
                      <Star size={15} className="fill-yellow-400 text-yellow-400" />
                      {item.rating}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {item.name}
                  </h2>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} />
                    {item.location}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-900">
                      {item.price}
                    </p>

                    <Link
                      to={`/users/services/${item.id}`}
                      className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                      View <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center">
            <Heart size={45} className="mx-auto mb-4 text-slate-300" />
            <h2 className="text-xl font-bold text-slate-800">
              No Favorites Yet
            </h2>
            <p className="mt-2 text-slate-500">
              Save your favorite businesses to find them easily later.
            </p>
            <Link
              to="/users/services"
              className="mt-5 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Explore Services
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default Favorites;

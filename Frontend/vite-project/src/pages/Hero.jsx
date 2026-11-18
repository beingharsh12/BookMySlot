import React from 'react'
import { useState } from 'react'

const Hero = () => {
    
const [location, setLocation] = useState('')

 const handleSearch = (e) => {
       e.preventDefault()
       console.log('Searching for services in:', location)
 }

  return (
    <section className="flex min-h-[100vh] flex-col items-center justify-center px-4 text-center bg-gray-100 w-full">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">Book your slot. Skip the wait.</h1>
      <p className="mt-3 max-w-xl text-gray-600">
        Find salons, clinics and local services near you.
      </p>

      <form onSubmit={handleSearch} role="search" className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
        <label htmlFor="location" className="sr-only">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
          autoComplete="off"
          className="w-full flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          Search
        </button>
      </form>
    </section>
  )
}

export default Hero
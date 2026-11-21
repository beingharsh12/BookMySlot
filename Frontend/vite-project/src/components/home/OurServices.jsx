import React from 'react'
import ServicesCard from './ServicesCard'

const OurServices = () => {
  return (
   <div className="w-full p-4 flex flex-col items-center justify-center gap-4 md:p-8">
    <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
    <ServicesCard />
   </div>
    
  )
}

export default OurServices
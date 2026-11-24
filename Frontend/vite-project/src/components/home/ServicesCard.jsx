import React from 'react'

const services = [
  { id: 1, title: 'Barber', description: 'Haircuts, shaves and beard trims.', image: 'https://placehold.co/600x400/e0e7ff/4338ca?text=Barber', href: '/services/barber' },
  { id: 2, title: 'Salon', description: 'Hair, skin and beauty services.', image: 'https://placehold.co/600x400/fce7f3/be185d?text=Salon', href: '/services/salon' },
  { id: 3, title: 'Clinic', description: 'Consult doctors and book slots.', image: 'https://placehold.co/600x400/dcfce7/15803d?text=Clinic', href: '/services/clinic' },
  { id: 4, title: 'Car Wash', description: 'Wash, polish and detailing.', image: 'https://placehold.co/600x400/e0f2fe/0369a1?text=Car+Wash', href: '/services/car-wash' },
  { id: 5, title: 'Dentist', description: 'Check-ups and dental care.', image: 'https://placehold.co/600x400/fef9c3/a16207?text=Dentist', href: '/services/dentist' },
  { id: 6, title: 'Spa', description: 'Massage and relaxation.', image: 'https://placehold.co/600x400/ffedd5/c2410c?text=Spa', href: '/services/spa' },
]

const ServicesCard = () => {
    return (
        <article className="flex justify-center overflow-hidden rounded-xl bg-white flex flex-wrap shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-600">
            {services.map((service) => (
                <div key={service.id} className="p-4 sm:p-6">
                <a key={service.id} href={service.href}>
                    <img
                        alt={service.title}
                        src={service.image}
                        className="h-56 w-full object-cover"
                    />
                </a>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                </div>
            ))}
        </article>
    )
}

export default ServicesCard
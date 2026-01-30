import React from 'react';
import services from '../../../public/services.json';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
const ServicesSection = async () => {
    // const res = await fetch('/public/services.json')
    // const data = await res.json()

    console.log(services);
    return (
        <div className='max-w-7xl mx-auto'>

            <div className='grid grid-cols-3 gap-4'>
                {
                    services.map(service => (
                        <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="w-full h-3/4 flex justify-center items-center px-6 pt-6">
                                <Image width={314} height={208} src={service.img} alt={service.title} className="w-full h-full object-cover rounded-xl" />
                            </figure>
                            <div className="p-6 flex items-center justify-between">
                                <div className='space-y-2'>
                                    <h2 className="card-title font-bold text-2xl">{service.title}</h2>
                                    <p className='text-primary text-xl font-semibold'>Price: ${service.price}</p>
                                </div>
                                <div className="card-actions">
                                    <button className=" text-primary"><FaArrowRight  className='text-xl'/></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ServicesSection;
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const ServiceDetailsPage = async ({ params }) => {
    const { id } = await params;
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
    const service = await servicesCollection.findOne({ _id: new ObjectId(id) });
    return (
        <div className='max-w-7xl mx-auto'>
            <section className='flex justify-center '>
                <figure className='relative'>
                    <Image src={'/assets/images/checkout/checkout.png'} width={1280} height={300} alt="Service Details" />
                    <div className='overlay-bg absolute w-full h-full top-0 '>
                        <div className='w-full h-full font-bold flex items-center'>
                            <div>
                                <h1 className=' ps-16 text-4xl text-white '>Service Details</h1>
                            </div>
                        </div>
                        <div
                            className="bg-primary px-7 py-3 absolute bottom-0 left-1/2 translate-x-[-50%]"
                            style={{
                                clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0 100%)",
                            }}
                        >
                            <p className='text-white '>Home / Services / {service.title}</p>
                        </div>
                    </div>
                </figure>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">

                {/* LEFT CONTENT (2 columns wide) */}
                <div className="lg:col-span-2 space-y-10">

                    {/* Service image + description */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <Image
                            src={service.img}
                            alt={service.title}
                            width={800}
                            height={400}
                            className="rounded-lg mb-6"
                        />

                        <h2 className="text-3xl font-bold mb-3">
                            {service.title}
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    {/* Facilities grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.facility?.map((facility, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 border-t-4 border-t-primary rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-semibold mb-2">
                                    {facility.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {facility.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <aside className="space-y-6">

                    {/* Price box */}
                    <div className="bg-black text-white rounded-xl p-6 text-center">
                        <p className="text-lg mb-2">Price</p>
                        <h3 className="text-3xl font-bold mb-4">
                            ${service.price}
                        </h3>
                        <button className="btn btn-primary w-full">
                            Proceed Checkout
                        </button>
                    </div>

                    {/* Promo card */}
                    <div className="bg-neutral text-white rounded-xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Car Doctor Special</h3>
                        <p className="mb-4 text-sm">Save up to 60% off</p>
                        <button className="btn btn-primary">
                            Get A Quote
                        </button>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default ServiceDetailsPage;
import React from 'react';

export default function AboutSection() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a897f] mb-6">About D32 The Dental Centre</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        D32 The Dental Centre is a <strong>premier dental clinic</strong> specializing in <strong>Orthodontics, Dentofacial Orthopedics, and Implantology</strong>.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
                        Led by <strong>Dr. Gurkeerat Singh</strong> with <strong>28 years of experience</strong>, the clinic treats patients with advanced orthodontic and implant needs. We are dedicated to creating balanced, beautiful, and functional smiles through valid scientific approaches.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a897f] mb-4">Key Specializations</h3>
                        <ul className="space-y-3">
                            {[
                                "Orthodontics & Dentofacial Orthopedics",
                                "Dental Implants",
                                "Invisible Aligners (Invisalign)",
                                "Smile Designing",
                                "Jaw Alignment Correction",
                                "General Dentistry"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[#1a897f] text-xl">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a897f] mb-4">Dr. Gurkeerat Singh</h3>
                        <ul className="space-y-3">
                            {[
                                "BDS, MDS - MCODS Mangalore",
                                "M.Orth (RCS London & RCPS Glasgow)",
                                "Diplomate, Indian Board of Orthodontics",
                                "28 Years Experience"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[#1a897f] text-xl">👨‍⚕️</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

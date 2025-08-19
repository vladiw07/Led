import Button from '../ui/Button';
import React, { useEffect, useState } from 'react';

function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const phrases = ['Payroll', 'HRIS', 'Compliance', 'Taxes', 'Invoices', 'Hiring', 'Onboarding'];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 97%, 88% 100%, 50% 97%, 10% 100%, 0% 97%)',
          }} 
          className="w-full bg-[#a9d6fe] pt-10 sm:pt-16 md:pt-12 lg:pt-44 pb-[260px]"
        > 
            <div className="max-w-[86.5rem] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-10 mt-32">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        <div 
                          style={{
                            transform: 'rotate(0.8deg)',
                            display: 'inline-block',
                            zIndex: 1,
                          }}
                        >
                          <span
                            key={textIndex}
                            className="inline-block animate-slideDown relative bg-white py-1 px-2"
                          >
                            {phrases[textIndex]}
                          </span>
                        </div>
                        <br />
                        for global teams
                    </h1>
                    <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                        Led helps tens of thousands of companies expand globally with unmatched speed, 
                        flexibility, and compliance. Get our all-in-one Global People Platform that simplifies 
                        the way you onboard, offboard, and everything else in between.
                    </p>
                    <div className="flex justify-center gap-3 lg:justify-start">
                        <Button label={'Get a demo'} />
                        <button className="px-6 py-3 bg-transparent text-black rounded-3xl font-semibold border border-2 border-[#93adc7] hover:border-gray-500 transition">
                            Speak to sales
                        </button>
                    </div>
                </div>

                {/* Right Content - Decorative Stats instead of video */}
                <div className="flex-1 w-full flex justify-center">
                    <div className="rounded-2xl bg-white shadow-lg p-8 max-w-sm w-full text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by teams worldwide 🌍</h3>
                        <p className="text-gray-700 mb-6">
                          Over <span className="font-semibold">20,000+</span> businesses use Led to manage payroll, 
                          compliance, and HR with confidence.
                        </p>
                        <div className="grid grid-cols-2 gap-6 text-gray-800">
                          <div>
                            <p className="text-3xl font-extrabold">120+</p>
                            <p className="text-sm">Countries</p>
                          </div>
                          <div>
                            <p className="text-3xl font-extrabold">500k+</p>
                            <p className="text-sm">Active Users</p>
                          </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;

import React from 'react';

const DeelImpact = () => {
  return (
    <section className="py-20 bg-[#FFFBF4] flex justify-center items-center">
      <div className="max-w-[86.5rem] text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B] mb-10">
          Choose Deel for an industry-leading experience
        </h2>

        {/* Impact Stats */}
        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-20">
          {/* First Section */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/deelImpact1.png`}
              alt="500K workers"
              className="w-32 h-32 object-cover"
            />
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold text-[#1B1B1B] tracking-[-1px]">500K</div>
              <p className="text-xl font-semibold text-[#1B1B1B]">Workers Onboarded Globally</p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/deelImpact2.png`}
              alt="35K businesses"
              className="w-32 h-32 object-cover"
            />
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold text-[#1B1B1B] tracking-[-1px]">35K</div>
              <p className="text-xl font-semibold text-[#1B1B1B]">Global Businesses Supported</p>
            </div>
          </div>

          {/* Third Section */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/deelImpact3.png`}
              alt="10B payroll"
              className="w-42 h-24 object-cover" 
            />
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold text-[#1B1B1B] tracking-[-1px]">$10B</div>
              <p className="text-xl font-semibold text-[#1B1B1B]">Compliantly Processed Global Payroll</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeelImpact;

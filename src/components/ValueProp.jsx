import Button from '../ui/Button';
import React from 'react';

function ValueProp() {
  return (
    <div className="bg-[#FFFBF4] py-20 md:py-28 lg:py-40 xl:py-56 mt-[-40px]">
      <div className="max-w-[86.5rem] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content - Text and CTA */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-xl md:text-xl font-bold text-gray-700 mb-6">
            Global People Platform
          </h2>
          <h3 className="text-4xl md:text-4xl font-bold text-black mb-6">
            Scale globally with <br /> velocity and ease
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto lg:mx-0">
            Led is built to scale with organizations of all sizes, from small teams to enterprises of thousands. 
            Whether you want to hire worldwide without opening legal entities, streamline HR for your global team, 
            or pay all types of workers anywhere with consolidated payroll — Led does it all with full compliance.
          </p>
          <Button label="Get started" />
        </div>

        {/* Right Content - image */}
        <div>
          <img 
            src={`${process.env.PUBLIC_URL}/images/globalPlatform.png`}
            alt="Global Platform 1" 
            className="w-[650px] h-[auto] object-cover" 
          />
        </div>

      </div>
    </div>
  );
}

export default ValueProp;

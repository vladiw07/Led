import React from 'react';
import TwistedDivider from '../ui/TwistedDivider.jsx';

function Footer() {
  return (
    <>
    <TwistedDivider bgColor="#fef4e3" />
      <section className="bg-[#1b1b1b] text-white pt-0">
        <div className="max-w-[1370px] mx-auto px-6 py-12 text-center flex flex-row gap-6">
        <img 
            src={`${process.env.PUBLIC_URL}/images/footerImage.png`}
            alt="Getting Started Illustration" 
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className='flex flex-col text-start items-start'>
            <h2 className=" text-3xl md:text-4xl font-semibold mb-4">
                See what our clients are saying
            </h2>
            <button className="text-lg text-white underline">
                4.8/5 based on 7,531+ reviews
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

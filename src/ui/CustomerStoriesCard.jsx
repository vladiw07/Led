import React from 'react';

function CustomerStoriesCard({ number, description, longDescription, image }) {
  return (
    <div className="flex justify-center items-center py-12 px-4">
      {/* Card Container */}
      <div className="max-w-[1140px] w-full">
        {/* Flex container for image and text */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image container (taking more than half width) */}
          <div className="w-full lg:w-[60%] relative z-0" style={{ minHeight: '500px' }}>
            <img 
              src={image} 
              alt="Customer Story"
              className="w-full h-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg" 
            />
          </div>

          {/* Text Box (with negative margin to create overlap) */}
          <div className="w-full lg:w-[45%] bg-white rounded-b-lg lg:rounded-lg shadow-lg z-10 px-6 py-6 lg:px-10 lg:py-2 lg:pb-10 lg:-ml-[10%]">
            {/* Number */}
            <h3 className="text-6xl lg:text-[105px] font-bold text-[#000000de] overflow-hidden">{number}</h3>

            {/* Short Description */}
            <p className="text-lg font-semibold text-black mb-6">{description}</p>

            {/* Long Description */}
            <p className="text-lg text-[#1b1b1bbf] mb-6">{longDescription}</p>

            {/* Read Customer Story Button */}
            <button className="text-[#333333] border-black mt-4 hover:text-black">
              Read Customer Story ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStoriesCard;
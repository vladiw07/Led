import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: "We're an ex-Remote client. I usually don't write reviews but tbh I couldn't hold back. A lot to say, but the expectations vs. reality for Remote.com is a sad/massive gap.",
    author: 'Jadd Baya',
  },
  {
    text: "The best payroll solution, period. We've used every payroll solution out there - Gusto, Rippling, you name it - and Deel is the only one that is simple, easy to use, and global. We've used it for 4 years and haven't looked back.",
    author: 'Jeremy C.',
  },
  {
    text: "Deel makes it easy to send payments to international teams. I've been using Deel for more than 3 years now and would never switch! It's a great product.",
    author: 'Katie R.',
  },
  {
    text: "I found Deel to be an absolute game-changer. The intuitive platform took the daunting task of understanding international payroll and distilled it into a user-friendly interface that a novice like me could navigate with confidence.",
    author: 'Thomas L.',
  },
  {
    text: "In two years with Deel, I have not encountered a single issue, and the customer service has been exceptional. The proactive assistance has truly elevated my experience and I couldn't be more satisfied with the overall service.",
    author: 'John David Q.',
  },
];

const bgColors = ['#FFE27C', '#C7E2FE', '#C4B1F9', '#FFE27C', '#C7E2FE'];

function GlobalTrust() {
  const containerRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(false);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  

  // Function to handle scrolling
  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
  
    // Adjust scroll amount based on screen width
    const screenWidth = window.innerWidth;
    const scrollAmount = screenWidth < 768 ? 330 : 570; // Half on small screens
  
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };
  

  // Check the scroll position on each render to adjust button color
  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (container) {
      setIsLeftDisabled(container.scrollLeft === 0);
      setIsRightDisabled(
        container.scrollLeft + container.clientWidth === container.scrollWidth
      );
    }
  };

  // Run checkScrollPosition on scroll events
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  // Also check scroll position on window resize
  useEffect(() => {
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return (
    <section className="py-20 bg-[#FFFBF4]">
      <div className="mx-auto">
        {/* Header and Buttons */}
        <div className='max-w-[86.5rem] mx-auto'>
          <div className="flex items-start justify-between mb-10 flex-col lg:flex-row gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center xl:text-start lg:text-start md:text-start font-bold text-gray-900 max-w-4xl">

              Why companies around the world prefer <br /> Deel for expanding their team globally.
            </h2>
            <div className="hidden lg:flex md:flex gap-3 mt-4 lg:mt-0 order-2 lg:order-none self-center">
              <button
                onClick={() => scroll('left')}
                className={`bg-black text-white w-12 h-12 shadow-sm rounded-full p-2 ${
                  isLeftDisabled ? 'opacity-10' : 'hover:opacity-60'
                }`}
                disabled={isLeftDisabled}
              >
                <ArrowLeft size={20} className="m-auto" />
              </button>
              <button
                onClick={() => scroll('right')}
                className={`bg-black text-white w-12 h-12 shadow-sm rounded-full p-2 ${
                  isRightDisabled ? 'opacity-10' : 'hover:opacity-60'
                }`}
                disabled={isRightDisabled}
              >
                <ArrowRight size={20} className="m-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div>
          <div
            ref={containerRef}
            className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth pl-4 pr-4 sm:pl-16 sm:pr-16 md:pl-32 md:pr-32 lg:pl-[250px] lg:pr-[250px]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[90%] sm:min-w-[500px] md:min-w-[530px] relative p-6 rounded-2xl shadow-md"
                style={{ backgroundColor: bgColors[index] }}
              >
                <p className="text-gray-800 text-2xl text-md mb-12">"{testimonial.text}"</p>
                <p className="absolute bottom-6 left-6 font-semibold text-gray-900">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile buttons */}
        <div className="flex justify-center gap-3 mt-8 lg:hidden md:hidden">
          <button
            onClick={() => scroll('left')}
            className={`bg-black text-white w-12 h-12 shadow-sm rounded-full p-2 ${
              isLeftDisabled ? 'opacity-10' : 'hover:opacity-60'
            }`}
            disabled={isLeftDisabled}
          >
            <ArrowLeft size={20} className="m-auto" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`bg-black text-white w-12 h-12 shadow-sm rounded-full p-2 ${
              isRightDisabled ? 'opacity-10' : 'hover:opacity-60'
            }`}
            disabled={isRightDisabled}
          >
            <ArrowRight size={20} className="m-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GlobalTrust;
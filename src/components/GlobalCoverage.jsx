import React from 'react'
import Button from '../ui/Button'

function GlobalCoverage() {
  return (
    <div className="relative bg-[#ffeba6] min-h-[980px] py-20 px-4 overflow-hidden">
      {/* Decorative Background Image at bottom */}
      <img
  src={`${process.env.PUBLIC_URL}/images/globalCoverageImage.png`}
  alt="Global Coverage"
  className="absolute bottom-0 right-0 min-w-[1200px] h-auto z-0  pointer-events-none"
/>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[400px]">
        
        <div className="flex-1 text-center lg:text-left md:text-left">
          <h2 className="text-sm md:text-base font-bold mb-6 uppercase text-[#333]">
            Global Coverage
          </h2>

          <p className="text-4xl sm:text-5xl font-bold mb-8 leading-tight text-[#1b1b1b]">
            There’s a whole world out <br /> there. Why not hire anywhere?
          </p>

          <p className="text-base sm:text-lg mb-6 text-[#333] max-w-xl">
            150+ entities. 200+ local legal experts. Global from day one. Tap into the most extensive coverage on the market, and start hiring, onboarding, and paying anywhere.
          </p>

          <Button label="Get Started" />
        </div>
      </div>
    </div>
  )
}

export default GlobalCoverage

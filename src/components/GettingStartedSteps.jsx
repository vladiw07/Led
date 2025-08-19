import Button from '../ui/Button';
import React from 'react';

function GettingStartedSteps() {
  return (
    <div className="bg-[#fef4e3] py-10 px-4 flex flex-col items-center">
      {/* Section Header */}
      <h2 className="text-[60px] font-semibold text-center mb-16 text-[#1b1b1b] leading-tight">
  Get started with Led <span className="block">in three easy steps</span>
</h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full gap-12">
        {/* Steps (Text) */}
        <div className="flex-1 space-y-4">
          {/* Step 1 */}
<div>
  <h3 className="text-xl font-bold text-[#1b1b1b] mb-2 flex items-center gap-3">
    <span className="bg-blue-300 w-8 h-8 text-black rounded-full flex items-center justify-center font-bold">
      1
    </span>
    Book a call
  </h3>
  <p className="text-[#333] border-l-[1.5px] border-[#c6bab3] pl-6 ml-4">
    Book a call with our global workforce consultants. We’ll set you up with a free account
    ready to suit your team’s needs.
  </p>
</div>

{/* Step 2 */}
<div>
  <h3 className="text-xl font-bold text-[#1b1b1b] mb-2 flex items-center gap-3">
    <span className="bg-blue-300 w-8 h-8 text-black rounded-full flex items-center justify-center font-bold">
      2
    </span>
    Add your people
  </h3>
  <p className="text-[#333] border-l-[1.5px] border-[#c6bab3] pl-6 ml-4">
    From new hires to your existing workforce, onboard effortlessly with our self-serve platform.
  </p>
</div>

{/* Step 3 */}
<div>
  <h3 className="text-xl font-bold text-[#1b1b1b] mb-2 flex items-center gap-3">
    <span className="bg-blue-300 w-8 h-8 text-black rounded-full flex items-center justify-center font-bold">
      3
    </span>
    Dedicated onboarding
  </h3>
  <div className="text-[#333] border-l-[1.5px] border-[#c6bab3] pl-6 ml-4 flex flex-col gap-4">
  <p>
    From navigating local laws to support for your team members, our dedicated team will help
    you get set up seamlessly.
  </p>

  <div className="w-fit">
    <Button label={"Get started"} />
  </div>
</div>
</div>
        </div>

        {/* Image on the Right */}
        <div className="flex-1">
          <img 
            src={`${process.env.PUBLIC_URL}/images/GettingStartedStepsImage.png`}
            alt="Getting Started Illustration" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default GettingStartedSteps;

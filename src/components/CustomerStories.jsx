import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomerStoriesCard from '../ui/CustomerStoriesCard';

function CustomerStories() {
  const [selected, setSelected] = useState('globalHiring'); // Track selected section

  // Sections list for easy management
  const sections = [
    { id: 'globalHiring', label: 'Global Hiring' },
    { id: 'globalPayroll', label: 'Global Payroll' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'employeeRelocation', label: 'Employee Relocation' },
    { id: 'mergersAcquisitions', label: 'Mergers/Acquisitions' },
  ];

  // Content data for each section
  const contentData = {
    globalHiring: {
      number: "5,000+",
      description: "contracts created",
      longDescription: "Turing has around 400 developers working for customers and 150 developers working to build Turing. They were able to migrate everyone to Led in days. Now they use Led to manage, pay, and onboard every developer, in over 60 different countries.",
      image: `${process.env.PUBLIC_URL}/images/CustomerStories/image1.jpg`
    },
    globalPayroll: {
      number: "300+",
      description: "hours saved monthly",
      longDescription: "Since using Led's Global Payroll, Change.org has saved more than 300 hours on admin each month. They've also taken advantage of all the services Led offers, including using EOR to retain employees needing visa sponsorship.",
      image: `${process.env.PUBLIC_URL}/images/CustomerStories/image2.jpg`
    },
    compliance: {
      number: "500k",
      description: "saved yearly through Led",
      longDescription: "With Led Shield, Project44 has been able to create a much smoother process and give team members a better overall experience with one platform for everyone. All invoices get created automatically and paid at once, leaving less room for errors and delays.",
      image: `${process.env.PUBLIC_URL}/images/CustomerStories/image3.jpg`
    },
    employeeRelocation: {
      number: "10+",
      description: "workers relocated",
      longDescription: "Entering new markets and expanding globally is critical to Revolut's mission and something that sets them apart. They identified Led as a partner that could help them find the right people for their new markets.",
      image: `${process.env.PUBLIC_URL}/images/CustomerStories/image4.jpg`
    },
    mergersAcquisitions: {
      number: "48+",
      description: "Team members onboarded",
      longDescription: "Led's ease of use, simplicity, and efficiency helped EEG completely overhaul their onboarding experience. Instead of taking months to set up entities, find local payroll providers and local labour specialists, Led turns the logistical nightmare of mergers and acquisitions into a dream come true.",
      image: `${process.env.PUBLIC_URL}/images/CustomerStories/image5.jpg`
    }
  };

  return (
    <div className="bg-[#fef4e3] py-20 px-4 flex flex-col justify-center items-center">
      <h2 className="text-sm md:text-base font-semibold mb-6 uppercase text-[#333] select-none">
        Customer Stories
      </h2>

      <p className="text-4xl sm:text-5xl font-bold mb-8 leading-tight text-[#1b1b1b] text-center select-none">
        We've helped 35,000+ companies <br className="hidden sm:block" /> grow and manage global teams
      </p>

      {/* Navigation Line with 5 Sections - Responsive Design */}
      <div className="w-full max-w-[790px] mb-8">
        {/* Desktop Navigation - Only show on larger screens */}
        <div
          className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4 border-2 rounded-full p-2 mx-auto"
          style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }}
        >
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => setSelected(section.id)}
              className="relative select-none px-3 md:px-4 py-2 rounded-full cursor-pointer font-semibold text-xs md:text-sm"
            >
              {selected === section.id && (
                <motion.div
                  layoutId="pill-desktop"
                  className="absolute inset-0 bg-[#1b1b1b] rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 700, 
                    damping: 35,
                    duration: 0.15
                  }}
                />
              )}
              <span
                className={`${
                  selected === section.id ? 'text-white' : 'text-[#525252] hover:text-black'
                } relative z-10`}
              >
                {section.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Navigation - Scrollable - Show on medium and small screens */}
        <div className="md:hidden w-full overflow-x-auto pb-2 no-scrollbar">
          <div
            className="flex flex-nowrap border-2 rounded-full p-2 min-w-max mx-auto"
            style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }}
          >
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setSelected(section.id)}
                className="relative select-none px-4 py-2 rounded-full cursor-pointer font-semibold text-xs whitespace-nowrap mx-1"
              >
                {selected === section.id && (
                  <motion.div
                    layoutId="pill-mobile"
                    className="absolute inset-0 bg-[#1b1b1b] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 700, 
                      damping: 35,
                      duration: 0.15
                    }}
                  />
                )}
                <span
                  className={`${
                    selected === section.id ? 'text-white' : 'text-[#525252] hover:text-black'
                  } relative z-10`}
                >
                  {section.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section with AnimatePresence for smooth transitions */}
      <div className="min-h[500px] w-full">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <CustomerStoriesCard
              number={contentData[selected].number}
              description={contentData[selected].description}
              longDescription={contentData[selected].longDescription}
              image={contentData[selected].image}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CustomerStories;

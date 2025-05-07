import React from 'react'
import TwistedDivider from '../ui/TwistedDivider'
import Button from '../ui/Button'

function GlobalComplianceHub() {
  return (
    <>
      {/* Twisted Divider Above the Section */}
      <TwistedDivider />

      {/* Content Section */}
      <section className="relative bg-[#1B1B1B] text-white py-20 px-4">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-sm md:text-base font-medium mb-6 uppercase text-[#faf4eebf]">
            Global Compliance
          </h2>
          <p className="text-4xl sm:text-5xl font-bold mb-10 leading-tight">
            Unlock Continuous <br className="hidden md:block" /> Compliance™ with the <br className="hidden md:block" /> Deel Compliance Hub
          </p>
          <p className="mt-4 mb-6 text-base sm:text-lg max-w-3xl mx-auto">
            Keep your finger on the pulse of global compliance issues like never before. Our Compliance Hub provides access to the latest regulatory updates and risk warnings, offering guidance and actionable alerts to enhance compliance—all in a single place.
          </p>

          <Button label="Get started" bgColor="white" textColor="black" />
        </div>

        {/* 3 images - responsive */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16 mt-20 text-center max-w-7xl mx-auto px-4 mb-52">
          <div className="flex-1 max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/images//deelCompliance/image1.png`}
              alt="Legal updates"
              className="mx-auto mb-6 w-full h-auto object-contain"
            />
            <p className="text-white text-xl sm:text-2xl font-semibold">Keep track of the latest legal updates</p>
          </div>

          <div className="flex-1 max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/images//deelCompliance/image1.png`}
              alt="Workforce insights"
              className="mx-auto mb-6 w-full h-auto object-contain"
            />
            <p className="text-white text-xl sm:text-2xl font-semibold">Get monthly workforce insights</p>
          </div>

          <div className="flex-1 max-w-sm">
            <img
              src={`${process.env.PUBLIC_URL}/images//deelCompliance/image2.png`}
              alt="Worker classification"
              className="mx-auto mb-6 w-full h-auto object-contain"
            />
            <p className="text-white text-xl sm:text-2xl font-semibold">Easily determine worker classification</p>
          </div>
        </div>


        {/* The Deel Advantage */}

        <div className="max-w-4xl mx-auto text-center px-4">
  <h2 className="text-sm md:text-base font-medium mb-6 uppercase text-[#faf4eebf]">
    The Deel Advantage
  </h2>

  <p className="text-3xl sm:text-5xl font-bold mb-10 leading-tight">
    Move faster with HR and payroll <br className="hidden md:block" /> for your team in one place
  </p>

  <p className="mt-4 mb-6 text-base sm:text-lg max-w-3xl mx-auto">
    Deel’s the only platform that allows you to combine payroll, HR, performance, and compliance for any type of worker in 150 countries into a single platform. Consolidate your tools, reduce overhead, and unlock unrivalled insights into your workforce data.
  </p>

  <Button label="Get started" bgColor="white" textColor="black" />
</div>

      </section>
    </>
  )
}

export default GlobalComplianceHub

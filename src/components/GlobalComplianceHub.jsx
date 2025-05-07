import React from 'react'
import TwistedDivider from '../ui/TwistedDivider'
import Button from '../ui/Button'

function GlobalComplianceHub() {
  return (
    <>
      {/* Twisted Divider Above the Section */}
      <TwistedDivider />

      {/* Content Section */}
      <section className="relative bg-[#1B1B1B] text-white py-20 px-4 -mt-[1px]">
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
<div className="max-w-7xl mx-auto px-4 py-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left text-white">
    {/* 1 - Powerful reporting */}
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/ComplianceIcons/image1.svg`} alt="Powerful reporting" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">Powerful reporting</h3>
      <p className="text-lg text-white/90">
        Unlock unrivalled insights into spending and performance with compensation, OKRs, equity and more for your team in one system.
      </p>
    </div>

    {/* 2 - Scalability */}
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/ComplianceIcons/image2.svg`} alt="Scalability" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">Scalability</h3>
      <p className="text-lg text-white/90">
        From contractors and EOR to payroll and PEO, Deel’s the only platform that can evolve with every stage of your company’s growth.
      </p>
    </div>

    {/* 3 - Dedicated support */}
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/ComplianceIcons/image3.svg`} alt="Dedicated support" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">Dedicated support</h3>
      <p className="text-lg text-white/90">
        We don’t rely on third parties, which means you’ll get a single dedicated POC to work alongside with and guaranteed 1.25 min FRT.
      </p>
    </div>

    {/* 4 - Trusted partner */}
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/ComplianceIcons/image4.svg`} alt="Trusted partner" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">Trusted partner</h3>
      <p className="text-lg text-white/90">
        Engage with one partner for your global growth. From M&As to entity set up, partner with our in-house team for all your expansion needs.
      </p>
    </div>

    {/* 5 - Seamless integration */}
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/ComplianceIcons/image5.svg`} alt="Seamless integration" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">Seamless integration</h3>
      <p className="text-lg text-white/90">
        Eliminate data silos and reduce manual work with 100+ integrations across your entire tech stack, from accounting to expenses.
      </p>
    </div>

    {/* 6 - Unrivalled security */}
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/ComplianceIcons/image6.svg`} alt="Unrivalled security" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold mb-2">Unrivalled security</h3>
      <p className="text-lg text-white/90">
        Connect your company in a single secure platform. Our platform is GDPR, SOC2, and ISO 27001 compliant.
      </p>
    </div>
  </div>
</div>


      </section>

      {/* Twisted Divider Below the Section */}
      <div className="rotate-180 overflow-hidden">
        <TwistedDivider bgColor='#ffeba6' />
      </div>
    </>
  )
}

export default GlobalComplianceHub;

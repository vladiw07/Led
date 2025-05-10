import React, { useState } from 'react';
import TwistedDivider from '../ui/TwistedDivider.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  { name: "Sunny Yu", text: "I like that it's easy to use and the customer support was awesome. They were prompt and helped me out." },
  { name: "Brunno Mark", text: "Deel has so many options to control everything related to financial management: contracts, invoices, transactions, multiple withdrawals..." },
  { name: "Verified User in Computer Software", text: "Deel is great for companies with remote workers worldwide. It helps with paying them, sorting out taxes, and sticking to work laws..." },
  { name: "Nathalia L.", text: "In the world of payments and finances, having responsive assistance is paramount, and this app truly delivers on that front." },
  { name: "Verified User in Telecommunications", text: "Deel has revolutionized the way I manage payroll. It's reliable, user-friendly, and cost-effective." },
  { name: "Verified User in Translation and Localization", text: "Deel has been an absolute game-changer for me! Their platform is incredibly user-friendly." },
  { name: "Viviana Hernandez", text: "The platform is incredibly intuitive, making it a breeze for me to navigate and get things done efficiently." },
  { name: "Joaquin Ancona", text: "Deel so far has been very easy to navigate through and everything is elegantly designed." },
  { name: "Angelie Martinez", text: "User friendly and very easy to use and the security is fabulous." }
];

function Footer() {
  

  return (
    <>
      <TwistedDivider bgColor="#fef4e3" />
      <section className="bg-[#1b1b1b] text-white -mt-[1px] pt-0">
        {/* Header with Reviews */}
        <div className="max-w-[1370px] mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center flex flex-col sm:flex-row gap-6 justify-between items-center sm:items-start">
          {/* Header Block */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left'>
            <img 
              src={`${process.env.PUBLIC_URL}/images/footerImage.png`}
              alt="Getting Started Illustration" 
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
            />
            <div className='flex flex-col items-center sm:items-start'>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4">
                See what our clients are saying
              </h2>
              <button className="text-base sm:text-lg text-white underline">
                4.8/5 based on 7,531+ reviews
              </button>
            </div>
          </div>
          
          
        </div>

        <div className="max-w-[1370px] mx-auto px-4 sm:px-6 pb-8 sm:pb-16">
          {/* Navigation buttons */}
          <div className='flex flex-row gap-4 sm:gap-8 justify-center md:justify-start flex-wrap border-b border-[#3f3e3d] pb-4 sm:pb-6 overflow-x-auto whitespace-nowrap'>
            <button className="text-white hover:text-gray-300 transition text-sm sm:text-base">About us</button>
            <button className="text-white hover:text-gray-300 transition text-sm sm:text-base">Careers</button>
            <button className="text-white hover:text-gray-300 transition text-sm sm:text-base">G2 customer reviews</button>
            <button className="text-white hover:text-gray-300 transition text-sm sm:text-base">Press & media</button>
            <button className="text-white hover:text-gray-300 transition text-sm sm:text-base">Pricing</button>
          </div>
          
          {/* Footer Links in 5 Columns - Improved Responsiveness */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8 pt-6 sm:pt-10">
            {/* Column 1: Products */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Products</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel EOR</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Global Payroll</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Contractor</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel US Payroll</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Contractor of Record</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel PEO</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel HR</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Engage</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Talent</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Benefits</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Workforce Planning</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Compensation</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel IT</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Device Lifecycle Management</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Mobile Device Management</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Endpoint Protection</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Access and Identity Management</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Immigration</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Equity Consulting</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Entity Setup</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Background Checks</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Plugins</a></li>
              </ul>
            </div>
            
            {/* Column 2: Deel Platform */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Deel Platform</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">HR Platform</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel AI</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">White Label</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Compliance Hub</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel API</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Global HRIS</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Deel Integrations</a></li>
              </ul>
            </div>
            
            {/* Column 3: Industries */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Industries</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Gaming</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Fintech</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Ed tech</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">IT services</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Marketing & advertising</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">E-sports</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Computer software</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Crypto</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Consumer goods</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Business process outsourcing</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Language service providers</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Talent solutions</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">AI and data labeling</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Retail</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Finance</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Insurance</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Healthcare</a></li>
              </ul>
            </div>
            
            {/* Column 4: Why Deel? */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Why Deel?</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Global compliance leaders</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Customer stories</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Competitor comparison</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Data security and privacy</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Built for enterprise</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Built for mid-market</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Built for start-ups</a></li>
              </ul>
            </div>
            
            {/* Column 5: Resources */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Blog</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Webinars & events</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Case studies</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Global work glossary</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Free HR tools</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Help center</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">Templates & guides</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 transition text-sm sm:text-base">API documentation</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright and Legal Links */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#3f3e3d] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm">
              © Copyright 2025. All Rights Reserved.
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition">Disclaimer</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition">Legal Hub</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition">Whistleblower Policy</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
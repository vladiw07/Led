import React from 'react';
import Button from '../ui/Button';

function Navbar() {
  return (
    <nav className="relative font-inter w-full bg-white shadow-sm fixed top-0 left-0 z-50 h-[80px]">
  <div className="max-w-[86.5rem] mx-auto px-6 py-4 flex justify-between items-center">
    
    {/* Logo */}
    <div className="text-4xl font-bold cursor-pointer hover:text-gray-600 text-black">deel.</div>

    {/* Nav Links */}
    <ul className="hidden md:flex gap-8 text-gray-700 text-sm font-bold text-[15px]">
  <li><a href="#" className="hover:text-gray-600 cursor-pointer">What we offer</a></li>
  <li><a href="#" className="hover:text-gray-600 cursor-pointer">Who we serve</a></li>
  <li><a href="#" className="hover:text-gray-600 cursor-pointer">Pricing</a></li>
  <li><a href="#" className="hover:text-gray-600 cursor-pointer">Customer stories</a></li>
  <li><a href="#" className="hover:text-gray-600 cursor-pointer">Resources</a></li>
</ul>


    {/* CTA Buttons */}
    <div className="flex items-center gap-4">
      <button className="text-sm text-gray-700 hover:border-gray-400 transition font-bold border rounded-3xl py-2 px-3.5 border-2 border-gray-300">Log In</button>
      <Button label={'Book a demo'} />
    </div>

  </div>
</nav>

  );
}

export default Navbar;

import React, { useState } from 'react';
import Button from '../ui/Button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for the menu items
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className="font-inter w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-[86.5rem] mx-auto px-6 py-4 flex justify-between items-center h-[80px]">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer hover:text-gray-600 text-black">deel.</div>

        {/* Nav Links - Desktop */}
        <ul className="hidden lg:flex gap-8 text-gray-700 text-sm font-bold text-[15px]">
          <li><a href="#" className="hover:text-gray-600 cursor-pointer">What we offer</a></li>
          <li><a href="#" className="hover:text-gray-600 cursor-pointer">Who we serve</a></li>
          <li><a href="#" className="hover:text-gray-600 cursor-pointer">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-600 cursor-pointer">Customer stories</a></li>
          <li><a href="#" className="hover:text-gray-600 cursor-pointer">Resources</a></li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block text-sm text-gray-700 hover:border-gray-400 transition font-bold border rounded-3xl py-2 px-3.5 border-2 border-gray-300">Log In</button>
          <Button label={'Book a demo'} />

          {/* Mobile menu icon */}
          <div className="lg:hidden">
            <button 
              className="btn btn-ghost btn-circle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white shadow-md overflow-hidden border-t border-gray-100"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              boxShadow: "inset 0 7px 9px -7px rgba(0,0,0,0.1)"
            }}
          >
            <div className="max-w-[86.5rem] mx-auto px-6 py-4">
              <motion.ul className="flex flex-col" variants={itemVariants}>
                <motion.li variants={itemVariants}>
                  <div className="flex justify-between items-center py-4">
                    <a href="#" className="text-gray-700 font-bold text-lg hover:text-gray-900">What we offer</a>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <hr className="border-gray-200" />
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <div className="flex justify-between items-center py-4">
                    <a href="#" className="text-gray-700 font-bold text-lg hover:text-gray-900">Who we serve</a>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <hr className="border-gray-200" />
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <div className="flex justify-between items-center py-4">
                    <a href="#" className="text-gray-700 font-bold text-lg hover:text-gray-900">Pricing</a>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <hr className="border-gray-200" />
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <div className="flex justify-between items-center py-4">
                    <a href="#" className="text-gray-700 font-bold text-lg hover:text-gray-900">Customer stories</a>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <hr className="border-gray-200" />
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <div className="flex justify-between items-center py-4">
                    <a href="#" className="text-gray-700 font-bold text-lg hover:text-gray-900">Resources</a>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <hr className="border-gray-200" />
                </motion.li>
                
                <motion.li variants={itemVariants} className="md:hidden mt-4">
                  <div className="flex justify-center items-center py-2">
                    <button className="text-gray-700 font-bold text-[15px] border-2 border-gray-300 rounded-full py-2.5 px-6 hover:border-gray-400 transition w-full">
                      Log In
                    </button>
                  </div>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
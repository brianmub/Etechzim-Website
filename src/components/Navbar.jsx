import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-[#060810]/85 backdrop-blur-[20px] border-b border-borderLine z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/logo-transparent.png" 
            alt="eTechZim Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.src = '/logo.png';
            }}
          />
          <span className="hidden font-heading font-extrabold text-2xl tracking-tighter text-textPrimary">
            e<span className="text-accent">Tech</span>Zim
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
          <li><a href="#why" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
          <li><a href="#builder" className="hover:text-accent transition-colors">PC Builder</a></li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-accent text-black font-semibold px-5 py-2.5 rounded-md hover:bg-opacity-90 transition-all">
            Get in touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-textPrimary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-[70px] left-0 w-full h-screen bg-bg2 border-t border-borderLine p-6 flex flex-col gap-6">
          <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-heading">Services</a>
          <a href="#why" onClick={() => setIsOpen(false)} className="text-xl font-heading">About</a>
          <a href="#products" onClick={() => setIsOpen(false)} className="text-xl font-heading">Products</a>
          <a href="#builder" onClick={() => setIsOpen(false)} className="text-xl font-heading">PC Builder</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 bg-accent text-black text-center font-semibold px-5 py-3 rounded-md">
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

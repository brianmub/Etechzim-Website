import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-bg2/95 backdrop-blur-md border-t border-borderLine p-8 flex flex-col justify-between z-40 overflow-y-auto"
          >
            <div className="flex flex-col gap-5 mt-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-2xl font-heading font-bold text-textPrimary hover:text-accent transition-colors flex items-center justify-between py-3 border-b border-borderLine/30">
                <span>Services</span>
                <span className="text-xs text-accent font-sans">01</span>
              </a>
              <a href="#why" onClick={() => setIsOpen(false)} className="text-2xl font-heading font-bold text-textPrimary hover:text-accent transition-colors flex items-center justify-between py-3 border-b border-borderLine/30">
                <span>About</span>
                <span className="text-xs text-accent font-sans">02</span>
              </a>
              <a href="#products" onClick={() => setIsOpen(false)} className="text-2xl font-heading font-bold text-textPrimary hover:text-accent transition-colors flex items-center justify-between py-3 border-b border-borderLine/30">
                <span>Products</span>
                <span className="text-xs text-accent font-sans">03</span>
              </a>
              <a href="#builder" onClick={() => setIsOpen(false)} className="text-2xl font-heading font-bold text-textPrimary hover:text-accent transition-colors flex items-center justify-between py-3 border-b border-borderLine/30">
                <span>PC Builder</span>
                <span className="text-xs text-accent font-sans">04</span>
              </a>
            </div>
            
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="mt-6 w-full bg-accent text-black text-center font-bold px-5 py-4 rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:bg-opacity-95 transition-all text-lg"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

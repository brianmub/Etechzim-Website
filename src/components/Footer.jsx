import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-borderLine bg-[#0a0c14] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="font-heading font-extrabold text-xl tracking-tighter text-textPrimary">
          e<span className="text-accent">Tech</span>Zim
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-sans text-sm text-muted">
          <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
          <li><a href="#why" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>

        {/* Copyright */}
        <div className="text-xs text-muted/70">
          © {new Date().getFullYear()} eTechZim PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

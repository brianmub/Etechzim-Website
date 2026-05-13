import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-[70px] overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent2/20 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent3/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="max-w-[780px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 mb-4 bg-accent/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Leading Tech Innovation Partner</span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-8 opacity-70 pl-1">
            Always On, Always There
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-[clamp(2.5rem,9vw,4.5rem)] lg:text-7xl font-heading font-extrabold leading-[1.2] mb-6">
            <span className="block pb-1 whitespace-nowrap">Future-Ready</span>
            <span className="block w-fit text-gradient pb-2 pr-[0.1em] overflow-visible">Technology</span>
            <span className="block pt-1">Solutions</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-[600px]">
            eTechZim PVT LTD delivers cutting-edge technology designed to drive business profitability — from AI automation and holographic displays to custom computing infrastructure built for excellence across the region and beyond.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
            <a href="#services" className="bg-accent text-black font-semibold px-8 py-3.5 rounded-md hover:bg-opacity-90 transition-all text-center">
              Explore Services →
            </a>
            <a href="#contact" className="bg-transparent border border-borderLine text-textPrimary font-semibold px-8 py-3.5 rounded-md hover:border-accent/50 hover:bg-accent/5 transition-all text-center">
              Talk to us
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-8 md:gap-12 pt-8 border-t border-borderLine">
            <div>
              <h4 className="text-3xl font-heading font-bold text-textPrimary">6+</h4>
              <p className="text-sm text-muted mt-1">Technology verticals</p>
            </div>
            <div>
              <h4 className="text-3xl font-heading font-bold text-textPrimary">100%</h4>
              <p className="text-sm text-muted mt-1">Local expertise</p>
            </div>
            <div>
              <h4 className="text-3xl font-heading font-bold text-textPrimary">24/7</h4>
              <p className="text-sm text-muted mt-1">Technical support</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - SVG Circuit */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[500px] h-[500px] animate-float relative flex justify-center items-center">
            <svg viewBox="-50 -50 500 500" className="w-[120%] h-[120%] drop-shadow-2xl">
              {/* Outer dashed ring */}
              <circle cx="200" cy="200" r="160" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" style={{transformOrigin: '50% 50%'}} />
              {/* Middle solid ring */}
              <circle cx="200" cy="200" r="120" fill="none" stroke="var(--accent2)" strokeWidth="0.5" opacity="0.3" />
              {/* Inner dashed ring */}
              <circle cx="200" cy="200" r="80" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 6" className="animate-[spin_20s_linear_infinite_reverse]" style={{transformOrigin: '50% 50%'}} />
              
              {/* Center Core */}
              <circle cx="200" cy="200" r="30" fill="url(#coreGradient)" />
              <circle cx="200" cy="200" r="40" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.5" className="animate-ping" style={{animationDuration: '3s'}} />

              {/* Gradients */}
              <defs>
                <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--accent2)" />
                </radialGradient>
              </defs>

              {/* Nodes and Lines */}
              <g>
                {/* Node 1 */}
                <line x1="200" y1="40" x2="200" y2="120" stroke="var(--border)" strokeWidth="1" />
                <circle cx="200" cy="40" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
                <text x="200" y="25" textAnchor="middle" fill="var(--muted)" fontSize="10" className="font-sans font-bold tracking-wider">AI SERVICES</text>
                
                {/* Node 2 */}
                <line x1="338" y1="120" x2="269" y2="160" stroke="var(--border)" strokeWidth="1" />
                <circle cx="338" cy="120" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
                <text x="355" y="115" textAnchor="start" fill="var(--muted)" fontSize="10" className="font-sans font-bold tracking-wider">HOLOGRAM</text>

                {/* Node 3 */}
                <line x1="338" y1="280" x2="269" y2="240" stroke="var(--border)" strokeWidth="1" />
                <circle cx="338" cy="280" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
                <text x="355" y="290" textAnchor="start" fill="var(--muted)" fontSize="10" className="font-sans font-bold tracking-wider">NETWORK</text>

                {/* Node 4 */}
                <line x1="200" y1="360" x2="200" y2="280" stroke="var(--border)" strokeWidth="1" />
                <circle cx="200" cy="360" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
                <text x="200" y="380" textAnchor="middle" fill="var(--muted)" fontSize="10" className="font-sans font-bold tracking-wider">SOFTWARE</text>

                {/* Node 5 */}
                <line x1="62" y1="280" x2="131" y2="240" stroke="var(--border)" strokeWidth="1" />
                <circle cx="62" cy="280" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
                <text x="45" y="290" textAnchor="end" fill="var(--muted)" fontSize="10" className="font-sans font-bold tracking-wider">HARDWARE</text>

                {/* Node 6 */}
                <line x1="62" y1="120" x2="131" y2="160" stroke="var(--border)" strokeWidth="1" />
                <circle cx="62" cy="120" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
                <text x="45" y="115" textAnchor="end" fill="var(--muted)" fontSize="10" className="font-sans font-bold tracking-wider">AV/SMART</text>
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

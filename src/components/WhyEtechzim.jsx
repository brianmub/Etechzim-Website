import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyEtechzim = () => {
  return (
    <section id="why" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Your Partner in Digital Transformation</h2>
          
          <div className="mb-8 p-6 bg-accent/5 border-l-4 border-accent rounded-r-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Our Vision</h3>
            <p className="text-xl font-heading italic text-textPrimary leading-snug">
              "To be the leading technology partner for businesses, driving profitability through cutting-edge solutions."
            </p>
          </div>
          
          <p className="text-muted text-lg mb-10 leading-relaxed">
            At eTechZim, we bridge the gap between complex technology and business success. 
            Our team works collaboratively to ensure that every solution we deliver is not only 
            technically robust but strategically designed to drive ROI and growth. 
            We are more than a service provider; we are your dedicated technology partners.
          </p>
          
          <ul className="space-y-6">
            {["Harare-based, nationally deployed", "End-to-end ownership", "Built for our environment", "Multi-sector experience"].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <Check size={18} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: "⚡", title: "Fast deployment", text: "Rapid go-to-market execution." },
            { icon: "🔒", title: "Secure by design", text: "Enterprise security standards." },
            { icon: "📈", title: "Scalable solutions", text: "Grows with your business." },
            { icon: "🤝", title: "Partnership model", text: "We work with you, not just for you." }
          ].map((block, i) => (
            <div key={i} className="bg-bg2 border border-borderLine p-6 rounded-xl flex flex-col gap-3 hover:border-accent/40 transition-colors">
              <span className="text-2xl">{block.icon}</span>
              <h4 className="font-heading font-bold">{block.title}</h4>
              <p className="text-sm text-muted">{block.text}</p>
            </div>
          ))}
          
          <div className="col-span-2 bg-accent/5 border border-accent/30 p-8 rounded-xl flex items-center gap-6">
            <span className="text-4xl">🚀</span>
            <div>
              <h4 className="font-heading font-bold text-xl text-accent mb-1">Enterprise-Grade Innovation</h4>
              <p className="text-muted">Solutions architected to thrive in diverse and challenging operating environments, driving global business profitability through resilient technology.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyEtechzim;

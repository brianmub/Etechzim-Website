import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: "🤖",
    title: "AI Services",
    desc: "Custom AI solutions, automation pipelines, intelligent chatbots, data analytics platforms tailored to your workflows."
  },
  {
    icon: "🌀",
    title: "Hologram Fan Displays",
    desc: "3D holographic fan displays for retail, exhibitions, events, brand activations. Supply, setup, and content creation included."
  },
  {
    icon: "📺",
    title: "Smartboards & AV",
    desc: "Interactive smartboards, digital signage, full AV solutions for classrooms, boardrooms, and public spaces."
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Bespoke web apps, mobile applications, enterprise platforms, API integrations. Full-stack from requirements to deployment."
  },
  {
    icon: "🌐",
    title: "Internet & Network Infrastructure",
    desc: "Internet access provision, LAN/WAN design, structured cabling, Wi-Fi deployment, ongoing network management."
  },
  {
    icon: "🖥️",
    title: "Custom Desktop Computers",
    desc: "Made-to-order all-in-one desktops engineered for African conditions — optimised for local power environments and workloads."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">WHAT WE DO</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Technology Services Built for Africa</h2>
        <p className="text-muted text-lg max-w-2xl">
          We bring world-class technology to Zimbabwean businesses, providing end-to-end solutions that modernize operations, engage customers, and build resilient infrastructure.
        </p>
      </motion.div>

      {/* Unified Grid */}
      <div className="bg-borderLine p-[1.5px] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-borderLine">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg2 group relative p-10 h-full flex flex-col hover:bg-bg3 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover Top Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="text-4xl mb-6 group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">{service.desc}</p>
              
              {/* Learn More Link */}
              <div className="mt-auto">
                <a href="#contact" className="text-accent font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-flex items-center">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-24 px-6 relative max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">FEATURED SOLUTIONS</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Our Flagship Offerings</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
        
        {/* LEFT - Large Feature Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-bg3 border border-borderLine rounded-3xl p-10 relative overflow-hidden flex flex-col justify-between group"
        >
          {/* Decorative Glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wide uppercase mb-8">
              Featured Product
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">Hologram Fan Displays</h3>
            <p className="text-muted text-lg mb-8 max-w-md">
              Capture attention like never before with 3D floating visuals. Perfect for retail, exhibitions, and premium brand activations.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "High-resolution 3D multi-blade spinning LED tech.",
                "Custom content creation by our in-house 3D artists.",
                "Cloud-based management for multi-device setups.",
                "Durable protective casings and mounting brackets.",
                "Available for outright purchase or event rental."
              ].map((spec, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span className="text-muted">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-textPrimary text-bg font-semibold px-6 py-3.5 rounded-lg hover:bg-accent hover:text-black transition-colors w-max">
            Request a demo <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* RIGHT - Stack of Small Cards */}
        <div className="flex flex-col gap-4 justify-center">
          {[
            { icon: "🤖", title: "AI-Powered Business Tools", desc: "Automate workflows and analyze data with custom AI pipelines." },
            { icon: "🖥️", title: "eTechZim Custom All-in-One PCs", desc: "Built-in UPS and engineered for the African power grid." },
            { icon: "📡", title: "Managed Network Packages", desc: "End-to-end enterprise connectivity and Wi-Fi management." },
            { icon: "📺", title: "Interactive Smartboard Solutions", desc: "Enhance meetings and classrooms with collaborative displays." }
          ].map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-bg2 border border-borderLine p-6 rounded-2xl flex items-start gap-5 hover:border-accent/40 hover:bg-bg3 transition-all cursor-pointer hover:translate-x-2"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-bg3 border border-borderLine flex items-center justify-center text-2xl group-hover:border-accent/30 group-hover:bg-accent/5 transition-colors">
                {prod.icon}
              </div>
              <div className="flex-grow">
                <h4 className="font-heading font-bold text-lg mb-1">{prod.title}</h4>
                <p className="text-sm text-muted line-clamp-2">{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;

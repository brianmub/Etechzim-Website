import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Award, Activity } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb size={32} />,
    title: "Innovation",
    desc: "Pioneering cutting-edge solutions that solve complex real-world challenges."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Integrity",
    desc: "Building transparent, honest, and long-term business partnerships based on trust."
  },
  {
    icon: <Award size={32} />,
    title: "Excellence",
    desc: "Maintaining world-class standards in every piece of technology we deliver."
  },
  {
    icon: <Activity size={32} />,
    title: "Reliability",
    desc: "Living our mantra—Always On, Always There—in every support interaction."
  }
];

const Values = () => {
  return (
    <section className="py-24 px-6 relative bg-bg2/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">OUR FOUNDATION</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">The Values That Drive Us</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Our core values are the bedrock of eTechZim, guiding how we build technology and how we serve our global partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-bg3/50 border border-borderLine hover:border-accent/40 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                {val.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{val.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

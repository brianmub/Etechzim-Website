
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Mrs. Tendai Moyo",
    role: "Head of IT, Harare Academy",
    quote: "eTechZim installed our smartboard system across three campuses. The difference in student engagement has been remarkable...",
    stars: 5,
    color: "bg-blue-500"
  },
  {
    name: "Farai Chikwanda",
    role: "Marketing Director, Zim Beverages Ltd",
    quote: "The hologram display at our product launch stopped people in their tracks. Customers were taking videos and sharing on social media...",
    stars: 5,
    color: "bg-emerald-500"
  },
  {
    name: "Blessing Mutasa",
    role: "Operations Manager, FinTech Zimbabwe",
    quote: "We needed 20 workstations fast — locally built, budget-conscious, able to handle load-shedding. eTechZim delivered custom all-in-ones with built-in UPS in two weeks...",
    stars: 5,
    color: "bg-purple-500"
  },
  {
    name: "Rudo Ncube",
    role: "CEO, Ncube & Associates",
    quote: "Their team deployed our entire office network in three days... Internet has been rock-solid since.",
    stars: 5,
    color: "bg-rose-500"
  },
  {
    name: "Tatenda Khumalo",
    role: "Owner, Khumalo Retail Group",
    quote: "eTechZim built our inventory management platform from scratch... the AI-powered analytics have changed how we make buying decisions.",
    stars: 4,
    color: "bg-amber-500"
  },
  {
    name: "Simba Dube",
    role: "CX Manager, Horizon Insurance",
    quote: "We used their AI chatbot solution for our customer support desk. Response times dropped by 70% in the first month...",
    stars: 5,
    color: "bg-indigo-500"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-borderLine">
      <div className="text-center mb-16">
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">CLIENT VOICES</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-[#0a0c14] border border-borderLine p-6 sm:p-8 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all flex flex-col h-full"
          >
            {/* Top outline gradient line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-gradient opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Decorative Quote Mark */}
            <div className="absolute top-4 right-8 font-heading text-8xl text-bg3 leading-none opacity-50 pointer-events-none select-none">
              "
            </div>

            <div className="flex text-amber-400 mb-6 relative z-10 text-sm">
              {[...Array(5)].map((_, idx) => (
                <span key={idx}>{idx < t.stars ? '★' : '☆'}</span>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-8 flex-grow relative z-10 italic">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4 mt-auto border-t border-borderLine/50 pt-6 relative z-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold tracking-wider ${t.color}`}>
                {t.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </div>
              <div>
                <h5 className="font-heading font-bold text-textPrimary leading-tight">{t.name}</h5>
                <p className="text-xs text-muted leading-tight mt-1">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';

const QUESTIONS = {
  0: {
    q: "You're running a business in Harare. What's your biggest daily pain?",
    options: [
      { id: 'A', text: "Load-shedding kills my computers mid-work", next: 1 },
      { id: 'B', text: "My team can't collaborate — internet is unreliable", next: 2 },
      { id: 'C', text: "I'm drowning in manual admin and data entry", next: 3 },
      { id: 'D', text: "I need to wow customers at events & exhibitions", next: 4 }
    ]
  },
  1: {
    q: "How long does a typical power outage affect your operations?",
    options: [
      { id: 'q1a', text: "Flickers and short dips (< 5 mins)", next: 'resA' },
      { id: 'q1b', text: "1-2 hours during peak time", next: 'resA' },
      { id: 'q1c', text: "Half-day load shedding (4-6 hours)", next: 'resA' },
      { id: 'q1d', text: "Unpredictable, sometimes all day", next: 'resA' }
    ]
  },
  2: {
    q: "What does the connectivity problem affect most?",
    options: [
      { id: 'q2a', text: "Accessing shared team files", next: 'resB' },
      { id: 'q2b', text: "Processing payments at POS", next: 'resB' },
      { id: 'q2c', text: "Remote workers dropping off calls", next: 'resB' },
      { id: 'q2d', text: "The whole office grinds to a halt", next: 'resB' }
    ]
  },
  3: {
    q: "Which manual process costs you the most time?",
    options: [
      { id: 'q3a', text: "Reconciling inventory & stock", next: 'resC' },
      { id: 'q3b', text: "Answering the same customer queries", next: 'resC' },
      { id: 'q3c', text: "Data entry into accounting systems", next: 'resC' },
      { id: 'q3d', text: "Staff scheduling and timesheets", next: 'resC' }
    ]
  },
  4: {
    q: "What kind of experience do you want to create?",
    options: [
      { id: 'q4a', text: "A high-impact new product launch", next: 'resD' },
      { id: 'q4b', text: "Standing out at a crowded expo/trade show", next: 'resD' },
      { id: 'q4c', text: "Modernising a premium retail storefront", next: 'resD' },
      { id: 'q4d', text: "An unforgettable corporate conference", next: 'resD' }
    ]
  }
};

const RESULTS = {
  resA: {
    icon: "🖥️",
    title: "eTechZim Custom All-in-One PCs with Built-in UPS",
    desc: "Stop losing work to load-shedding. Our robust AIO desktop computers come engineered with built-in UPS modules, giving you the runway to save work cleanly or keep operating during outages. They are purpose-built for the African power environment."
  },
  resB: {
    icon: "🌐",
    title: "Managed Network Infrastructure by eTechZim",
    desc: "End the connectivity nightmares. We design and deploy resilient enterprise-grade LAN, Wi-Fi, and redundant internet setups. With proactive monitoring, we ensure your team stays online, productive, and communicating without interruption."
  },
  resC: {
    icon: "🤖",
    title: "AI-Powered Business Automation by eTechZim",
    desc: "Free your team from repetitive tasks. We build intelligent workflows and custom AI agents that handle data entry, customer support queries, and automated reporting. Scale your output without scaling your overheads."
  },
  resD: {
    icon: "🌀",
    title: "Hologram Fan Display Solutions by eTechZim",
    desc: "Make them stop and stare. Our 3D holographic fan displays create floating, high-definition visuals that demand attention. From hardware installation to custom 3D content creation, we handle everything to make your brand the main event."
  }
};

const TechChallenge = () => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  
  // Progress calculation
  const isResult = typeof step === 'string';
  const progressPercent = step === 0 ? 33 : isResult ? 100 : 66;

  const handleOptionClick = (next) => {
    setSelectedOption(next); // show selected state briefly
    setTimeout(() => {
      setStep(next);
      setSelectedOption(null);
    }, 450);
  };

  const resetGame = () => {
    setStep(0);
    setSelectedOption(null);
  };

  return (
    <section id="challenge" className="py-24 px-6 relative max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">IS THIS YOU?</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">What's Your Biggest Tech Challenge?</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Play through a scenario, we'll show you exactly how eTechZim solves it.
        </p>
      </div>

      <div className="bg-bg2 border border-borderLine rounded-2xl overflow-hidden shadow-2xl min-h-[450px] flex flex-col relative">
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-bg">
          <div 
            className="h-full bg-accent-gradient transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="p-5 sm:p-12 flex-grow flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isResult ? (
              <motion.div 
                key={`question-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center max-w-2xl mx-auto text-textPrimary leading-tight">
                  {QUESTIONS[step].q}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {QUESTIONS[step].options.map((opt) => {
                    const isSelected = selectedOption === opt.next;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionClick(opt.next)}
                        disabled={selectedOption !== null}
                        className={`text-left p-5 rounded-xl border transition-all duration-300 font-medium ${
                          isSelected 
                            ? 'bg-accent/10 border-accent shadow-[0_0_20px_rgba(0,212,255,0.2)] scale-[1.02]' 
                            : 'bg-bg3 border-borderLine hover:border-accent/40 hover:bg-accent/5'
                        } ${selectedOption !== null && !isSelected ? 'opacity-50' : 'opacity-100'}`}
                      >
                        {opt.text}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center max-w-2xl mx-auto"
              >
                <div className="text-6xl mb-6 drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                  {RESULTS[step].icon}
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-textPrimary">
                  {RESULTS[step].title}
                </h3>
                <p className="text-lg text-muted leading-relaxed mb-10">
                  {RESULTS[step].desc}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="#contact" 
                    className="flex items-center gap-2 bg-accent text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-opacity-90 transition-all w-full sm:w-auto justify-center"
                  >
                    Solve this problem <ArrowRight size={18} />
                  </a>
                  <button 
                    onClick={resetGame}
                    className="flex items-center gap-2 bg-transparent text-muted font-semibold px-8 py-3.5 rounded-lg border border-borderLine hover:text-textPrimary hover:bg-bg3 transition-all w-full sm:w-auto justify-center"
                  >
                    <RotateCcw size={18} /> Try another scenario
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechChallenge;

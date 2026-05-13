import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BASE_PRICE = 580;

const OPTIONS = {
  useCase: [
    { id: 'office', label: 'Office & Admin', price: 80 },
    { id: 'creative', label: 'Creative & Design', price: 100 },
    { id: 'gaming', label: 'Gaming & Media', price: 110 },
    { id: 'server', label: 'Server / Kiosk', price: 120 }
  ],
  processor: [
    { id: 'i3', label: 'Intel i3 — Entry', price: 200 },
    { id: 'i5', label: 'Intel i5 — Mid-range', price: 220 },
    { id: 'i7', label: 'Intel i7 — Performance', price: 250 },
    { id: 'i9', label: 'Intel i9 — Pro', price: 350 }
  ],
  ram: [
    { id: '8gb', label: '8GB', price: 100 },
    { id: '16gb', label: '16GB', price: 120 },
    { id: '32gb', label: '32GB', price: 160 },
    { id: '64gb', label: '64GB', price: 190 }
  ],
  storage: [
    { id: '256gb', label: '256GB SSD', price: 30 },
    { id: '512gb', label: '512GB SSD', price: 60 },
    { id: '1tb', label: '1TB SSD', price: 90 },
    { id: '2tb', label: '2TB SSD', price: 170 }
  ],
  displaySize: [
    { id: '21', label: '21"', price: 80 },
    { id: '24', label: '24"', price: 90 },
    { id: '27', label: '27"', price: 120 },
    { id: '32', label: '32" 4K', price: 150 }
  ],
  addons: [
    { id: 'ups', label: 'Built-in UPS', price: 35 },
    { id: 'wifi6', label: 'Wi-Fi 6 Card', price: 10 },
    { id: 'gpu', label: 'Dedicated GPU', price: 55 },
    { id: 'webcam', label: 'HD Webcam', price: 20 },
    { id: 'wireless', label: 'Wireless KB+Mouse', price: 10 },
    { id: 'win11', label: 'Windows 11 Pro', price: 15 }
  ]
};

const PCBuilder = () => {
  const [config, setConfig] = useState({
    useCase: OPTIONS.useCase[0],
    processor: OPTIONS.processor[0],
    ram: OPTIONS.ram[0],
    storage: OPTIONS.storage[0],
    displaySize: OPTIONS.displaySize[0],
    addons: []
  });

  const handleSelect = (category, item) => {
    setConfig(prev => ({ ...prev, [category]: item }));
  };

  const handleAddonToggle = (addon) => {
    setConfig(prev => {
      const exists = prev.addons.find(a => a.id === addon.id);
      if (exists) {
        return { ...prev, addons: prev.addons.filter(a => a.id !== addon.id) };
      }
      return { ...prev, addons: [...prev.addons, addon] };
    });
  };

  const totalPrice = BASE_PRICE 
    + config.useCase.price 
    + config.processor.price 
    + config.ram.price 
    + config.storage.price 
    + config.displaySize.price 
    + config.addons.reduce((sum, a) => sum + a.price, 0);

  const hasUPS = config.addons.some(a => a.id === 'ups');

  return (
    <section id="builder" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-borderLine">
      <div className="mb-16">
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">INTERACTIVE EXPERIENCE</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Build Your Custom All-in-One PC</h2>
        <p className="text-muted text-lg max-w-2xl">
          Configure your machine for maximum productivity and business profitability. See it take shape and get an instant quote.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20">
        
        {/* LEFT - Configuration Options */}
        <div className="flex flex-col gap-10">
          
          {/* Step 1 to 5 (Single Select) */}
          {[
            { key: 'useCase', title: 'Step 01 — Use Case', options: OPTIONS.useCase },
            { key: 'processor', title: 'Step 02 — Processor', options: OPTIONS.processor },
            { key: 'ram', title: 'Step 03 — RAM', options: OPTIONS.ram },
            { key: 'storage', title: 'Step 04 — Storage', options: OPTIONS.storage },
            { key: 'displaySize', title: 'Step 05 — Display Size', options: OPTIONS.displaySize },
          ].map((step, idx) => (
            <div key={idx}>
              <h4 className="font-heading font-semibold text-lg mb-4 text-textPrimary">{step.title}</h4>
              <div className="flex flex-wrap gap-3">
                {step.options.map(opt => {
                  const isSelected = config[step.key].id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(step.key, opt)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                        isSelected 
                          ? 'bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(0,212,255,0.15)]' 
                          : 'bg-bg2 border-borderLine text-muted hover:border-accent/50 hover:text-textPrimary'
                      }`}
                    >
                      {opt.label} <span className="opacity-60 ml-1">(+${opt.price})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Step 6 - Add-ons */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-textPrimary">Step 06 — Add-ons</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OPTIONS.addons.map(addon => {
                const isSelected = config.addons.some(a => a.id === addon.id);
                return (
                  <label key={addon.id} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected ? 'bg-accent/5 border-accent' : 'bg-bg2 border-borderLine hover:border-accent/40'
                  }`}>
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-borderLine text-accent focus:ring-accent accent-accent"
                      checked={isSelected}
                      onChange={() => handleAddonToggle(addon)}
                    />
                    <div className="flex flex-col">
                      <span className={`font-medium ${isSelected ? 'text-accent' : 'text-textPrimary'}`}>{addon.label}</span>
                      <span className="text-xs text-muted">+${addon.price}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT - Live Preview Panel */}
        <div className="lg:sticky lg:top-24 h-max">
          <div className="bg-bg3 border border-borderLine rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            {/* SVG Illustration */}
            <div className="w-full aspect-[4/3] relative mb-8 flex justify-center items-center">
              <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl overflow-visible">
                {/* Stand */}
                <path d="M180,260 L220,260 L240,290 L160,290 Z" fill="var(--bg2)" stroke="var(--border)" strokeWidth="2" />
                <rect x="190" y="220" width="20" height="40" fill="var(--bg2)" stroke="var(--border)" strokeWidth="2" />
                
                {/* Monitor Frame */}
                <rect x="40" y="40" width="320" height="180" rx="10" fill="#000" stroke="var(--accent2)" strokeWidth="3" />
                
                {/* Screen Content */}
                <rect x="45" y="45" width="310" height="170" rx="6" fill="var(--bg)" />
                <rect x="45" y="45" width="310" height="170" rx="6" fill="url(#screenGlow)" opacity="0.3" />
                
                {/* Screen UI Elements */}
                <text x="200" y="100" textAnchor="middle" fill="var(--text)" fontSize="20" className="font-heading font-bold tracking-tight">eTechZim</text>
                <text x="200" y="125" textAnchor="middle" fill="var(--accent)" fontSize="12" className="font-sans font-medium">{config.useCase.label}</text>
                <text x="200" y="150" textAnchor="middle" fill="var(--muted)" fontSize="10" className="font-sans">
                  {config.processor.label.split('—')[0].trim()} | {config.ram.label} | {config.storage.label}
                </text>

                {/* Pulsing Power LED */}
                <circle cx="340" cy="205" r="3" fill="var(--accent)" className="animate-pulse" />

                {/* Conditional UPS Badge */}
                {hasUPS && (
                  <g>
                    <rect x="55" y="193" width="35" height="16" rx="4" fill="var(--accent3)" opacity="0.8" />
                    <text x="72.5" y="204" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" className="font-sans">UPS</text>
                  </g>
                )}

                <defs>
                  <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="absolute bottom-2 text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                {config.displaySize.label} Display
              </div>
            </div>

            {/* Summary List */}
            <div className="space-y-3 mb-8">
              {[
                { label: 'Use Case', value: config.useCase.label },
                { label: 'Processor', value: config.processor.label },
                { label: 'Memory', value: config.ram.label },
                { label: 'Storage', value: config.storage.label },
                { label: 'Display', value: config.displaySize.label },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-borderLine/50 pb-2">
                  <span className="text-muted">{item.label}</span>
                  <span className="font-medium text-textPrimary">{item.value}</span>
                </div>
              ))}
              {config.addons.length > 0 && (
                <div className="flex justify-between items-start text-sm pt-1">
                  <span className="text-muted">Add-ons</span>
                  <span className="font-medium text-textPrimary text-right max-w-[60%] flex flex-wrap justify-end gap-1">
                    {config.addons.map(a => <span key={a.id} className="bg-bg2 px-2 py-0.5 rounded text-xs border border-borderLine">{a.label}</span>)}
                  </span>
                </div>
              )}
            </div>

            {/* Price Box */}
            <div className="bg-bg2 border border-borderLine rounded-xl p-6 mb-6 text-center">
              <p className="text-sm text-muted uppercase tracking-wider font-bold mb-1">Estimated Price (USD)</p>
              <h3 className="text-5xl font-heading font-extrabold text-accent mb-2">${totalPrice}</h3>
              <p className="text-xs text-muted">12-Month Hardware Warranty Included</p>
            </div>

            <a href="#contact" className="w-full flex items-center justify-center bg-accent text-black font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all text-lg">
              Get a formal quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCBuilder;

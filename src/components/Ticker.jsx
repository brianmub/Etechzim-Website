import React from 'react';

const Ticker = () => {
  const items = [
    "AI Services", "Hologram Fan Displays", "Smartboards & AV", 
    "Custom Desktop Computers", "Network Infrastructure", 
    "Software Development", "Internet Access Provision", "IoT & Asset Tracking"
  ];

  // Repeat for seamless scrolling
  const tickerItems = [...items, ...items];

  return (
    <div className="w-full bg-accent/5 border-y border-borderLine overflow-hidden relative py-3">
      <div className="w-full flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center mx-6 text-sm font-medium tracking-wide">
              <span className="text-accent mr-3">◆</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;

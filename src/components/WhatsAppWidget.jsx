import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, AlertCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '263773257425';

const SYSTEM_PROMPT = `
You are the official eTechZim AI Assistant, representing eTechZim PVT LTD, a technology company in Harare, Zimbabwe.
Your task is to answer visitors' questions politely, professionally, and accurately using the eTechZim Knowledge Base below.

=== eTechZim Knowledge Base ===
- Company: eTechZim PVT LTD (Harare, Zimbabwe)
- Location: Harare, Zimbabwe / Serving SADC and nationwide.
- Contact: Email is info@etechzim.co.zw, phone/WhatsApp is +263 77 325 7425.
- Response time: Within one business day.
- Services:
  1. AI Services: Custom AI solutions, automated workflow pipelines, intelligent customer support chatbots, data analytics.
  2. 3D Hologram Fan Displays: Holographic fan displays for retail, expos, events, brand launches. Supply, installation, and custom 3D content creation.
  3. Interactive Smartboards & AV: Interactive smartboards, digital signage, AV setups for schools, classrooms, corporate boardrooms.
  4. Software Development: Custom web apps, mobile apps, enterprise systems, API integrations.
  5. Internet & Network Infrastructure: LAN/WAN design, structured cabling, Wi-Fi setups, managed internet.
  6. Custom All-in-One PCs: Engineered for African conditions (optimized for local power/load-shedding).
- Products:
  - Hologram Fan Displays (with supply, setup, 3D content).
  - eTechZim Custom All-in-One PCs: Starts at $580 USD. Includes a built-in UPS option to protect against load-shedding.
  - AI-Powered Business Tools, Managed Network Packages, Interactive Smartboard Solutions.
- PC Builder Configurator Options (Base price $580 USD):
  - Use cases: Office ($0), Creative ($120), Gaming ($200), Server/Kiosk ($80).
  - Processors: i3 ($0), i5 ($80), i7 ($180), i9 ($320).
  - RAM: 8GB ($0), 16GB ($60), 32GB ($130), 64GB ($260).
  - Storage: 256GB SSD ($0), 512GB SSD ($40), 1TB SSD ($90), 2TB SSD ($170).
  - Display Size: 21" ($0), 24" ($50), 27" ($110), 32" 4K ($200).
  - Add-ons: Built-in UPS ($35), Wi-Fi 6 ($25), Dedicated GPU ($55), HD Webcam ($20), Wireless KB+Mouse ($30), Windows 11 Pro ($45).
- Testimonials & Success Stories: FinTech Zimbabwe (20 PCs built), Harare Academy (smartboards), Zim Beverages (holograms).

=== Guidelines ===
1. Answer the question using the knowledge base.
2. If the user asks for a specific custom quote, ordering instructions, specific custom pricing not listed above, or asks to talk to a human, answer as best as possible and then append '[WHATSAPP_REFERRAL]' to the end of your response so we can show them the WhatsApp link.
3. If they ask about something completely unrelated to technology or eTechZim, explain that you are the eTechZim assistant, answer briefly if appropriate, and suggest discussing their project on WhatsApp by appending '[WHATSAPP_REFERRAL]'.
4. Keep your answers brief, modern, and helpful.
`;

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const getFormattedTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      text: "Hi there! 👋 Welcome to eTechZim.",
      sender: 'bot',
      time: getFormattedTime()
    },
    {
      id: 'msg-2',
      text: "I am your AI assistant. Ask me anything about our custom computers, AI solutions, or networking services!",
      sender: 'bot',
      time: getFormattedTime()
    }
  ]);

  const chatEndRef = useRef(null);

  const chips = [
    { label: "🖥️ Custom PC Quote", text: "I'd like to get a quote for a custom built All-in-One PC." },
    { label: "🤖 AI & Automation", text: "Tell me about your AI Services and Business Automation." },
    { label: "🌐 Network Setup", text: "What services do you offer for Network and Internet Infrastructure?" },
    { label: "💬 Where are you located?", text: "Where are you located and what are your contact details?" }
  ];

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Convert React message state history to Gemini API format
  const mapHistory = () => {
    const mapped = [];
    
    // Seed history with welcome message
    mapped.push({
      role: 'model',
      parts: [{ text: "Hi there! Welcome to eTechZim. I am your AI assistant. Ask me anything about our custom computers, AI solutions, or networking services!" }]
    });

    messages.forEach((msg) => {
      if (msg.id !== 'msg-1' && msg.id !== 'msg-2') {
        if (msg.sender === 'user') {
          mapped.push({
            role: 'user',
            parts: [{ text: msg.text }]
          });
        } else {
          // Strip system tokens before passing to history
          const cleanText = msg.text.replace(/\[WHATSAPP_REFERRAL\]/gi, '').trim();
          mapped.push({
            role: 'model',
            parts: [{ text: cleanText }]
          });
        }
      }
    });

    return mapped;
  };

  // Call Gemini REST API directly
  const callGemini = async (userText) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key is not configured.");
    }

    const history = mapHistory();
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [...history, { role: 'user', parts: [{ text: userText }] }],
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 600,
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API Error: Status ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error("No response content from Gemini.");
    }

    return text;
  };

  // Local Rule QA System for offline fallback
  const getLocalFallbackResponse = (input) => {
    const text = input.toLowerCase();
    
    const rules = [
      {
        keywords: ['service', 'services', 'offer', 'provide', 'do', 'about', 'help', 'products'],
        response: "eTechZim offers a range of technology services in Zimbabwe: \n\n🤖 AI Services & Business Automation\n🌀 3D Hologram Fan Displays (expos & retail)\n📺 Smartboards & AV Boardroom Systems\n💻 Bespoke Software Development\n🌐 Network & Internet Infrastructure\n🖥️ Custom All-in-One PCs (with built-in UPS)\n\nFeel free to ask me for details on any of these!"
      },
      {
        keywords: ['discount', 'bulk', 'order', 'buy', 'purchase', 'deal', 'hire', 'rent', 'quantity'],
        response: "For discounts, bulk orders, or custom purchases, please connect directly with our support team on WhatsApp! [WHATSAPP_REFERRAL]"
      },
      {
        keywords: ['price', 'pricing', 'cost', 'how much', 'rates', 'quote'],
        response: "Our custom All-in-One PC starts at $580 USD. For other customized services like AI solutions, Holograms, and Networking, pricing depends on your requirements. Would you like to speak to our team for a custom quote? [WHATSAPP_REFERRAL]"
      },
      {
        keywords: ['pc', 'computer', 'builder', 'desktop', 'ups', 'all-in-one', 'aio', 'hardware'],
        response: "eTechZim builds custom All-in-One PCs optimized for local power (with built-in UPS to protect against load-shedding). You can configure processors (i3 to i9), RAM (8GB to 64GB), storage, and displays using the PC Builder section on our website!"
      },
      {
        keywords: ['ai', 'artificial intelligence', 'chatbot', 'automation', 'intelligence', 'robot'],
        response: "We offer custom AI services, automated workflows, intelligent support chatbots, and analytics tools to streamline your business workflows."
      },
      {
        keywords: ['hologram', 'holographic', '3d', 'display', 'fan'],
        response: "We supply and install 3D Hologram Fan Displays for retail shops, events, and product launches. We also design custom 3D holographic content!"
      },
      {
        keywords: ['smartboard', 'smart board', 'av', 'audio visual', 'signage'],
        response: "We install interactive smartboards and complete AV systems for classrooms, corporate boardrooms, and digital public displays."
      },
      {
        keywords: ['software', 'app', 'web', 'mobile', 'development', 'programming'],
        response: "Our development team designs and builds bespoke web applications, mobile apps, enterprise platforms, and integrations."
      },
      {
        keywords: ['internet', 'network', 'wifi', 'wi-fi', 'cabling', 'lan', 'wan'],
        response: "We deploy professional network infrastructure, structured cabling, office Wi-Fi, and managed internet access."
      },
      {
        keywords: ['contact', 'email', 'phone', 'address', 'where', 'location', 'office', 'harare'],
        response: "We are based in Harare, Zimbabwe. You can contact us via email at info@etechzim.co.zw or call/WhatsApp us at +263 77 325 7425."
      },
      {
        keywords: ['hours', 'time', 'open', 'days'],
        response: "Our team operates Monday to Friday. We respond to all contact requests within one business day."
      }
    ];

    let bestMatch = null;
    let maxMatches = 0;

    rules.forEach((rule) => {
      let matchCount = 0;
      rule.keywords.forEach((keyword) => {
        if (text.includes(keyword)) {
          matchCount++;
        }
      });
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestMatch = rule;
      }
    });

    if (bestMatch && maxMatches > 0) {
      const isReferral = bestMatch.response.includes('[WHATSAPP_REFERRAL]');
      const cleanText = bestMatch.response.replace('[WHATSAPP_REFERRAL]', '').trim();
      return {
        text: cleanText,
        showWhatsapp: isReferral
      };
    }

    // Default local fallback refers to WhatsApp
    return {
      text: "I don't have that specific information in my local knowledge base. Would you like me to connect you with our human support team on WhatsApp so we can answer your specific question?",
      showWhatsapp: true
    };
  };

  const handleSend = async (textToSend) => {
    if (!textToSend.trim()) return;

    // 1. Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      text: textToSend,
      sender: 'user',
      time: getFormattedTime()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // 2. Show bot typing simulation
    setIsTyping(true);

    try {
      // 3. Attempt Gemini API Call
      const replyText = await callGemini(textToSend);
      
      setIsTyping(false);
      const isReferral = replyText.includes('[WHATSAPP_REFERRAL]');
      const cleanReply = replyText.replace(/\[WHATSAPP_REFERRAL\]/gi, '').trim();

      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        text: cleanReply,
        sender: 'bot',
        time: getFormattedTime(),
        showWhatsapp: isReferral,
        whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`
      }]);

    } catch (error) {
      console.warn("Gemini API call failed, falling back to local QA matcher:", error);
      
      // 4. Graceful Fallback
      const localResponse = getLocalFallbackResponse(textToSend);
      setIsTyping(false);

      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        text: localResponse.text,
        sender: 'bot',
        time: getFormattedTime(),
        showWhatsapp: localResponse.showWhatsapp,
        whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`
      }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend(inputText);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mb-4 w-[360px] h-[500px] max-w-[calc(100vw-2rem)] bg-bg2/95 border border-borderLine rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-bg3 border-b border-borderLine p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold font-heading text-sm">
                    eTZ
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-bg3 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-textPrimary font-heading">eTechZim Assistant</h4>
                  <p className="text-[11px] text-muted flex items-center gap-1">
                    AI Representative
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-textPrimary p-1.5 rounded-lg hover:bg-bg3 transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                >
                  <div 
                    className={`p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-accent3/20 border border-accent3/30 text-textPrimary rounded-tr-none'
                        : 'bg-accent/10 border border-accent/20 text-textPrimary rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    
                    {msg.showWhatsapp && (
                      <a
                        href={msg.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 bg-[#25d366] text-black font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-opacity-90 transition-all uppercase tracking-wider"
                      >
                        <MessageCircle size={14} /> Open Support Chat
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] text-muted/60 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex flex-col items-start max-w-[85%] mr-auto">
                  <div className="p-3 bg-accent/10 border border-accent/20 text-textPrimary rounded-2xl rounded-tl-none">
                    <div className="flex gap-1.5 items-center py-1 px-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Chips */}
              {!messages.some(m => m.sender === 'user') && !isTyping && (
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] text-muted px-1 font-semibold uppercase tracking-wider">Quick Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(chip.text)}
                        className="bg-bg3 hover:bg-accent/10 border border-borderLine hover:border-accent text-muted hover:text-accent rounded-full px-3 py-1.5 text-[11px] font-medium transition-all duration-300 text-left"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-borderLine bg-bg3 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask us anything..."
                className="flex-1 bg-bg border border-borderLine rounded-lg px-4 py-2 text-sm text-textPrimary placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
              <button
                onClick={() => handleSend(inputText)}
                disabled={!inputText.trim() || isTyping}
                className="bg-accent text-black p-2 rounded-lg hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 bg-bg2 border border-accent/30 text-accent rounded-full shadow-[0_4px_20px_rgba(0,212,255,0.25)] flex items-center justify-center hover:border-accent hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Close Chat" : "Chat on WhatsApp"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing indicator when closed */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full animate-ping"></span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '',
    service: '', budget: '', message: '', consent: false
  });
  
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Compute validation errors dynamically
  const getErrors = (force = false) => {
    if (!hasSubmitted && !force) return {};
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Valid email is required";
    
    if (!formData.service || formData.service === "default") newErrors.service = "Please select a service";
    
    if (formData.message.length < 20) newErrors.message = "Message must be at least 20 characters";
    
    if (!formData.consent) newErrors.consent = "You must agree to be contacted";
    return newErrors;
  };

  const errors = getErrors();

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    
    const activeErrors = getErrors(true);
    if (Object.keys(activeErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      // TODO: Replace with Formspree or real fetch call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1800);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', company: '',
      service: '', budget: '', message: '', consent: false
    });
    setHasSubmitted(false);
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-borderLine">
      <div className="mb-16">
        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">GET IN TOUCH</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Let's Build Something Together</h2>
        <p className="text-muted text-lg max-w-2xl">
          Tell us about your project or challenge. Our team will get back to you within one business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20">
        
        {/* LEFT - Form */}
        <div className="relative bg-bg3 border border-borderLine rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-gradient"></div>
          
          <div className="p-5 sm:p-12 min-h-[600px] flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="text-7xl mb-6">✅</div>
                <h3 className="text-3xl font-heading font-bold mb-4">Message Sent!</h3>
                <p className="text-lg text-muted mb-8">
                  Thank you for reaching out. A member of the eTechZim team will review your enquiry and get back to you within one business day.
                </p>
                <button 
                  onClick={resetForm}
                  className="bg-bg2 border border-borderLine text-textPrimary px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" placeholder="First name*" 
                      value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})}
                      className={`w-full bg-[#0a0c14] border rounded-lg px-4 py-3 placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50 ${errors.firstName ? 'border-red-500/50' : 'border-borderLine'}`}
                    />
                    {errors.firstName && <span className="text-red-400 text-xs mt-1 block">{errors.firstName}</span>}
                  </div>
                  <div>
                    <input 
                      type="text" placeholder="Last name*" 
                      value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})}
                      className={`w-full bg-[#0a0c14] border rounded-lg px-4 py-3 placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50 ${errors.lastName ? 'border-red-500/50' : 'border-borderLine'}`}
                    />
                    {errors.lastName && <span className="text-red-400 text-xs mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                {/* Row 2 */}
                <div>
                  <input 
                    type="email" placeholder="info@etechzim.co.zw*" 
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-[#0a0c14] border rounded-lg px-4 py-3 placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50 ${errors.email ? 'border-red-500/50' : 'border-borderLine'}`}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" placeholder="+2637XXXXXXXX (WhatsApp)" 
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#0a0c14] border border-borderLine rounded-lg px-4 py-3 placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <input 
                    type="text" placeholder="Company / Organisation" 
                    value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-[#0a0c14] border border-borderLine rounded-lg px-4 py-3 placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                {/* Row 4 */}
                <div>
                  <select 
                    value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}
                    className={`w-full bg-[#0a0c14] border rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none ${errors.service ? 'border-red-500/50' : 'border-borderLine'} ${!formData.service ? 'text-muted/70' : ''}`}
                  >
                    <option value="" disabled>— Select a service —</option>
                    <option value="AI Services & Automation">AI Services & Automation</option>
                    <option value="Hologram Fan Displays">Hologram Fan Displays</option>
                    <option value="Smartboards & AV">Smartboards & AV</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Internet & Network Infrastructure">Internet & Network Infrastructure</option>
                    <option value="Custom All-in-One Desktop PCs">Custom All-in-One Desktop PCs</option>
                    <option value="PC Builder Quote">PC Builder Quote</option>
                    <option value="Other / General Enquiry">Other / General Enquiry</option>
                  </select>
                  {errors.service && <span className="text-red-400 text-xs mt-1 block">{errors.service}</span>}
                </div>

                {/* Row 5 */}
                <div>
                  <label className="block text-sm text-muted mb-2">Budget range (USD)</label>
                  <div className="flex flex-wrap gap-2">
                    {['Under $500', '$500–$2,000', '$2,000–$10,000', '$10,000+', 'Prefer to discuss'].map(budget => (
                      <button
                        key={budget} type="button"
                        onClick={() => setFormData({...formData, budget})}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          formData.budget === budget 
                            ? 'bg-accent/10 border-accent text-accent' 
                            : 'bg-[#0a0c14] border-borderLine text-muted hover:border-accent/40'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 6 */}
                <div>
                  <textarea 
                    placeholder="Tell us about your project..." 
                    rows="5"
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className={`w-full bg-[#0a0c14] border rounded-lg px-4 py-3 min-h-[130px] resize-y placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/50 ${errors.message ? 'border-red-500/50' : 'border-borderLine'}`}
                  />
                  <div className="flex justify-between items-start mt-1">
                    {errors.message ? <span className="text-red-400 text-xs">{errors.message}</span> : <span></span>}
                    <span className={`text-xs ${formData.message.length > 900 ? 'text-red-400' : 'text-muted'}`}>
                      {formData.message.length} / 1000
                    </span>
                  </div>
                </div>

                {/* Row 7 */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={formData.consent} onChange={e => setFormData({...formData, consent: e.target.checked})}
                      className="mt-1 w-4 h-4 rounded border-borderLine text-accent focus:ring-accent accent-accent"
                    />
                    <span className="text-sm text-muted group-hover:text-textPrimary transition-colors">
                      I agree to be contacted by eTechZim regarding my enquiry.
                    </span>
                  </label>
                  {errors.consent && <span className="text-red-400 text-xs mt-1 block ml-7">{errors.consent}</span>}
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent text-black font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all text-base flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : "Send Message →"}
                </button>

              </form>
            )}
          </div>
        </div>

        {/* RIGHT - Info Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-bg2 border border-borderLine p-6 rounded-xl flex items-start gap-4">
            <span className="text-2xl mt-1">📍</span>
            <div>
              <h5 className="font-bold text-textPrimary mb-1">Location</h5>
              <p className="text-sm text-muted">Harare, Zimbabwe / Serving clients nationwide & SADC</p>
            </div>
          </div>
          <div className="bg-bg2 border border-borderLine p-6 rounded-xl flex items-start gap-4">
            <span className="text-2xl mt-1">📧</span>
            <div>
              <h5 className="font-bold text-textPrimary mb-1">Email</h5>
              <p className="text-sm text-muted">info@etechzim.co.zw</p>
            </div>
          </div>
          <div className="bg-bg2 border border-borderLine p-6 rounded-xl flex items-start gap-4">
            <span className="text-2xl mt-1">💬</span>
            <div>
              <h5 className="font-bold text-textPrimary mb-1">WhatsApp</h5>
              <a href="#" className="text-sm text-accent hover:underline">Chat on WhatsApp →</a>
            </div>
          </div>
          <div className="bg-bg2 border border-borderLine p-6 rounded-xl flex items-start gap-4">
            <span className="text-2xl mt-1">⏱️</span>
            <div>
              <h5 className="font-bold text-textPrimary mb-1">Response Time</h5>
              <p className="text-sm text-muted">Within <span className="text-accent bg-accent/10 px-1 rounded">one business day</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

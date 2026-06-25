

const Footer = () => {
  return (
    <footer className="border-t border-borderLine bg-[#0a0c14] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <img 
              src="/logo-transparent.png" 
              alt="eTechZim Logo" 
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.target.src = '/logo.png';
              }}
            />
            <span className="hidden font-heading font-extrabold text-xl tracking-tighter text-textPrimary">
              e<span className="text-accent">Tech</span>Zim
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mt-2 opacity-80">
            Always On, Always There
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-sans text-sm text-muted">
          <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
          <li><a href="#why" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>

        {/* Copyright */}
        <div className="text-xs text-muted/70">
          © {new Date().getFullYear()} eTechZim PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

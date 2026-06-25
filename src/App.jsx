
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import WhyEtechzim from './components/WhyEtechzim';
import Products from './components/Products';
import PCBuilder from './components/PCBuilder';
import TechChallenge from './components/TechChallenge';
import Testimonials from './components/Testimonials';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <>
      <div className="grid-overlay"></div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <Services />
          <WhyEtechzim />
          <Products />
          <PCBuilder />
          <TechChallenge />
          <Values />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
}

export default App;

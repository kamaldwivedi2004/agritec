import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Sustainability from './components/Sustainability';
import Features from './components/Features';
import ContactStrip from './components/ContactStrip';
import CTABanner from './components/CTABanner';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Stats />
      <Sustainability />
      <Features />
      <ContactStrip />
      <CTABanner />
      <Testimonials />
      <Blog />
      <Partners />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

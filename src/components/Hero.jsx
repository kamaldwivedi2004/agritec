import { useState, useEffect } from 'react';
import { ArrowRight, LeafIcon, MailIcon, MapPinIcon } from './Icons';

const SLIDES = [
  {
    headline: ['Shaping A Future', 'For Eco Farming &', 'New Agriculture!'],
    sub: 'Our Agriculture businesses deliver agronomic advice, services, and inputs to livestock, fruit, and vegetables. We also supply smart chain solutions to all businesses in all the primary food production fields.',
    img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=1800&q=85',
  },
  {
    headline: ['Growing Tomorrow\'s Food', 'With Sustainable', 'Practices Today!'],
    sub: 'We help farmers and consumers have the technologies they need to protect the crops and the ecosystems from the threat of pests and diseases in an environmentally sound, safe, and sustainable way.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1800&q=85',
  },
  {
    headline: ['Delivering Innovation', 'In Modern Agriculture', 'Solutions!'],
    sub: 'With 65 years of experience, we utilize deep industry knowledge, insights and innovation expertise to create sustainable solutions for the challenges of tomorrow\'s agricultural world.',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&q=85',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((index + SLIDES.length) % SLIDES.length);
      setAnimKey((k) => k + 1);
      setTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5500);
    return () => clearInterval(timer);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background images */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={s.img} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center">
        <div className="max-w-2xl pt-20">
          <h1
            key={`h-${animKey}`}
            className="text-5xl md:text-6xl lg:text-[70px] font-extrabold text-white leading-[1.1] mb-6 hero-animate"
          >
            {slide.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          <p
            key={`p-${animKey}`}
            className="text-white/80 text-base lg:text-lg leading-relaxed mb-10 max-w-xl hero-animate-delay-1"
          >
            {slide.sub}
          </p>

          <div
            key={`b-${animKey}`}
            className="flex flex-wrap gap-4 hero-animate-delay-2"
          >
            <a
              href="#services"
              className="group flex items-center gap-2 bg-accent hover:bg-accent-dark text-gray-900 font-bold px-8 py-4 rounded text-sm transition-all duration-200"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded text-sm transition-all duration-200"
            >
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Green card bottom-right */}
      <div className="absolute bottom-0 right-0 bg-primary text-white p-8 w-[340px] rounded-tl-[2rem] z-20 hidden xl:block">
        <div className="flex justify-center -mt-14 mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-primary shadow-lg">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="36" r="8" stroke="#1a5c2a" strokeWidth="2" fill="none"/>
              <path d="M16 28C16 20 24 8 24 8C24 8 32 20 32 28" stroke="#1a5c2a" strokeWidth="2" fill="none"/>
              <path d="M12 32C12 32 18 26 24 26C30 26 36 32 36 32" stroke="#e8c535" strokeWidth="2"/>
              <circle cx="20" cy="20" r="3" fill="#e8c535"/>
              <circle cx="28" cy="20" r="3" fill="#e8c535"/>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-extrabold mb-2 leading-snug">
          Delivering Sustainable Agriculture Solutions!
        </h3>
        <p className="text-white/70 text-sm mb-5 leading-relaxed">
          Techniques that prioritize health of our land and customers within the regional agricultural market.
        </p>
        <ul className="space-y-2.5">
          {['100% Organic Products', 'The Best Ingredients', 'Cow Meat & Milk'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium">
              <span className="text-accent text-base">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/15 hover:bg-white/35 border border-white/30 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-200 backdrop-blur-sm"
      >
        ‹
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 xl:right-[380px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/15 hover:bg-white/35 border border-white/30 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-200 backdrop-blur-sm"
      >
        ›
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 xl:-translate-x-[170px] flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-2.5 bg-accent'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Bottom contact bar */}
      <div className="absolute bottom-0 left-0 right-0 xl:right-[340px] bg-white/10 backdrop-blur-md border-t border-white/20 z-10 hidden xl:flex">
        <div className="flex divide-x divide-white/20 px-10 py-5 gap-0 w-full">
          <div className="flex items-center gap-4 pr-12">
            <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <MailIcon className="w-5 h-5 text-gray-800" />
            </div>
            <div>
              <p className="text-white/55 text-xs font-medium uppercase tracking-wide">Quick Contact</p>
              <p className="text-white font-semibold text-sm">Agritec@7oroof.com</p>
              <p className="text-white/70 text-xs">+2 011 6114 5741</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-12">
            <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <MapPinIcon className="w-5 h-5 text-gray-800" />
            </div>
            <div>
              <p className="text-white/55 text-xs font-medium uppercase tracking-wide">Our Location</p>
              <p className="text-white font-semibold text-sm">2307 Brooklyn, New York 11226</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pl-12">
            <div className="flex -space-x-2">
              {[11, 12, 13].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/36?img=${n}`}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-9 h-9 rounded-full bg-accent border-2 border-white flex items-center justify-center text-xs font-extrabold text-gray-800">
                +
              </div>
            </div>
            <div className="text-white text-sm font-semibold">
              ⭐ Rated 4.9 stars
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

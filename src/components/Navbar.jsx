import { useState, useEffect } from 'react';
import { AgriLogo, ChevronDown, SearchIcon, CartIcon, MenuIcon, CloseIcon, ArrowRight } from './Icons';

const NAV_LINKS = [
  { label: 'Home', hasDropdown: true },
  { label: 'Pages', hasDropdown: true },
  { label: 'Services', hasDropdown: true },
  { label: 'Projects', hasDropdown: true },
  { label: 'Insights', hasDropdown: true },
  { label: 'Shop', hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-0' : 'bg-white py-0'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <AgriLogo />
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Agritec</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary font-medium text-sm transition-colors duration-200 rounded-md hover:bg-primary-light"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </a>
              {/* Dropdown indicator */}
              {link.hasDropdown && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 text-gray-600 hover:text-primary hover:bg-primary-light rounded-full transition-all duration-200">
            <SearchIcon />
          </button>
          <button className="relative p-2 text-gray-600 hover:text-primary hover:bg-primary-light rounded-full transition-all duration-200">
            <CartIcon />
            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded text-sm transition-all duration-200"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-primary-light hover:text-primary transition-colors"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

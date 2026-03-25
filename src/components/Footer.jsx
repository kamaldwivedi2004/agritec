import { AgriLogo, LeafIcon, FacebookIcon, TwitterIcon, LinkedInIcon, ArrowRight } from './Icons';

const FOOTER_LINKS = [
  {
    title: 'About',
    links: ['About Us', 'Our Farmers', 'Our Products', 'Contact Us', 'Careers'],
  },
  {
    title: 'Services',
    links: [
      'Seed Distribution',
      'Soil Management',
      'Irrigation Management',
      'Detailed Field Reports',
      'Crop Rotation Planning',
      'Soil Texture Mapping',
    ],
  },
  {
    title: 'Resources',
    links: ['News & Media', 'How It Works', 'Pricing Plans', 'Help & FAQs', 'Awards'],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#0d3318] text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <AgriLogo />
              <span className="text-2xl font-extrabold tracking-tight">Agritec</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs">
              Our commitment is to help farmers have the technologies they need to protect
              the crops and empowering the future of food production!
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: TwitterIcon, label: 'Twitter' },
                { Icon: LinkedInIcon, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 border border-white/20 hover:border-accent hover:text-accent rounded-full flex items-center justify-center transition-all duration-200 text-white/60"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="font-extrabold text-white text-base mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/55 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-accent text-xs">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <h4 className="font-extrabold text-white text-base mb-6">Quick Contact</h4>
            <address className="not-italic">
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                2307 Beverley Rd Brooklyn,<br />New York, United States.
              </p>
              <a
                href="mailto:Agritec@7oroof.com"
                className="text-accent text-sm font-semibold block mb-2 hover:text-accent-dark transition-colors"
              >
                Agritec@7oroof.com
              </a>
              <a
                href="tel:+20116114574"
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                +2 011 6114 5741
              </a>
            </address>

            {/* Newsletter mini */}
            <div className="mt-8">
              <p className="text-white/55 text-xs mb-3 font-medium">Subscribe for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/35 text-xs px-3 py-2.5 rounded outline-none focus:border-accent transition-colors min-w-0"
                />
                <button className="bg-accent hover:bg-accent-dark text-gray-900 px-3 py-2.5 rounded transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-14">
          <div className="border-t border-white/10" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0a2812]">
        {/* Decorative jagged edge */}
        <svg
          viewBox="0 0 1440 20"
          fill="none"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ marginTop: '-1px' }}
        >
          <path
            d="M0 0 L60 12 L120 4 L180 16 L240 6 L300 14 L360 3 L420 15 L480 5 L540 13 L600 2 L660 16 L720 7 L780 14 L840 4 L900 12 L960 3 L1020 15 L1080 6 L1140 13 L1200 4 L1260 16 L1320 5 L1380 12 L1440 2 L1440 0 Z"
            fill="#0d3318"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            ©2025 Agritec, All Rights Reserved. With Love by{' '}
            <a href="#" className="text-accent hover:text-accent-dark transition-colors font-medium">
              7oroof.com
            </a>
          </p>
          <div className="flex items-center gap-5 text-white/40 text-sm">
            <a href="#" className="hover:text-white/70 transition-colors">Terms &amp; Conditions</a>
            <span>–</span>
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <span>–</span>
            <a href="#" className="hover:text-white/70 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

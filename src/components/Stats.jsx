import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);

  useEffect(() => {
    if (!visible) return;
    const isM = target.includes('M');
    const isK = target.includes('K');
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const duration = 2200;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, num);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, target]);

  const format = () => {
    if (target.includes('M')) return Math.floor(count) + 'M';
    if (target.includes('K')) return Math.floor(count) + 'K';
    return Math.floor(count);
  };

  return <span ref={ref}>{format()}</span>;
}

const STATS = [
  {
    num: '196K',
    label: 'Expert farmers worldwide work with us today!',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <circle cx="32" cy="20" r="10" stroke="#e8c535" strokeWidth="2.5" />
        <path d="M12 56C12 44 20 38 32 38C44 38 52 44 52 56" stroke="#e8c535" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M44 30C48 28 54 30 54 38" stroke="#e8c535" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 30C16 28 10 30 10 38" stroke="#e8c535" strokeWidth="2" strokeLinecap="round" />
        <rect x="26" y="44" width="12" height="8" rx="2" stroke="#e8c535" strokeWidth="2" />
        <path d="M28 52L28 56M36 52L36 56" stroke="#e8c535" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '58M',
    label: 'Products and seeds delivered annually by us!',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <rect x="8" y="24" width="48" height="32" rx="4" stroke="#e8c535" strokeWidth="2.5" />
        <path d="M8 32H56" stroke="#e8c535" strokeWidth="2" />
        <path d="M24 32V56M40 32V56" stroke="#e8c535" strokeWidth="2" />
        <path d="M20 24V20C20 14 28 8 32 8C36 8 44 14 44 20V24" stroke="#e8c535" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="40" r="4" fill="#e8c535" />
      </svg>
    ),
  },
  {
    num: '98K',
    label: 'Acres of growing space we plant worldwide!',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <rect x="8" y="8" width="22" height="22" rx="3" stroke="#e8c535" strokeWidth="2.5" />
        <rect x="34" y="8" width="22" height="22" rx="3" stroke="#e8c535" strokeWidth="2.5" />
        <rect x="8" y="34" width="22" height="22" rx="3" stroke="#e8c535" strokeWidth="2.5" />
        <rect x="34" y="34" width="22" height="22" rx="3" stroke="#e8c535" strokeWidth="2.5" />
        <circle cx="19" cy="19" r="5" fill="#e8c535" />
        <circle cx="45" cy="19" r="5" fill="#e8c535" opacity="0.5" />
        <circle cx="19" cy="45" r="5" fill="#e8c535" opacity="0.5" />
        <circle cx="45" cy="45" r="5" fill="#e8c535" />
      </svg>
    ),
  },
];

export default function Stats() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-xl transition-all duration-700 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Yellow – Vision panel */}
          <div className="bg-accent lg:w-72 flex-shrink-0 p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <p className="text-gray-900 font-extrabold text-xl mb-4">Our Vision</p>
              <p className="text-gray-800/75 text-sm leading-relaxed">
                Our vision is to advocate for formulators and distributors of organic crop
                pesticides, ensuring their participation in shaping pesticide policy.
              </p>
            </div>
            <div className="flex gap-3 mt-10">
              <button className="w-10 h-10 border-2 border-gray-900/25 rounded flex items-center justify-center hover:bg-gray-900/10 transition-colors font-bold text-gray-800">
                ‹
              </button>
              <button className="w-10 h-10 border-2 border-gray-900/25 rounded flex items-center justify-center hover:bg-gray-900/10 transition-colors font-bold text-gray-800">
                ›
              </button>
            </div>

            {/* Decorative leaf */}
            <div className="absolute -bottom-4 -right-4 opacity-15 rotate-12 text-9xl pointer-events-none select-none">
              🌿
            </div>
          </div>

          {/* Stats */}
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex-1 bg-primary p-10 flex flex-col justify-between border-l border-white/10 min-w-0"
            >
              <div className="mb-4">{s.icon}</div>
              <div>
                <p className="text-5xl font-extrabold text-white mb-3 tracking-tight">
                  <Counter target={s.num} />
                </p>
                <p className="text-white/65 text-sm leading-relaxed">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useInView } from '../hooks/useInView';
import { LeafIcon, CheckCircleIcon } from './Icons';

const SKILLS = [
  { label: 'Organic Farming', pct: 85 },
  { label: 'Seed Distribution', pct: 72 },
  { label: 'Pest and disease control', pct: 60 },
];

const FEATURE_ITEMS = [
  'Highest quality seeds & plants',
  'Cutting edge biosecurity methods',
  'Pest management planning',
  'Improving energy efficiency',
  'Filtering, and recycling rainwater',
  'Solutions tailored to your needs',
];

function SkillBar({ label, pct, visible, delay }) {
  return (
    <div className="mb-7" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700 text-sm">{label}</span>
        <span className="text-primary font-extrabold text-sm">{pct}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Features() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <p className="text-primary font-semibold flex items-center gap-2 mb-4 text-sm uppercase tracking-wide">
              <LeafIcon className="w-4 h-4" />
              Our Expert Solutions
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 leading-tight">
              Helping farmers in protecting crop &amp; Enrich Lives.
            </h2>

            {SKILLS.map((s, i) => (
              <SkillBar key={s.label} {...s} visible={visible} delay={i * 150} />
            ))}
          </div>

          {/* Right */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            {/* Image with cursive overlay */}
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80"
                alt="Green forest"
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              <div className="absolute bottom-4 right-4 drop-shadow-lg">
                <p className="font-cursive text-accent text-4xl leading-none">Enrich Lives.</p>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-gray-900 mb-6">
              Delivering impact with purpose and partnership!
            </h3>

            <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden">
              {FEATURE_ITEMS.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-[#f0faf2] border border-gray-100 hover:bg-primary-light transition-colors"
                >
                  <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
              We join farmers, manufacturers, and retailers in sourcing, making and delivering
              products that are vital for living.{' '}
              <a href="#" className="text-primary font-bold hover:underline">
                Get Started Now!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

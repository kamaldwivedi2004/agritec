import { useInView } from '../hooks/useInView';
import { LeafIcon, ArrowRight, PlayIcon } from './Icons';

const FEATURES = [
  {
    title: 'Always support farmers',
    desc: 'Farmers strengthen their soil health while increasing crop yields & profitability for long-term success.',
  },
  {
    title: 'Power of regeneration',
    desc: 'Shifting agriculture from being a carbon emitter to a powerful carbon sink for a greener planet.',
  },
];

export default function About() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: image block ── */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80"
                alt="Farmer using drone technology"
                className="w-full h-[540px] object-cover"
              />

              {/* "Agriculture & Foods" badge */}
              <div className="absolute top-8 right-0 bg-white rounded-l-2xl px-6 py-4 shadow-xl flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                  <LeafIcon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-extrabold text-gray-900 text-sm text-center leading-tight mt-1">
                  Agriculture<br />& Foods
                </p>
              </div>

              {/* Play button */}
              <div className="absolute top-8 right-40 w-14 h-14 bg-primary hover:bg-primary-dark rounded-xl flex items-center justify-center cursor-pointer transition-colors shadow-lg group">
                <PlayIcon className="w-5 h-5 text-white ml-0.5 group-hover:scale-110 transition-transform" />
              </div>

              {/* Cursive label */}
              <div className="absolute bottom-6 left-6 drop-shadow-lg">
                <p className="font-cursive text-accent text-5xl leading-none">Quality Crops</p>
              </div>

              {/* Dark gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* ── Right: text ── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <p className="text-primary font-semibold flex items-center gap-2 mb-4 text-sm uppercase tracking-wide">
              <LeafIcon className="w-4 h-4" />
              Shaping &amp; supporting the future of food production!
            </p>

            <h2 className="text-4xl lg:text-[46px] font-extrabold text-gray-900 leading-tight mb-6">
              Shaping &amp; supporting the future of food production!
            </h2>

            <p className="text-gray-500 mb-4 leading-relaxed">
              We help farmers and consumers have the technologies they need to protect the crops
              and the ecosystems from the threat of pests, weeds, diseases in an environmentally
              sound, safe, and sustainable way.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              With 65 years of experience, we utilize deep industry knowledge, insights and
              innovation expertise to create solutions for tomorrow.
            </p>

            {/* Feature rows */}
            <div className="space-y-0 divide-y divide-gray-100 border-t border-gray-100">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-5 py-6">
                  <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <LeafIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              Sitting at the heart of the global supply chain, we join farmers, ranchers,
              manufacturers, and retailers in sourcing, making and delivering products that
              are vital for living.
            </p>

            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded text-sm transition-all duration-200"
            >
              How It Works
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

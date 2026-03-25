import { useInView } from '../hooks/useInView';
import { LeafIcon, ArrowRight } from './Icons';

export default function Sustainability() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <p className="text-primary font-semibold flex items-center gap-2 mb-4 text-sm uppercase tracking-wide">
              <LeafIcon className="w-4 h-4" />
              We conduct our business with integrity.
            </p>
            <h2 className="text-4xl lg:text-[46px] font-extrabold text-gray-900 leading-tight mb-6">
              Feeding the world with consistency, responsible, and sustainable way!
            </h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              We put people's physical safety above all else by helping colleagues and those
              we interact with reach their full potential by respecting everyone, being inclusive
              and valuing differences.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Our approach goes beyond organic, it is always social because people are at the
              heart of everything we do from the fields of agriculture and forestry work together
              with partners from processing to trade.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded text-sm transition-all duration-200"
              >
                How It Works
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary font-bold px-8 py-4 rounded text-sm transition-all duration-200"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800&q=80"
                alt="Orange orchard"
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 drop-shadow-lg">
                <p className="font-cursive text-accent text-5xl leading-none">Growing Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

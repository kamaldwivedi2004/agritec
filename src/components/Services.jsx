import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { LeafIcon, ArrowRight } from './Icons';

const SERVICES = [
  {
    title: 'Detailed Field Reports',
    desc: 'Our agronomists generate a detailed field report for the client, each report contains weed, insect and chemical recommendations.',
    img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80',
  },
  {
    title: 'Crop Rotation Planning',
    desc: 'We help our clients plan crop rotation patterns taking into account herbicide use, crop prices, weed problems and other variables that count.',
    img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
  },
  {
    title: 'Soil Texture Mapping',
    desc: 'Soil texture does not change; which is why soil mapping are typically one operations. Good or bad we can expect to farm the same soil.',
    img: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=600&q=80',
  },
  {
    title: 'Irrigation Management',
    desc: 'We develop customized irrigation plans that optimize water usage and delivery systems to maximize crop growth and sustainability.',
    img: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&q=80',
  },
  {
    title: 'Seed Distribution',
    desc: 'We source and distribute the highest quality certified seeds from around the world, ensuring the best possible crop yields.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    title: 'Pest & Disease Control',
    desc: 'Our specialists develop integrated pest management strategies that protect your crops while minimizing environmental impact.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
  },
];

export default function Services() {
  const [ref, visible] = useInView(0.1);
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary font-semibold flex items-center justify-center gap-2 mb-4 text-sm uppercase tracking-wide">
            <LeafIcon className="w-4 h-4" />
            Our Professional Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            What We Offer To Our Customers
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
                  <LeafIcon className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a
                  href="#"
                  className="group/btn inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 rounded text-sm transition-all duration-200"
                >
                  Explore More
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeDot ? 'w-10 h-3 bg-primary' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

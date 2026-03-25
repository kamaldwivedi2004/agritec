import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { LeafIcon, StarIcon, QuoteIcon } from './Icons';

const TESTIMONIALS = [
  {
    text: 'The cluster size is larger than I\'ve ever seen before in this block, and the crop load is more than I\'ve ever had per vine. The five gallon bucket came from feet of cordon basically one vine.',
    name: 'Mandy Andaloro',
    company: 'Trashco Inc',
    img: 'https://i.pravatar.cc/80?img=11',
    stars: 5,
  },
  {
    text: 'After 6 weeks, my trees were already larger than 2 year old trees! The leaves were bigger and greener too — clear signs of healthier growth, thanks to excellent juice content above the normal market price.',
    name: 'Jeffrey Cooper',
    company: 'Energia Inc',
    img: 'https://i.pravatar.cc/80?img=52',
    stars: 5,
  },
  {
    text: 'My field was treated with the crop technology which produced a 26% overall yield increase of blueberries as compared to the control field, resulting in a true higher percentage of exportable blueberries.',
    name: 'Brayn Smith',
    company: 'Allianz Inc',
    img: 'https://i.pravatar.cc/80?img=13',
    stars: 5,
  },
];

export default function Testimonials() {
  const [ref, visible] = useInView(0.1);
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="py-24 bg-[#f7fdf4]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary font-semibold text-sm mb-3">
            What our customers feel about our services!
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl mx-auto">
            Devoting time and effort to provide quality services to our customers.
          </h2>
          <div className="flex justify-center gap-2 mt-5">
            <LeafIcon className="w-5 h-5 text-primary" />
            <LeafIcon className="w-5 h-5 text-accent" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} filled={j < t.stars} />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow">
                    <QuoteIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2].map((i) => (
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

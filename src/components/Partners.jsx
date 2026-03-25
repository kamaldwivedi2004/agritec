import { useInView } from '../hooks/useInView';

const PARTNERS = ['AGCO', 'Bayer', 'BASF', 'Syngenta', 'Corteva', 'Nutrien', 'FMC Corp'];

export default function Partners() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="py-14 bg-gray-50 border-t border-gray-200">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 lg:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-10">
          Trusted by industry leaders worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="text-gray-300 hover:text-gray-500 transition-colors duration-200 font-extrabold text-xl lg:text-2xl tracking-wider cursor-pointer select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useInView } from '../hooks/useInView';
import { ArrowRight, PhoneIcon } from './Icons';

export default function ContactStrip() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-gray-500 max-w-lg text-sm leading-relaxed text-center lg:text-left">
          Providing the highest quality of service to our customers with our business solutions
          over the years, and our approach allow us to meld latest technology with our knowledge
          to maximize the efficiency of operations.{' '}
          <a href="#contact" className="text-primary font-bold hover:underline">
            Contact Us Now!
          </a>
        </p>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded text-sm transition-all duration-200"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 text-sm">+2 011 6114 5741</p>
              <p className="text-gray-400 text-xs">Sales team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

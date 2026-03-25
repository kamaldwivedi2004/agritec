import { ArrowRight } from './Icons';

export default function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1800&q=80"
          alt="Farm landscape"
          className="w-full h-[500px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full grid lg:grid-cols-2 gap-8">

            {/* Yellow card */}
            <div className="bg-accent rounded-2xl p-10 shadow-2xl">
              <p className="text-gray-900/60 text-sm font-semibold uppercase tracking-wide mb-3">
                Get In Touch
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900 leading-snug mb-6">
                If you have any questions or you'd like to find out more about us
              </h3>
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-7 py-3.5 rounded text-sm transition-all duration-200"
              >
                Contact Us Now
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Subscribe card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <p className="text-white font-extrabold text-xl mb-3">Subscribe to our newsletter</p>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Just fill out the form and our global experts will be in touch right away
                with the right methods and price to help you!
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-3 rounded bg-white/15 border border-white/30 text-white placeholder-white/50 text-sm outline-none focus:border-accent focus:bg-white/20 transition-all"
                />
                <button className="bg-accent hover:bg-accent-dark text-gray-900 font-bold px-5 py-3 rounded text-sm whitespace-nowrap transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-white/40 text-xs mt-3">
                By subscribing, you accept the{' '}
                <a href="#" className="underline hover:text-white/70">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

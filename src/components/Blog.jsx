import { useInView } from '../hooks/useInView';
import { LeafIcon, ArrowRight } from './Icons';

const POSTS = [
  {
    cat: 'Technology',
    date: 'March 15, 2025',
    title: 'The Role of Technology in Modern Farming Practices',
    excerpt: 'Discover how drone technology, AI, and smart sensors are transforming how we grow food and manage crops at scale.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  },
  {
    cat: 'Organic',
    date: 'March 10, 2025',
    title: 'Benefits of Organic Farming for Soil Health and Environment',
    excerpt: 'Organic farming practices dramatically improve soil biodiversity, reduce chemical runoff, and produce more nutritious crops.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    cat: 'Sustainability',
    date: 'March 5, 2025',
    title: 'Sustainable Agriculture: Feeding the World Responsibly',
    excerpt: 'How sustainable farming methods are being adopted worldwide to meet the demands of a growing global population.',
    img: 'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?w=600&q=80',
  },
];

export default function Blog() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <p className="text-primary font-semibold flex items-center gap-2 mb-4 text-sm uppercase tracking-wide">
              <LeafIcon className="w-4 h-4" />
              Our Latest News &amp; Insights
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              Latest News &amp; Insights
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded text-sm transition-all duration-200 flex-shrink-0"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <article
              key={i}
              className={`group cursor-pointer transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded">
                  {post.cat}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Meta */}
              <p className="text-gray-400 text-xs mb-2 flex items-center gap-2">
                <LeafIcon className="w-3 h-3 text-primary" />
                {post.date}
              </p>

              {/* Title */}
              <h3 className="font-extrabold text-gray-900 text-lg leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Link */}
              <a
                href="#"
                className="group/link inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-3 transition-all duration-200"
              >
                Read More
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

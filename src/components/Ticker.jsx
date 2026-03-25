import { LeafIcon } from './Icons';

const ITEMS = [
  'Crop Rotation Planning',
  'Seed Distribution',
  'Soil Management',
  'Irrigation Management',
  'Detailed Field Reports',
  'Soil Texture Mapping',
  'Pest & Disease Control',
  'Organic Farming',
  'Livestock Solutions',
];

export default function Ticker() {
  return (
    <div className="bg-primary py-4 overflow-hidden select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 35s linear infinite' }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-white/85 font-semibold text-sm"
          >
            <LeafIcon className="w-4 h-4 text-accent flex-shrink-0" />
            {item}
            <span className="text-accent/70 text-lg ml-2">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

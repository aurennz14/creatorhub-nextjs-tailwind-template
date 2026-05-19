import { CheckCircle2 } from 'lucide-react';

const packages = [
  {
    name: 'Dedicated Review',
    price: '$2,500',
    desc: 'Full 10-minute dedicated YouTube video integration with your product.',
    features: ['60-90s dedicated segment', 'Link in description (top 3)', 'Community post shoutout', 'Analytics report after 30 days'],
    popular: false
  },
  {
    name: 'Full Campaign',
    price: '$5,000',
    desc: 'Cross-platform campaign spanning YouTube, Instagram, and Twitter.',
    features: ['Dedicated YouTube video', '3x Instagram Story sequence', '1x Instagram Reel/TikTok', 'Twitter thread feature', 'Full usage rights (30 days)'],
    popular: true
  }
];

export default function RateCard() {
  return (
    <section id="rates" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-16 animate-reveal" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Monetization Engine</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Transparent collaboration packages designed for maximum ROI for brand partners.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <div key={pkg.name} className={`glass-card p-8 relative flex flex-col h-full ag-neon-glow animate-reveal ${pkg.popular ? 'border-blue-500/30 bg-blue-900/5' : ''}`} style={{ animationDelay: `${0.7 + i * 0.2}s` }}>
            {pkg.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-gray-400 text-sm h-10">{pkg.desc}</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">{pkg.price}</span>
              <span className="text-gray-500">/ base</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'} ag-magnetic`}>
              Book Package
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Play } from 'lucide-react';

const projects = [
  { id: 1, title: 'AI Short Videos', category: 'Shorts / Reels ➔', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'The Creator Podcast', category: 'Interviews ➔', img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Urban Photography', category: 'Lifestyle ➔', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 px-6 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-reveal" style={{ animationDelay: '0.4s' }}>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Proof of Work</h2>
          <p className="text-gray-400 max-w-xl">Curated showcase of high-performing content and successful brand integrations.</p>
        </div>
        <button className="mt-6 md:mt-0 text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group transition-colors">
          View Full Portfolio <span className="group-hover:translate-x-1 transition-transform">➔</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <div 
            key={item.id} 
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 cursor-pointer ag-tilt animate-reveal"
            style={{ animationDelay: `${0.5 + index * 0.15}s` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 hover:scale-105" />
            
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="self-end">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white/10 shadow-lg">
                  {item.category}
                </span>
              </div>
              
              <div className="flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
            
            {/* Dark Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

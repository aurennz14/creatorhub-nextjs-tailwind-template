import { BarChart3, Users, TrendingUp, ShieldCheck } from 'lucide-react';

export default function BentoKit() {
  return (
    <section id="media-kit" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-16 animate-reveal" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Value & Statistics</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Showcase your verified analytics directly from social platforms in a clean, professional bento grid layout.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 (Large - 2 cols wide) */}
        <div className="md:col-span-2 glass-card p-8 ag-tilt relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors duration-500"></div>
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-1 text-white"><TrendingUp className="text-blue-500 w-5 h-5"/> Live Performance Analytics</h3>
              <p className="text-gray-400 text-sm">Audience growth across platforms</p>
            </div>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">Last 30 Days</span>
          </div>
          
          <div className="h-48 flex items-end gap-2 mt-4 relative z-10">
            {/* Mock Chart Bars */}
            {[40, 60, 45, 80, 55, 90, 75, 110, 85, 120, 100, 140].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-emerald-600/40 to-emerald-400/80 rounded-t-sm hover:from-emerald-500 hover:to-emerald-300 transition-all duration-300 relative group/bar cursor-pointer shadow-[0_0_10px_rgba(52,211,153,0.2)] hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]" style={{ height: `${height}px` }}>
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-white shadow-lg border border-white/10 z-20">
                    +{height}k
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Box 2 (Medium) */}
        <div className="glass-card p-8 ag-tilt flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-1 text-white"><Users className="text-purple-500 w-5 h-5"/> Performance Metrics</h3>
            <p className="text-gray-400 text-sm">Total verified reach</p>
          </div>
          <div className="mt-6">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ag-counter-up">
              33.8M+
            </div>
            <p className="text-sm text-green-400 font-medium mt-2 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> +12.5% this month
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Avg. Engagement</span>
              <span className="font-bold text-white">8.4%</span>
            </div>
          </div>
        </div>

        {/* Box 3 (Medium) */}
        <div className="glass-card p-8 ag-tilt md:col-span-3 lg:col-span-3">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-white"><ShieldCheck className="text-green-500 w-5 h-5"/> Client Wall</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['Spotify', 'Shopify', 'Nike', 'Adobe', 'Sony', 'RedBull'].map((brand) => (
              <div key={brand} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex items-center justify-center text-gray-500 font-bold hover:text-white hover:border-gray-600 transition-all cursor-default text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

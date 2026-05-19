import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 bg-black relative overflow-hidden border-t border-white/5" id="contact">
      {/* Testimonial Marquee */}
      <div className="w-full overflow-hidden flex border-y border-white/5 bg-gray-900/30 py-6 mb-20 relative before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-black before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-black after:to-transparent after:z-10">
        <div className="animate-marquee flex gap-12 px-6 items-center">
          {/* Duplicate for infinite loop illusion */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-gray-400 font-semibold text-xl tracking-tight whitespace-nowrap">"Incredible ROI on our Q3 campaign." — Nike</span>
              <span className="text-blue-500 font-black">·</span>
              <span className="text-gray-400 font-semibold text-xl tracking-tight whitespace-nowrap">"The easiest creator we've ever worked with." — Spotify</span>
              <span className="text-blue-500 font-black">·</span>
              <span className="text-gray-400 font-semibold text-xl tracking-tight whitespace-nowrap">"Stunning conversion rates." — Sony</span>
              <span className="text-blue-500 font-black">·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-reveal" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to launch a winning campaign?</h2>
            <p className="text-gray-400 text-lg max-w-md">Leave your details below and my management team will be in touch within 24 hours.</p>
          </div>
          
          <div className="glass-card p-8 animate-reveal" style={{ animationDelay: '1s' }}>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" className="bg-black/50 border border-gray-800 focus:border-blue-500 rounded-xl px-5 py-4 text-white outline-none w-full transition-colors" required />
                <input type="email" placeholder="Brand Email" className="bg-black/50 border border-gray-800 focus:border-blue-500 rounded-xl px-5 py-4 text-white outline-none w-full transition-colors" required />
              </div>
              <textarea placeholder="Project Details & Budget" rows={4} className="bg-black/50 border border-gray-800 focus:border-blue-500 rounded-xl px-5 py-4 text-white outline-none w-full transition-colors resize-none" required></textarea>
              <button type="button" className="bg-white hover:bg-gray-200 text-black font-black rounded-xl px-8 py-5 flex items-center justify-center gap-2 transition-all mt-2 group ag-magnetic shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Secure Your Campaign <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="text-center py-6 border-t border-white/5 text-gray-600 text-sm">
        © 2026 AlbertPortfolio. All rights reserved. Built with Next.js & Tailwind.
      </div>
    </footer>
  );
}

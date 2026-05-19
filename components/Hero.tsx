import { ArrowUpRight, Heart, TrendingUp, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 container mx-auto relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        {/* Left Column */}
        <div className="flex flex-col gap-6 max-w-2xl animate-reveal">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Amplify your influence, grow your brand with your exclusive digital portfolio.
          </h1>
          <p className="text-lg text-gray-400 font-medium max-w-lg">
            A premium link-in-bio and media kit tailored for high-end digital content creators, influencers, and agencies to close bigger brand deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-5 py-4 text-white outline-none w-full sm:max-w-xs transition-all placeholder:text-gray-600"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 flex items-center justify-center gap-2 transition-all ag-magnetic group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Get Started | Create Bento Portfolio 
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column (Live Social Stack) */}
        <div className="relative h-[500px] lg:h-[600px] flex justify-center items-center animate-float pl-0 lg:pl-10 w-full">
          
          <div className="relative flex flex-col gap-4 w-full max-w-sm">
            {/* Card 1: Purple */}
            <div className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-5 shadow-[0_0_40px_rgba(139,92,246,0.3)] ag-tilt z-30 transform lg:translate-x-4 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="avatar" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" />
                <div>
                  <h4 className="font-bold text-white flex items-center gap-1">creative_horizons <CheckCircle2 className="w-4 h-4 text-blue-300 fill-blue-500" /></h4>
                  <p className="text-white/80 text-xs font-medium">Business account</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-white/90 text-sm font-semibold">
                <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 fill-white" /> 8,275</span>
                <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4" /> 453</span>
                <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 fill-white" /> 289</span>
              </div>
            </div>

            {/* Card 2: Lime Green */}
            <div className="w-full rounded-2xl bg-gradient-to-r from-lime-400 to-green-400 p-5 shadow-[0_0_30px_rgba(163,230,53,0.2)] ag-tilt z-20 transform lg:-translate-x-2 border border-black/10">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="avatar" className="w-12 h-12 rounded-full border-2 border-black/10 object-cover" />
                <div>
                  <h4 className="font-bold text-black flex items-center gap-1">pixel_perfect_ideas <CheckCircle2 className="w-4 h-4 text-blue-600 fill-white" /></h4>
                  <p className="text-black/70 text-xs font-medium">Business account</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-black/80 text-sm font-bold">
                <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 fill-black" /> 5,785</span>
                <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4" /> 380</span>
                <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 fill-black" /> 1,264</span>
              </div>
            </div>

            {/* Card 3: Glass Dark */}
            <div className="w-full glass-card p-5 shadow-2xl ag-tilt z-10 transform lg:translate-x-6">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="avatar" className="w-12 h-12 rounded-full border-2 border-white/10 object-cover" />
                <div>
                  <h4 className="font-bold text-white flex items-center gap-1">User_name_one <CheckCircle2 className="w-4 h-4 text-gray-400" /></h4>
                  <p className="text-gray-400 text-xs font-medium">Linked in page</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-gray-300 text-sm font-medium">
                <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> 1,547</span>
                <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4" /> 251</span>
                <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> 125</span>
              </div>
            </div>

            {/* Floating tag element */}
            <div className="absolute -bottom-8 -left-4 md:-left-10 glass-card px-5 py-3 flex items-center gap-3 z-40 animate-[float_4s_ease-in-out_infinite_reverse]">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              <span className="text-sm font-bold text-white tracking-wide">Live syncing data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

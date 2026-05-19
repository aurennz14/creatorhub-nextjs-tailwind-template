import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          AlbertPortfolio
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#media-kit" className="hover:text-white transition-colors">Media Kit</Link>
          <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="#rates" className="hover:text-white transition-colors">Rates</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors ag-magnetic">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

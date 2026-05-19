import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoKit from '@/components/BentoKit';
import PortfolioGrid from '@/components/PortfolioGrid';
import RateCard from '@/components/RateCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <BentoKit />
      <PortfolioGrid />
      <RateCard />
      <Footer />
    </main>
  );
}

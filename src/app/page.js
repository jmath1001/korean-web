import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Hero />
      <Services />
      <PortfolioGrid />
      <TestimonialCarousel />
      <ContactCTA />
    </main>
  );
}
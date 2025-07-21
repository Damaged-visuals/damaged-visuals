import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Index;

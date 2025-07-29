import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ClientsSection from '@/components/ClientsSection';
import ReviewsSection from '@/components/ReviewsSection';
import StreamerPricingSection from '@/components/StreamerPricingSection';
import ClothingBrandsPricingSection from '@/components/ClothingBrandsPricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ClientsSection />
      <ReviewsSection />
      <StreamerPricingSection />
      <ClothingBrandsPricingSection />
      <Footer />
    </div>
  );
};

export default Index;

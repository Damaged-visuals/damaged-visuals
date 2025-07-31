import Navigation from '@/components/Navigation';
import StreamerPricingSection from '@/components/StreamerPricingSection';
import ClothingBrandsPricingSection from '@/components/ClothingBrandsPricingSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <StreamerPricingSection />
        <ClothingBrandsPricingSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
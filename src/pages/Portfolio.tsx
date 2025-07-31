import Navigation from '@/components/Navigation';
import ClientsSection from '@/components/ClientsSection';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ClientsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
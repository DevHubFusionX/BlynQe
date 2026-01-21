import HeroSection from '../components/sections/HeroSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AppDownloadSection from '../components/sections/AppDownloadSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <CTASection />
    </div>
  );
};

export default Home;

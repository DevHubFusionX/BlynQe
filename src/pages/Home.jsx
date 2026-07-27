import HeroSection from '../components/sections/HeroSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AppDownloadSection from '../components/sections/AppDownloadSection';
import CTASection from '../components/sections/CTASection';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <ScrollAnimatedSection id="why-us">
        <WhyChooseSection />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection id="how-it-works">
        <HowItWorksSection />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection id="testimonials">
        <TestimonialsSection />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection id="app-download">
        <AppDownloadSection />
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection id="cta">
        <CTASection />
      </ScrollAnimatedSection>
    </div>
  );
};

export default Home;

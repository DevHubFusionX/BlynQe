import { Heart, Users, Shield, Sparkles } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const About = () => {
  const stats = [
    { label: "Active Humans", value: "50K+", icon: Users },
    { label: "Real Matches", value: "12K+", icon: Heart },
    { label: "Success Rate", value: "85%", icon: Sparkles },
    { label: "Verified Safe", value: "100%", icon: Shield }
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <ScrollAnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
            <div className="space-y-8">
              <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs lg:text-sm">
                Our Mission
              </span>
              <h1 className="text-4xl lg:text-8xl font-black text-brand-dark tracking-tight leading-[0.95]">
                Human first. <br />
                <span className="text-brand-orange">Algorithms second.</span>
              </h1>
              <p className="text-lg lg:text-xl text-brand-grey leading-relaxed">
                We started blynQe because we were tired of the shallow, swipe-driven culture of modern dating. We believe that technology should bring us closer to our real selves, not further away.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&h=1000&fit=crop"
                  alt="Happy people connecting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-8 rounded-[2.5rem] shadow-xl rotate-12 hidden lg:block">
                <Heart className="w-12 h-12 fill-current" />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Stats Grid */}
        <ScrollAnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mb-24 lg:mb-32">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] text-center border border-brand-orange/5 shadow-xl shadow-brand-orange/5">
                  <div className="bg-brand-orange-light w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-brand-orange" />
                  </div>
                  <div className="text-2xl lg:text-4xl font-black text-brand-dark mb-1 lg:mb-2">{stat.value}</div>
                  <div className="text-[10px] lg:text-xs text-brand-grey uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </ScrollAnimatedSection>

        {/* Content Section */}
        <ScrollAnimatedSection>
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-black text-brand-dark text-center">Beyond the swipe.</h2>
              <p className="text-brand-grey text-lg lg:text-xl text-center leading-relaxed">
                In a world of filters and curated perfection, we value the raw and the real. blynQe isn't just an app—it's a community of humans looking for something deeper.
              </p>
            </div>

            <div className="bg-brand-orange-light rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl lg:text-4xl font-black text-brand-dark">Built with love in SF.</h3>
                <p className="text-brand-grey lg:text-lg leading-relaxed">
                  Our diverse team of psychologists, designers, and engineers work together to ensure that every feature we build serves one purpose: fostering genuine human connection.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" className="rounded-2xl lg:rounded-[2rem] shadow-lg" alt="Team member" />
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" className="rounded-2xl lg:rounded-[2rem] shadow-lg translate-y-8" alt="Team member" />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

      </div>
    </div>
  );
};

export default About;

import { useEffect, useRef, useState } from 'react';
import { UserCheck, Heart, Shield, Sparkles } from 'lucide-react';

const WhyChooseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

  const features = [
    {
      icon: UserCheck,
      title: "Human Connection",
      description: "We focus on what makes you unique—your values, your story, and your real self. No filters, no facades.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      color: "from-orange-500/80 to-red-500/80"
    },
    {
      icon: Heart,
      title: "Intentionality First",
      description: "Our platform is designed to discourage shallow swiping in favor of depth. Every interaction is meaningful.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop",
      color: "from-pink-500/80 to-rose-500/80"
    },
    {
      icon: Shield,
      title: "Authentic Only",
      description: "Join a verified community that values vulnerability and genuine respect. Real people, real connections.",
      image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=800&h=1000&fit=crop",
      color: "from-emerald-500/80 to-teal-500/80"
    },
    {
      icon: Sparkles,
      title: "Built for Depth",
      description: "We don't just match profiles—we foster the beginning of lifelong human journeys through guided interactions.",
      image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800&h=1000&fit=crop",
      color: "from-violet-500/80 to-purple-500/80"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY - sectionTop + window.innerHeight / 2;
      const itemHeight = sectionRef.current.offsetHeight / features.length;

      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollPosition / itemHeight)),
        features.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section ref={sectionRef} className="relative bg-brand-dark">
      {/* Desktop: Sticky Scroll Layout */}
      <div className="hidden lg:block">
        <div className="flex min-h-[400vh]">
          {/* Left: Sticky Image */}
          <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center p-12">
            <div className="relative w-full h-[80vh] rounded-[3rem] overflow-hidden">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color}`} />
                </div>
              ))}

              {/* Feature Counter */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-white' : 'bg-white/20'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="w-1/2 flex flex-col">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="h-screen flex items-center px-16"
                >
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-4 bg-white/10 px-6 py-3 rounded-full">
                      <Icon className="w-6 h-6 text-brand-orange" />
                      <span className="text-white/60 font-bold uppercase tracking-widest text-sm">
                        0{index + 1} / 0{features.length}
                      </span>
                    </div>
                    <h3 className="text-6xl font-black text-white leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-2xl text-white/60 leading-relaxed max-w-lg">
                      {feature.description}
                    </p>
                    <button className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-orange/20">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Grid Cards with Background Images */}
      <div className="lg:hidden py-20 px-6">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Why blynQe?
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Human-centered <br />
            <span className="text-brand-orange">dating.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative h-[300px] rounded-[2rem] overflow-hidden group"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color}`} />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

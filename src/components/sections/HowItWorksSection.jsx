import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('app-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: "1",
      title: "The Profile",
      description: "We review with both behavioral intake and personal alignment tools to uncover the real nuances of your character and values."
    },
    {
      number: "2",
      title: "The Match",
      description: "Our algorithm works quietly to match you with users who share genuine alignment in goals, lifestyle, and relationship intents."
    },
    {
      number: "3",
      title: "The Introduction",
      description: "No cold opens. Guided conversation prompts and icebreakers ensure a natural flow and zero awkward silence."
    },
    {
      number: "4",
      title: "The Connection",
      description: "Move from digital chat to the real world. We help plan your first meetup in a safe, comfortable, and memorable offline setting."
    }
  ];

  return (
    <section 
      className="relative py-24 lg:py-36 bg-brand-dark text-white font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-24">
          
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start justify-between">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-10">
              A path to <br />
              something real.
            </h2>
            
            {/* Split CTA Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={scrollToDownload}
                className="bg-[#2D2A26] hover:bg-[#3D3A36] text-white px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Begin Journey
              </button>
              <button 
                onClick={scrollToDownload}
                className="w-12 h-12 rounded-full bg-[#2D2A26] hover:bg-[#3D3A36] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: Narrative Description paragraphs */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:justify-end">
            <p className="text-white/70 text-lg font-light leading-relaxed max-w-lg">
              We start with the real you. Our behavioral intake captures the nuances of your personality and values, moving past surface-level swiping.
            </p>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-lg">
              It's not just about passing matching tests. It's about designing a serene, intentional space where genuine human depth can flourish.
            </p>
          </div>

        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            if (isLast) {
              // Highlighted Cream Card for step 4
              return (
                <div 
                  key={index}
                  className="p-8 rounded-3xl min-h-[380px] flex flex-col justify-between bg-[#E5E2DD] border border-transparent text-brand-dark transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-black/10"
                >
                  <div>
                    <div className="text-[5rem] lg:text-[5.5rem] font-bold leading-none text-brand-dark/95 mb-2 select-none">
                      {step.number}
                    </div>
                    <hr className="border-brand-dark/15 mb-6" />
                    <h4 className="text-xl font-bold tracking-tight text-brand-dark mb-3">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-brand-dark/75 text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            }

            // Dark Charcoal Cards for steps 1, 2, 3
            return (
              <div 
                key={index}
                className="p-8 rounded-3xl min-h-[380px] flex flex-col justify-between bg-[#1C1814] border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:border-white/10"
              >
                <div>
                  <div className="text-[5rem] lg:text-[5.5rem] font-bold leading-none text-white/90 mb-2 select-none">
                    {step.number}
                  </div>
                  <hr className="border-white/10 mb-6" />
                  <h4 className="text-xl font-bold tracking-tight text-white mb-3">
                    {step.title}
                  </h4>
                </div>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

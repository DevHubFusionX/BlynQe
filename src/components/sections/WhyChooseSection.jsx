import { Link } from 'lucide-react';

const WhyChooseSection = () => {
  const scrollToHow = () => {
    const howSection = document.getElementById('how-it-works');
    if (howSection) {
      howSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-24 bg-brand-bg font-sans overflow-hidden border-y border-neutral-100/60"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Real connections. <br />
            Without the endless search.
          </h2>
          <p className="text-base sm:text-lg text-brand-grey font-light leading-relaxed mb-6">
            We redesigned dating to focus on depth. BlynQe uses values-based behavior and paced, guided introductions to help you meet people who align with your goals.
          </p>
          <button 
            onClick={scrollToHow}
            className="text-[#0066FE] hover:text-[#0055D0] font-semibold text-sm inline-flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Learn more about BlynQe</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card: Guided Introductions */}
          <div className="bg-white border border-neutral-100 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between shadow-sm min-h-[500px] transition-all hover:shadow-md">
            
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                Guided Introductions
              </span>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Meet matches where they're comfortable.
              </h3>
              <p className="text-brand-grey text-sm font-light leading-relaxed mb-6">
                A structured icebreaker bubble appears when both users connect. Skip the dry, generic greetings and jump straight into deep conversations about things that matter.
              </p>
              <button 
                onClick={scrollToHow}
                className="text-[#0066FE] hover:text-[#0055D0] font-semibold text-xs inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Explore our conversation prompts</span>
                <span>&gt;</span>
              </button>
            </div>

            {/* In-app illustration box */}
            <div className="bg-[#F8F9FA] border border-neutral-100/50 rounded-2xl p-6 mt-8 flex flex-col items-center justify-center min-h-[180px] shadow-inner">
              <div className="bg-[#1C1814] text-white text-[11px] px-5 py-3 rounded-full shadow-md font-medium mb-3 select-none">
                Ready for your first topic?
              </div>
              <div className="bg-[#120E0A] text-white text-[11px] px-5 py-3 rounded-full shadow-md font-bold flex items-center gap-2 border border-white/10 select-none">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                <span>Start conversation</span>
              </div>
            </div>

          </div>

          {/* Right Card: Offline Coordinates */}
          <div className="bg-white border border-neutral-100 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between shadow-sm min-h-[500px] transition-all hover:shadow-md">
            
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                Offline Coordinates
              </span>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Plan a meet. Land on a date.
              </h3>
              <p className="text-brand-grey text-sm font-light leading-relaxed mb-6">
                We help transition digital chemistry to real-world connection. Safely coordinate coffee, walks, or dinners at curated, comfortable local spots.
              </p>
              <button 
                onClick={scrollToHow}
                className="text-[#0066FE] hover:text-[#0055D0] font-semibold text-xs inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Learn about date safety features</span>
                <span>&gt;</span>
              </button>
            </div>

            {/* Magic Link illustration box */}
            <div className="bg-[#F8F9FA] border border-neutral-100/50 rounded-2xl p-6 mt-8 flex flex-col justify-center min-h-[180px] shadow-inner">
              <div className="bg-white border border-neutral-200/50 rounded-xl p-4 w-full shadow-sm flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-neutral-500 font-mono select-none">
                    go.blynqe.com/coords/blue-bottle
                  </span>
                  <span className="text-[9px] bg-green-50 text-green-600 font-bold px-2 py-0.5 rounded-full select-none">
                    Curated
                  </span>
                </div>
                <div className="text-[10px] text-neutral-400 font-light text-left leading-relaxed">
                  Coordinated meetup at Blue Bottle Coffee in Brooklyn.
                </div>
                <div className="flex gap-2 text-[9px] text-neutral-400/80 font-mono select-none">
                  <span>#Coffee</span>
                  <span>#Curated</span>
                  <span>#Verified</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;

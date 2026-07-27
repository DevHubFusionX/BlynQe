import { ChevronRight, Heart } from 'lucide-react';

const CTASection = () => {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('app-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 lg:py-36 bg-white text-brand-dark font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Text & Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#120E0A] leading-tight mb-6">
              See it running on <br />
              your phone. Free.
            </h2>
            <p className="text-base sm:text-lg text-brand-grey font-light leading-relaxed max-w-xl mb-10">
              Download the app and complete your profile. We'll match you based on values and guide you through real workflows inside the app. No superficial swiping required.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={scrollToDownload}
                className="bg-[#FF7A00] hover:bg-[#E06B00] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-orange-500/10 cursor-pointer"
              >
                Download App &rarr;
              </button>
              <button 
                onClick={scrollToDownload}
                className="text-brand-dark hover:underline font-semibold text-sm cursor-pointer"
              >
                How it works
              </button>
            </div>
          </div>

          {/* Right Column: Floating Matchmaking Dialog Box (Mock UI) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg flex flex-col gap-3">
              
              {/* Top Pill Strip */}
              <div className="bg-[#1C1814] text-white p-4 rounded-2xl flex items-center justify-between shadow-xl border border-white/5 cursor-pointer hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#FF7A00] flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-white/95">Why did Sophia match with you?</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </div>

              {/* Detailed Matching Content Box */}
              <div className="bg-[#1C1814] text-white p-6 rounded-3xl shadow-2xl border border-white/5 flex flex-col gap-6">
                
                {/* Core Description Text */}
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Sophia from Brooklyn shares 94% alignment in your core behavioral intake. Her PO (Perspective on Outgoingness) and values scores align perfectly. Both rules in your intentional matching paused to recommend this manual introduction. Nothing else matches this well.
                </p>

                {/* Interaction Tags/Chips */}
                <div className="flex flex-wrap gap-2.5">
                  <button className="bg-white/5 hover:bg-white/10 text-white/90 text-xs px-4 py-2 rounded-full font-medium border border-white/5 transition-colors cursor-pointer">
                    How values alignment works
                  </button>
                  <button className="bg-white/5 hover:bg-white/10 text-white/90 text-xs px-4 py-2 rounded-full font-medium border border-white/5 transition-colors cursor-pointer">
                    Start guided introduction
                  </button>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/5 w-full" />

                {/* Footer Toolbar */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Powered by blynQe</span>
                  <button className="bg-[#2D2A26] hover:bg-[#3D3A36] text-white text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/5 shadow-md">
                    <span>Got it</span>
                    <span className="text-brand-orange">✓</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

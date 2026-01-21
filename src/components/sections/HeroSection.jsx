import { Mail, Send, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('app-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Mobile: Background Image */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1200&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/90" />
      </div>

      {/* Desktop: Regular Background */}
      <div className="hidden lg:block absolute inset-0 bg-brand-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm">
                Human-Centered Dating
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white lg:text-brand-dark leading-[0.95] tracking-tight">
                Find love <br />
                <span className="text-brand-orange">authentically.</span>
              </h1>
              <p className="text-lg text-white/80 lg:text-brand-grey max-w-lg mx-auto lg:mx-0 leading-relaxed">
                A dating app built for real connections. No games, no filters—just genuine humans looking for meaningful relationships.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToDownload}
                className="flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-brand-orange/20"
              >
                <Download className="w-5 h-5" />
                Download Free
              </button>
              <button className="text-white lg:text-brand-dark font-semibold px-6 py-4 hover:text-brand-orange transition-colors">
                Learn More →
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-white lg:text-brand-dark">500K+</div>
                <div className="text-xs text-white/60 lg:text-brand-grey uppercase tracking-wider font-semibold">Downloads</div>
              </div>
              <div className="w-px h-10 bg-white/20 lg:bg-brand-orange/20" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-brand-orange">4.9</div>
                <div className="text-xs text-white/60 lg:text-brand-grey uppercase tracking-wider font-semibold">App Rating</div>
              </div>
              <div className="w-px h-10 bg-white/20 lg:bg-brand-orange/20" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-white lg:text-brand-dark">50+</div>
                <div className="text-xs text-white/60 lg:text-brand-grey uppercase tracking-wider font-semibold">Countries</div>
              </div>
            </div>
          </div>

          {/* Desktop: Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=1600&fit=crop"
                alt="Authentic human connection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white px-6 py-3 rounded-2xl font-bold shadow-xl rotate-12 z-20">
              #1 Dating App
            </div>

            {/* Glass Card */}
            <div className="absolute -bottom-6 -left-6 z-20 w-72">
              <div className="backdrop-blur-xl bg-white/80 p-5 rounded-2xl border border-white/50 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-orange">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark text-sm">New Match!</div>
                    <div className="text-xs text-brand-grey">You and Sarah connected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

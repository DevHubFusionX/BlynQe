import { Link } from 'react-router-dom';
import { Sparkles, Heart, Download } from 'lucide-react';

const CTASection = () => {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('app-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden bg-brand-dark">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 lg:w-96 h-48 lg:h-96 bg-brand-orange rounded-full blur-[80px] lg:blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 lg:w-96 h-48 lg:h-96 bg-brand-red rounded-full blur-[80px] lg:blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 lg:px-6 py-2 lg:py-3 rounded-full mb-6 lg:mb-10">
          <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-brand-orange" />
          <span className="text-white font-bold text-xs lg:text-sm uppercase tracking-widest">Start your journey</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-[7rem] leading-[0.9] font-black text-white mb-6 lg:mb-10 tracking-tighter">
          Ready to meet <br />
          <span className="text-brand-orange">real humans?</span>
        </h2>

        <p className="text-base lg:text-2xl text-gray-400 mb-8 lg:mb-14 max-w-xl mx-auto leading-relaxed">
          Join 50,000+ members finding real connections on blynQe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToDownload}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full text-base lg:text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-brand-orange/20"
          >
            <Download className="w-5 h-5 lg:w-6 lg:h-6" />
            Download App
          </button>

          <Link
            to="/safety"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full text-base lg:text-xl font-bold hover:bg-white/10 transition-all border border-white/10"
          >
            Learn More
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Daily Matches", value: "12K+" },
            { label: "Success Stories", value: "8K+" },
            { label: "Trust Score", value: "4.9/5" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl lg:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

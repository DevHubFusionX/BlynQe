const HowItWorksSection = () => {
  const steps = [
    { number: "1", title: "Sign Up", brief: "Create your profile" },
    { number: "2", title: "Match", brief: "Find compatible humans" },
    { number: "3", title: "Chat", brief: "Meaningful conversations" },
    { number: "4", title: "Meet", brief: "Real relationships" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-bg">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs lg:text-sm mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-6xl font-black text-brand-dark tracking-tight">
            Four simple steps
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: Horizontal Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-brand-orange/20" />

          {/* Mobile: Vertical Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-brand-orange/20" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex md:flex-col items-center md:text-center gap-6 md:gap-0">
                {/* Circle */}
                <div className="relative z-10 shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/10 md:mx-auto md:mb-6">
                  <span className="text-xl md:text-3xl font-black text-brand-orange">{step.number}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-1">{step.title}</h3>
                  <p className="text-brand-grey text-sm">{step.brief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="bg-brand-orange text-white px-8 py-3 lg:px-10 lg:py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-brand-orange/20">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

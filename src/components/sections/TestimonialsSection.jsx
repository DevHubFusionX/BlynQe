import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah",
      quote: "even my friends noticed i was spending less time on dating apps and more time actually going out"
    },
    {
      name: "Lucas",
      quote: "feels like a breath of fresh air between you and the infinite swipe loops... rare to see dating apps this intentional anymore"
    },
    {
      name: "David",
      quote: "it's a beautiful concept paired with a beautiful app that helps you honor your search for depth... met someone amazing here"
    }
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#EDEDED] text-brand-dark font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Heading and Rating */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Stars & Text Rating */}
            <div className="flex items-center gap-2">
              <span className="text-brand-dark tracking-wider text-sm select-none">★★★★★</span>
              <span className="text-xs font-bold text-brand-dark/90">5.0</span>
              <span className="text-xs text-brand-dark/45">(48)</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-tight mb-8 mt-4">
              People put their <br />
              phone down.
            </h2>

            <button className="bg-white hover:bg-neutral-100 text-brand-dark px-6 py-3 rounded-full font-bold text-xs tracking-wider transition-colors shadow-sm cursor-pointer">
              See all reviews
            </button>
          </div>

          {/* Right Column: Interactive CSS Vinyl Record */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="relative w-64 h-64 lg:w-[350px] lg:h-[350px] rounded-full bg-[#120E0A] flex items-center justify-center shadow-2xl animate-[spin_25s_linear_infinite] overflow-hidden">
              
              {/* Concentric Vinyl Grooves */}
              <div className="absolute inset-[5%] rounded-full border border-white/[0.04]" />
              <div className="absolute inset-[15%] rounded-full border border-white/[0.04]" />
              <div className="absolute inset-[25%] rounded-full border border-white/[0.04]" />
              <div className="absolute inset-[35%] rounded-full border border-white/[0.04]" />
              <div className="absolute inset-[45%] rounded-full border border-white/[0.04]" />

              {/* Center Vinyl Label */}
              <div className="absolute inset-[35%] rounded-full bg-[#FFF3E8] border-[6px] lg:border-[8px] border-[#120E0A] flex items-center justify-center shadow-inner">
                {/* Spindle hole */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#120E0A]" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Testimonials Deck */}
        <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-neutral-300/40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex flex-col justify-between min-h-[160px] pt-6 lg:pt-0 ${
                  index === 0 
                    ? 'lg:pr-8 lg:pt-0' 
                    : index === 1 
                      ? 'lg:px-8' 
                      : 'lg:pl-8'
                }`}
              >
                <div>
                  <span className="text-brand-dark tracking-wider text-xs select-none block mb-4">★★★★★</span>
                  <p className="text-base lg:text-lg font-normal text-brand-dark leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <span className="text-xs text-brand-dark/40 font-medium block mt-6">
                  {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah & Mike",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&h=200&fit=crop",
      text: "We matched on blynQe 6 months ago and now we're engaged!",
      rating: 5,
      tag: "Engaged"
    },
    {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "Finally, a dating app that focuses on real connections.",
      rating: 5,
      tag: "Found Love"
    },
    {
      name: "David & Lisa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "The verification process made me feel safe.",
      rating: 5,
      tag: "Perfect Match"
    }
  ];

  return (
    <section className="py-16 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <span className="text-brand-red font-bold tracking-widest uppercase text-xs lg:text-sm mb-3 block">
            Real Stories
          </span>
          <h2 className="text-3xl lg:text-7xl font-bold text-brand-dark tracking-tight">
            Success <span className="text-brand-orange">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-brand-orange-light/50 p-6 lg:p-10 rounded-2xl lg:rounded-[3rem] border border-brand-orange/5 hover:bg-white hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-500 relative">
              <Quote className="absolute top-6 right-6 lg:top-8 lg:right-8 w-8 h-8 lg:w-12 lg:h-12 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors" />

              <div className="flex items-center gap-4 mb-6 lg:mb-8">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl object-cover ring-4 ring-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 bg-brand-orange text-white text-[8px] lg:text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                    {testimonial.tag}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-base lg:text-xl">{testimonial.name}</h4>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-brand-grey text-sm lg:text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

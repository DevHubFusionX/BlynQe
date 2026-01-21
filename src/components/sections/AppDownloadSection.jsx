const AppDownloadSection = () => {
    return (
        <section id="app-download" className="py-16 lg:py-32 bg-brand-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-brand-orange/10 rounded-full blur-[100px] lg:blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[200px] lg:w-[500px] h-[200px] lg:h-[500px] bg-brand-red/10 rounded-full blur-[100px] lg:blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs lg:text-sm">
                                Take blynQe Everywhere
                            </span>
                            <h2 className="text-3xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
                                Download the <span className="text-brand-orange">app.</span>
                            </h2>
                            <p className="text-base lg:text-xl text-gray-400 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Your next meaningful connection is just a tap away.
                            </p>
                        </div>

                        {/* Download Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <a href="#" className="group flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-xl">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-dark fill-current">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Download on</div>
                                    <div className="text-lg font-black text-brand-dark -mt-1">App Store</div>
                                </div>
                            </a>

                            <a href="#" className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-all">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Get it on</div>
                                    <div className="text-lg font-black text-white -mt-1">Google Play</div>
                                </div>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6 lg:gap-12 justify-center lg:justify-start pt-4">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl lg:text-4xl font-black text-white">4.9</div>
                                <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-bold">Rating</div>
                            </div>
                            <div className="w-px h-8 lg:h-12 bg-white/10" />
                            <div className="text-center lg:text-left">
                                <div className="text-2xl lg:text-4xl font-black text-brand-orange">500K+</div>
                                <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-bold">Downloads</div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup Side */}
                    <div className="relative flex justify-center order-1 lg:order-2">
                        <div className="relative">
                            <div className="w-[200px] lg:w-[320px] h-[400px] lg:h-[650px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] lg:rounded-[3rem] p-2 lg:p-3 shadow-2xl">
                                <div className="w-full h-full bg-brand-dark rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=800&fit=crop"
                                        alt="blynQe App Preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* Floating Badge - Hidden on mobile */}
                            <div className="hidden lg:block absolute -top-6 -right-6 bg-brand-orange text-white px-6 py-3 rounded-2xl font-bold shadow-xl rotate-12">
                                #1 Dating App
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;

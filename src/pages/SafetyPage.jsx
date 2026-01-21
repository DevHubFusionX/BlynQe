import { Shield, CheckCircle, Lock, Eye, Flag, UserCheck } from 'lucide-react';

const SafetyPage = () => {
    const safetyFeatures = [
        {
            icon: UserCheck,
            title: "Photo Verification",
            description: "AI-powered verification ensures everyone is real."
        },
        {
            icon: Shield,
            title: "Profile Screening",
            description: "Our team reviews all profiles before they go live."
        },
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "Your messages are protected with military-grade encryption."
        },
        {
            icon: Flag,
            title: "Easy Reporting",
            description: "Report concerns with one tap. We review within 24 hours."
        },
        {
            icon: Eye,
            title: "Incognito Mode",
            description: "Browse privately without appearing in search results."
        },
        {
            icon: CheckCircle,
            title: "Block & Unmatch",
            description: "Instantly block any user with full protection."
        }
    ];

    return (
        <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-20">
                    <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs lg:text-sm mb-3 block">
                        Your Safety Matters
                    </span>
                    <h1 className="text-4xl lg:text-8xl font-black text-brand-dark tracking-tight leading-[0.95] mb-4 lg:mb-6">
                        Safe <span className="text-brand-orange">dating.</span>
                    </h1>
                    <p className="text-base lg:text-xl text-brand-grey max-w-md mx-auto">
                        We built blynQe with your safety as our top priority.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-2 lg:gap-6 mb-12 lg:mb-20">
                    {['SOC 2', 'GDPR', '256-bit SSL', '24/7'].map((badge, i) => (
                        <div key={i} className="bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-full border border-brand-orange/10 font-bold text-brand-dark text-xs lg:text-sm">
                            ✓ {badge}
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-12 lg:mb-20">
                    {safetyFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-white p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border border-brand-orange/5 hover:shadow-xl transition-all">
                                <div className="bg-brand-orange-light w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
                                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-brand-orange" />
                                </div>
                                <h3 className="text-lg lg:text-2xl font-bold text-brand-dark mb-2 lg:mb-4">{feature.title}</h3>
                                <p className="text-brand-grey text-sm lg:text-base leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Safety Tips */}
                <div className="bg-brand-dark rounded-2xl lg:rounded-[3rem] p-6 lg:p-16 text-center">
                    <h2 className="text-2xl lg:text-4xl font-black text-white mb-6 lg:mb-8">Safety Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
                        {[
                            { title: "Never share financial info", desc: "We never ask for bank details." },
                            { title: "Meet in public places", desc: "Choose busy, public locations." },
                            { title: "Tell a friend", desc: "Let someone know your plans." }
                        ].map((tip, i) => (
                            <div key={i} className="space-y-2">
                                <div className="text-brand-orange font-bold text-sm lg:text-base">{tip.title}</div>
                                <p className="text-gray-400 text-sm">{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyPage;

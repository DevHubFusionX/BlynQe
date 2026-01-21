import { Check, X, Sparkles, Crown, Zap } from 'lucide-react';

const PricingPage = () => {
    const scrollToDownload = () => {
        const downloadSection = document.getElementById('app-download');
        if (downloadSection) {
            downloadSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#app-download';
        }
    };

    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "Get started",
            icon: Zap,
            color: "bg-brand-grey",
            features: [
                { name: "Create profile", included: true },
                { name: "Browse members", included: true },
                { name: "5 likes per day", included: true },
                { name: "Unlimited messaging", included: false },
                { name: "See who likes you", included: false }
            ]
        },
        {
            name: "Premium",
            price: "$19",
            period: "/month",
            description: "Most popular",
            icon: Sparkles,
            color: "bg-brand-orange",
            popular: true,
            features: [
                { name: "Everything in Free", included: true },
                { name: "Unlimited likes", included: true },
                { name: "See who likes you", included: true },
                { name: "Unlimited messaging", included: true },
                { name: "1 weekly boost", included: true }
            ]
        },
        {
            name: "VIP",
            price: "$39",
            period: "/month",
            description: "Ultimate experience",
            icon: Crown,
            color: "bg-brand-dark",
            features: [
                { name: "Everything in Premium", included: true },
                { name: "Unlimited boosts", included: true },
                { name: "Priority support", included: true },
                { name: "Verified badge", included: true },
                { name: "Incognito mode", included: true }
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-20">
                    <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs lg:text-sm mb-3 block">
                        Simple Pricing
                    </span>
                    <h1 className="text-4xl lg:text-8xl font-black text-brand-dark tracking-tight leading-[0.95] mb-4 lg:mb-6">
                        Find your <span className="text-brand-orange">plan.</span>
                    </h1>
                    <p className="text-base lg:text-xl text-brand-grey max-w-md mx-auto">
                        Start free, upgrade when you're ready.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl lg:rounded-[3rem] p-6 lg:p-10 border-2 ${plan.popular ? 'border-brand-orange shadow-xl lg:shadow-2xl shadow-brand-orange/20 md:scale-105' : 'border-transparent'
                                    } transition-all`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                                        Popular
                                    </div>
                                )}

                                <div className={`${plan.color} w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-8`}>
                                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                </div>

                                <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-1">{plan.name}</h3>
                                <p className="text-brand-grey text-sm mb-4 lg:mb-6">{plan.description}</p>

                                <div className="mb-6 lg:mb-8">
                                    <span className="text-3xl lg:text-5xl font-black text-brand-dark">{plan.price}</span>
                                    <span className="text-brand-grey text-sm lg:text-base">{plan.period}</span>
                                </div>

                                <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 lg:gap-3">
                                            {feature.included ? (
                                                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-brand-success shrink-0" />
                                            ) : (
                                                <X className="w-4 h-4 lg:w-5 lg:h-5 text-brand-grey/30 shrink-0" />
                                            )}
                                            <span className={`text-sm lg:text-base ${feature.included ? 'text-brand-dark' : 'text-brand-grey/50'}`}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={scrollToDownload}
                                    className={`w-full py-3 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-sm lg:text-lg transition-all ${plan.popular
                                            ? 'bg-brand-orange text-white hover:scale-105 shadow-lg shadow-brand-orange/20'
                                            : 'bg-brand-bg text-brand-dark hover:bg-brand-orange-light'
                                        }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;

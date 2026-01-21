import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('general');

    const categories = [
        { id: 'general', name: 'General' },
        { id: 'account', name: 'Account' },
        { id: 'matching', name: 'Matching' },
        { id: 'billing', name: 'Billing' }
    ];

    const faqs = {
        general: [
            {
                question: "What is blynQe?",
                answer: "blynQe is a human-centered dating app for meaningful relationships."
            },
            {
                question: "How is blynQe different?",
                answer: "We use value-based matching for deeper compatibility."
            },
            {
                question: "Is it available in my country?",
                answer: "blynQe is available in 50+ countries worldwide."
            }
        ],
        account: [
            {
                question: "How do I create an account?",
                answer: "Download the app and follow the guided profile creation."
            },
            {
                question: "Can I have multiple accounts?",
                answer: "No, each person is limited to one account."
            },
            {
                question: "How do I delete my account?",
                answer: "Go to Settings > Account > Delete Account."
            }
        ],
        matching: [
            {
                question: "How does matching work?",
                answer: "Our algorithm considers values, communication style, and goals."
            },
            {
                question: "Why am I not getting matches?",
                answer: "Complete your profile fully and be active on the app."
            },
            {
                question: "Can I undo a swipe?",
                answer: "Premium and VIP members can undo their last swipe."
            }
        ],
        billing: [
            {
                question: "What payment methods?",
                answer: "We accept cards, PayPal, Apple Pay, and Google Pay."
            },
            {
                question: "Can I cancel anytime?",
                answer: "Yes, cancel from account settings with no penalty."
            },
            {
                question: "Do you offer refunds?",
                answer: "7-day money-back guarantee for first-time subscribers."
            }
        ]
    };

    return (
        <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 bg-brand-bg">
            <div className="max-w-4xl mx-auto px-4 lg:px-6">
                {/* Header */}
                <div className="text-center mb-10 lg:mb-16">
                    <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs lg:text-sm mb-3 block">
                        Help Center
                    </span>
                    <h1 className="text-4xl lg:text-8xl font-black text-brand-dark tracking-tight mb-3 lg:mb-6">
                        FAQ
                    </h1>
                    <p className="text-base lg:text-xl text-brand-grey">
                        Everything you need to know.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                            className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-bold text-xs lg:text-sm transition-all ${activeCategory === cat.id
                                    ? 'bg-brand-orange text-white'
                                    : 'bg-white text-brand-dark hover:bg-brand-orange-light'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="space-y-3 lg:space-y-4">
                    {faqs[activeCategory].map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl lg:rounded-2xl overflow-hidden border border-brand-orange/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 lg:p-6 text-left"
                            >
                                <span className="text-sm lg:text-lg font-bold text-brand-dark pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 lg:w-6 lg:h-6 text-brand-orange shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-brand-grey text-sm lg:text-base leading-relaxed border-t border-brand-orange/5 pt-3 lg:pt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 lg:mt-16 text-center bg-brand-orange-light p-8 lg:p-12 rounded-2xl lg:rounded-[3rem]">
                    <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3 lg:mb-4">Still have questions?</h3>
                    <p className="text-brand-grey text-sm lg:text-base mb-4 lg:mb-6">Our support team is happy to help.</p>
                    <a
                        href="mailto:support@blynqe.com"
                        className="inline-block bg-brand-orange text-white px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-sm lg:text-base hover:scale-105 transition-all"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;

const PrivacyPage = () => {
    const sections = [
        {
            title: "Information We Collect",
            content: "We collect information you provide directly, including your name, email, photos, and profile information. We also collect usage data to improve our services."
        },
        {
            title: "How We Use Your Information",
            content: "Your information is used to provide and improve our dating services, match you with compatible users, and communicate important updates."
        },
        {
            title: "Information Sharing",
            content: "We never sell your personal data. We only share information with your consent, to comply with legal obligations, or to protect our users."
        },
        {
            title: "Data Security",
            content: "We use industry-standard encryption and security measures to protect your data. All messages are end-to-end encrypted."
        },
        {
            title: "Your Rights",
            content: "You can access, update, or delete your data at any time. Contact us at privacy@blynqe.com for any privacy-related requests."
        },
        {
            title: "Cookies",
            content: "We use essential cookies for app functionality and analytics cookies to understand usage patterns. You can manage cookie preferences in settings."
        }
    ];

    return (
        <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 bg-brand-bg">
            <div className="max-w-3xl mx-auto px-4 lg:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-4">Privacy Policy</h1>
                    <p className="text-brand-grey">Last updated: January 2024</p>
                </div>

                <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 space-y-8">
                    <p className="text-brand-grey leading-relaxed">
                        At blynQe, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
                    </p>

                    {sections.map((section, index) => (
                        <div key={index} className="space-y-3">
                            <h2 className="text-xl lg:text-2xl font-bold text-brand-dark">{section.title}</h2>
                            <p className="text-brand-grey leading-relaxed">{section.content}</p>
                        </div>
                    ))}

                    <div className="pt-6 border-t border-brand-orange/10">
                        <p className="text-brand-grey text-sm">
                            Questions? Contact us at <a href="mailto:privacy@blynqe.com" className="text-brand-orange font-semibold">privacy@blynqe.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;

const TermsPage = () => {
    const sections = [
        {
            title: "Acceptance of Terms",
            content: "By accessing or using blynQe, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services."
        },
        {
            title: "Eligibility",
            content: "You must be at least 18 years old to use blynQe. By using our service, you represent that you meet this age requirement."
        },
        {
            title: "User Conduct",
            content: "Users must be respectful, honest, and comply with all applicable laws. Harassment, fraud, and inappropriate content are strictly prohibited."
        },
        {
            title: "Account Responsibility",
            content: "You are responsible for maintaining the security of your account and all activities under your account. Notify us immediately of any unauthorized access."
        },
        {
            title: "Subscription & Payments",
            content: "Premium features require a subscription. Payments are processed securely. You may cancel anytime, with access continuing until the billing period ends."
        },
        {
            title: "Termination",
            content: "We reserve the right to suspend or terminate accounts that violate these terms. You may delete your account at any time through the app settings."
        },
        {
            title: "Limitation of Liability",
            content: "blynQe is not responsible for user interactions. We encourage safe dating practices and provide safety resources, but cannot guarantee user behavior."
        }
    ];

    return (
        <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 bg-brand-bg">
            <div className="max-w-3xl mx-auto px-4 lg:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-5xl font-black text-brand-dark mb-4">Terms of Service</h1>
                    <p className="text-brand-grey">Last updated: January 2024</p>
                </div>

                <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 space-y-8">
                    <p className="text-brand-grey leading-relaxed">
                        Welcome to blynQe. Please read these terms carefully before using our dating platform.
                    </p>

                    {sections.map((section, index) => (
                        <div key={index} className="space-y-3">
                            <h2 className="text-xl lg:text-2xl font-bold text-brand-dark">{section.title}</h2>
                            <p className="text-brand-grey leading-relaxed">{section.content}</p>
                        </div>
                    ))}

                    <div className="pt-6 border-t border-brand-orange/10">
                        <p className="text-brand-grey text-sm">
                            Questions? Contact us at <a href="mailto:legal@blynqe.com" className="text-brand-orange font-semibold">legal@blynqe.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;

const Features = () => {
  const features = [
    { icon: '🎯', title: 'Smart Matching Algorithm', desc: 'Advanced AI-powered matching based on interests, values, and preferences' },
    { icon: '💬', title: 'Instant Messaging', desc: 'Real-time chat with your matches anytime, anywhere' },
    { icon: '📹', title: 'Video Calls', desc: 'Connect face-to-face with secure video calling' },
    { icon: '🔒', title: 'Privacy Controls', desc: 'Full control over who sees your profile and information' },
    { icon: '✨', title: 'Profile Verification', desc: 'Verified profiles for authentic connections' },
    { icon: '🌍', title: 'Location-Based', desc: 'Find matches near you or around the world' }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Amazing Features</h1>
          <p className="text-xl text-gray-600">Everything you need to find your perfect match</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

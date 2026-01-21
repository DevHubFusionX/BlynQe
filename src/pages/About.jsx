const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About LoveConnect</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            LoveConnect was founded with a simple mission: to help people find meaningful connections in the digital age. 
            We believe that everyone deserves to find love, and technology can make that journey easier and more enjoyable.
          </p>
          <p className="text-gray-600">
            With millions of users worldwide, we've helped countless couples find their perfect match through our 
            innovative matching algorithm and user-friendly platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-pink-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">5M+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">1M+</div>
            <div className="text-gray-600">Matches Made</div>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">50K+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

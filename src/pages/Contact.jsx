import { useState } from 'react';
import { Send, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs lg:text-sm block">
                Get in Touch
              </span>
              <h1 className="text-4xl lg:text-8xl font-black text-brand-dark tracking-tight leading-[0.95]">
                Say <span className="text-brand-orange">hello.</span>
              </h1>
              <p className="text-lg lg:text-xl text-brand-grey leading-relaxed">
                Have questions about blynQe? We're here to help you navigate your journey to meaningful connection.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "hello@blynqe.com" },
                { icon: MapPin, label: "Office", value: "San Francisco, CA" },
                { icon: MessageSquare, label: "Support", value: "help.blynqe.com" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-brand-orange/5 border border-brand-orange/5">
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-[10px] lg:text-xs text-brand-grey uppercase tracking-widest font-bold mb-1">{item.label}</div>
                      <div className="text-lg lg:text-xl font-bold text-brand-dark">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            {isSent && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-[3rem]">
                <div className="text-center space-y-4 p-8">
                  <div className="w-16 h-16 bg-brand-success rounded-full flex items-center justify-center mx-auto text-white">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark">Message Sent!</h3>
                  <p className="text-brand-grey">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="text-brand-orange font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-2xl shadow-brand-dark/5 border border-brand-orange/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark ml-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-6 py-4 bg-brand-bg rounded-2xl border-none focus:ring-2 focus:ring-brand-orange transition-all font-medium text-brand-dark"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark ml-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-6 py-4 bg-brand-bg rounded-2xl border-none focus:ring-2 focus:ring-brand-orange transition-all font-medium text-brand-dark"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark ml-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 bg-brand-bg rounded-2xl border-none focus:ring-2 focus:ring-brand-orange transition-all font-medium text-brand-dark"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark ml-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-6 py-6 bg-brand-bg rounded-3xl border-none focus:ring-2 focus:ring-brand-orange transition-all font-medium text-brand-dark resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg lg:text-xl shadow-xl shadow-brand-orange/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

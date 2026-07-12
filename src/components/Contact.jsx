import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';
import ContactGlobe from './canvas/ContactGlobe';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'libao.engineer@gmail.com', href: 'mailto:libao.engineer@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/libao', href: 'https://linkedin.com/in/libao' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/libao-engineer', href: 'https://github.com/libao-engineer' },
  { icon: '📍', label: 'Location', value: 'China (Open to Remote)', href: null },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { id: 'name', label: 'Your Name', placeholder: 'John Smith', type: 'text' },
          { id: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
        ].map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-[#aaa6c3] mb-2">{field.label}</label>
            <input
              type={field.type}
              value={form[field.id]}
              onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
              placeholder={field.placeholder}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all text-sm"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#aaa6c3] mb-2">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project or opportunity..."
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all text-sm resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        whileHover={{ scale: status ? 1 : 1.02, boxShadow: '0 0 30px rgba(145,94,255,0.4)' }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 cursor-pointer disabled:cursor-not-allowed relative overflow-hidden"
        style={{
          background: status === 'sent'
            ? 'linear-gradient(135deg, #22c55e, #16a34a)'
            : 'linear-gradient(135deg, #915eff, #00d4ff)',
        }}
      >
        {status === 'sending' && (
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
        <span className="relative z-10">
          {status === 'sent' ? '✓ Message Sent!' : status === 'sending' ? 'Sending...' : 'Send Message'}
        </span>
      </motion.button>
    </motion.form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#060818] to-[#020510]" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent to-purple-500/30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Whether you have a project in mind, an opportunity to discuss, or just want to connect — I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Globe & Info */}
          <div>
            <div className="h-64 md:h-80 mb-8 rounded-2xl overflow-hidden">
              <Suspense fallback={
                <div className="w-full h-full bg-white/3 rounded-2xl flex items-center justify-center text-4xl">🌍</div>
              }>
                <ContactGlobe />
              </Suspense>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass-card p-4 hover:border-purple-500/30 hover:bg-white/5 transition-all group"
                    >
                      <div className="text-2xl mb-2">{info.icon}</div>
                      <div className="text-xs font-semibold text-[#aaa6c3] uppercase tracking-wider mb-1">{info.label}</div>
                      <div className="text-white text-xs font-medium group-hover:text-purple-300 transition-colors truncate">{info.value}</div>
                    </a>
                  ) : (
                    <div className="glass-card p-4">
                      <div className="text-2xl mb-2">{info.icon}</div>
                      <div className="text-xs font-semibold text-[#aaa6c3] uppercase tracking-wider mb-1">{info.label}</div>
                      <div className="text-white text-xs font-medium">{info.value}</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-8">
            <h3 className="text-white font-bold text-2xl mb-2">Send a Message</h3>
            <p className="text-[#aaa6c3] text-sm mb-8">I typically respond within 24 hours.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

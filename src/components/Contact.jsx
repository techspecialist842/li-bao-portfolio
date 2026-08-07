import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';
import ContactGlobe from './canvas/ContactGlobe';
import { profile } from '../constants';

const contactInfo = [
  { icon: '📍', label: 'Location', value: `${profile.location} (Remote)` },
  { icon: '💼', label: 'Role', value: profile.title },
  { icon: '⭐', label: 'Rating', value: `${profile.rating} from clients` },
  { icon: '✅', label: 'Completed', value: `${profile.completedProjects} projects` },
];

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white/70 border border-[var(--color-border)] text-[var(--color-text)] placeholder-green-800/30 focus:outline-none focus:border-green-500/50 focus:bg-white/90 transition-all text-sm';

function ContactForm() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', subject: '', message: '' });
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
          { id: 'subject', label: 'Subject', placeholder: 'Project inquiry', type: 'text' },
        ].map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-theme-muted mb-2">{field.label}</label>
            <input
              type={field.type}
              value={form[field.id]}
              onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
              placeholder={field.placeholder}
              required
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-theme-muted mb-2">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project or opportunity..."
          required
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        whileHover={{ scale: status ? 1 : 1.02, boxShadow: '0 0 30px rgba(47,143,70,0.4)' }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 cursor-pointer disabled:cursor-not-allowed relative overflow-hidden"
        style={{
          background: status === 'sent'
            ? 'linear-gradient(135deg, #22c55e, #16a34a)'
            : 'linear-gradient(135deg, #2f8f46, #5cb85c)',
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
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-mid)] to-[var(--color-bg-deep)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent to-green-500/30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Looking for freelance projects — especially for startups, agencies, and small businesses that need a reliable web developer."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-64 md:h-80 mb-8 rounded-2xl overflow-hidden">
              <Suspense fallback={
                <div className="w-full h-full bg-white/50 rounded-2xl flex items-center justify-center text-4xl">🌍</div>
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
                  className="glass-card p-4"
                >
                  <div className="text-2xl mb-2">{info.icon}</div>
                  <div className="text-xs font-semibold text-theme-muted uppercase tracking-wider mb-1">{info.label}</div>
                  <div className="text-[var(--color-text)] text-xs font-medium">{info.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-[var(--color-text)] font-bold text-2xl mb-2">Send a Message</h3>
            <p className="text-theme-muted text-sm mb-8">Share your project details and I will get back to you.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

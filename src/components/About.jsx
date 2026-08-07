import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../constants';

const highlights = [
  { icon: '🌐', title: 'Web Applications', desc: 'Websites and custom web apps for agencies, startups, and small businesses' },
  { icon: '🛒', title: 'E-Commerce', desc: 'Online stores with WooCommerce, Shopify, Stripe, and conversion-focused UX' },
  { icon: '📱', title: 'Mobile-Ready', desc: 'Responsive design and mobile development experience across platforms' },
  { icon: '🤝', title: 'Remote Delivery', desc: 'Clear English communication and projects delivered on schedule' },
];

const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js',
  'PHP', 'Laravel', 'WordPress', 'WooCommerce', 'Shopify',
  'REST APIs', 'MySQL', 'PostgreSQL', 'Docker', 'Git', 'Figma', 'Android', 'Python',
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-700 border border-green-500/30 rounded-full bg-green-500/10 mb-4"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black text-[var(--color-text-heading)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-theme-muted text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export { SectionTitle };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-mid)] to-[var(--color-bg)]" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Who I Am"
          title="About Me"
          subtitle="A reliable senior web developer for startups, agencies, and small businesses."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-theme-muted text-lg leading-relaxed">
              I'm <span className="text-[var(--color-text)] font-semibold">{profile.name}</span>, a{' '}
              <span className="text-green-700 font-semibold">Senior Web Developer</span> with{' '}
              {profile.yearsExp} years of experience building websites, e-commerce stores, and web
              applications for clients in {profile.location} and abroad.
            </p>
            <p className="text-theme-muted text-lg leading-relaxed">
              I work with{' '}
              <span className="text-green-700 font-semibold">HTML, CSS, JavaScript, React, Vue.js, WordPress, and PHP</span>.
              I am comfortable working remotely, communicating with clients in English, and delivering
              projects on time — especially for startups, agencies, and small businesses that need a
              reliable web developer.
            </p>

            <div className="pt-4">
              <p className="text-sm font-semibold text-theme-muted mb-3 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium text-theme-muted border border-[var(--color-border)] rounded-lg bg-white/50 hover:border-green-500/50 hover:text-green-700 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <div ref={ref} className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[var(--color-text)] font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-theme-muted text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

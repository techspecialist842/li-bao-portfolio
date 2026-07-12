import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = [
  { icon: '🏗️', title: 'System Architecture', desc: 'Designing distributed, fault-tolerant systems at scale' },
  { icon: '⚡', title: 'Performance Obsessed', desc: 'Optimizing every millisecond for peak user experience' },
  { icon: '🤝', title: 'Team Leadership', desc: 'Mentoring engineers and driving technical excellence' },
  { icon: '🌍', title: 'Open Source', desc: 'Active contributor with 5,000+ combined GitHub stars' },
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Go', 'Rust',
  'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'AWS',
  'Three.js', 'GraphQL', 'WebRTC', 'Terraform',
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/5 mb-4"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[#aaa6c3] text-lg max-w-2xl mx-auto"
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
          subtitle="Building the future, one commit at a time."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-[#aaa6c3] text-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Li Bao</span>, a Software Engineer with{' '}
              <span className="text-purple-400 font-semibold">6+ years</span> of experience crafting
              high-performance web applications and distributed systems. Based in China, I work remotely
              with teams across the globe, turning complex problems into elegant, scalable solutions.
            </p>
            <p className="text-[#aaa6c3] text-lg leading-relaxed">
              My passion lies at the intersection of engineering and user experience — I believe great
              software should be both{' '}
              <span className="text-cyan-400 font-semibold">technically excellent</span> and{' '}
              <span className="text-orange-400 font-semibold">delightfully usable</span>. From architecting
              microservices that handle millions of requests, to crafting immersive 3D web experiences,
              I bring full-stack expertise to every project.
            </p>

            {/* Tech Tags */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-[#aaa6c3] mb-3 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium text-[#aaa6c3] border border-white/10 rounded-lg bg-white/3 hover:border-purple-500/50 hover:text-purple-300 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 hover:border-purple-500/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-[#aaa6c3] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

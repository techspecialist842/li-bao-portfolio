import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { SectionTitle } from './About';

function TimelineItem({ exp, index, isLast }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8 mb-12`}>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        className="flex-1 glass-card p-6 hover:scale-[1.02] transition-all duration-300 group"
        style={{ maxWidth: 'calc(50% - 3rem)' }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: exp.color + '20', border: `1px solid ${exp.color}40` }}
          >
            {exp.icon}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h3 className="text-[var(--color-text)] font-bold text-lg group-hover:text-blue-300 transition-colors">
                {exp.title}
              </h3>
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{ color: exp.color, background: exp.color + '15', border: `1px solid ${exp.color}30` }}
              >
                {exp.period}
              </span>
            </div>
            <p className="font-semibold mb-1" style={{ color: exp.color }}>
              {exp.company}
            </p>
            <p className="text-xs text-theme-muted mb-3 flex items-center gap-1">
              📍 {exp.location}
            </p>
            <p className="text-theme-muted text-sm leading-relaxed">{exp.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
          className="w-5 h-5 rounded-full border-2 border-blue-500/30 flex items-center justify-center"
          style={{ background: exp.color }}
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
        </motion.div>
      </div>

      {/* Empty side */}
      <div className="flex-1" style={{ maxWidth: 'calc(50% - 3rem)' }} />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-mid)] to-[var(--color-bg)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="My Journey"
          title="Experience & Education"
          subtitle="From junior developer to senior web developer delivering remote freelance and agency work."
        />

        {/* Timeline */}
        <div className="relative hidden md:block">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-6 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 pl-10 relative"
            >
              <div
                className="absolute left-2 top-3 w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center"
                style={{ background: exp.color }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <div className="glass-card p-5 flex-1">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{exp.icon}</span>
                  <div>
                    <h3 className="text-[var(--color-text)] font-bold">{exp.title}</h3>
                    <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                    <p className="text-xs text-theme-muted mb-2">{exp.period} · {exp.location}</p>
                    <p className="text-theme-muted text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';
import { SectionTitle } from './About';
import SkillOrb from './canvas/SkillOrb';

function SkillBar({ name, level, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCategory({ category, color, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      className="glass-card p-8 hover:border-opacity-30 transition-all duration-500 group"
      style={{ '--hover-color': color }}
    >
      {/* 3D Orb */}
      <div className="w-full h-44 mb-6 rounded-xl overflow-hidden">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full animate-pulse" style={{ background: color }} />
          </div>
        }>
          <SkillOrb color={color} />
        </Suspense>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
        <h3 className="text-white font-bold text-lg">{category}</h3>
      </div>

      <div className="space-y-4">
        {items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={color}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#07091a] to-[#050816]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-purple-500/50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Technical Expertise"
          title="My Skills"
          subtitle="A comprehensive toolkit built through years of hands-on engineering across the full stack."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <SkillCategory key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

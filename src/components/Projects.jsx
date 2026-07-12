import { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants';
import { SectionTitle } from './About';
import ProjectScene from './canvas/ProjectScene';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: (index % 3) * 0.15, duration: 0.7 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative glass-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      style={{ '--card-color': project.color }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 30px ${project.color}15, 0 0 30px ${project.color}10` }}
      />

      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center text-5xl">
              {project.icon}
            </div>
          }>
            <ProjectScene color={project.color} />
          </Suspense>
        </div>

        <div className="absolute top-4 left-4 z-10">
          <div className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center text-2xl border border-[var(--color-border)]">
            {project.icon}
          </div>
        </div>

        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/70 backdrop-blur-sm text-xs text-theme-muted border border-[var(--color-border)]">
            ⭐ {project.stats.stars.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/70 backdrop-blur-sm text-xs text-theme-muted border border-[var(--color-border)]">
            🍴 {project.stats.forks}
          </div>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-green-900/40 backdrop-blur-sm flex items-center justify-center gap-4 z-20"
            >
              <motion.a
                href={project.github}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium hover:bg-white transition-colors"
              >
                <span>🐙</span> GitHub
              </motion.a>
              <motion.a
                href={project.live}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors"
                style={{ background: project.color + '99' }}
              >
                <span>🚀</span> Live Demo
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6">
        <h3 className="text-[var(--color-text)] font-bold text-xl mb-3 group-hover:text-green-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-theme-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-md border bg-white/50 text-theme-muted"
              style={{ borderColor: project.color + '30', color: project.color + 'cc' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-mid)] to-[var(--color-bg)]" />

      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-lime-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of my best work — from AI platforms to DeFi protocols, each built with care and craftsmanship."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/libao-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-[var(--color-border)] text-theme-muted hover:text-[var(--color-text)] hover:border-green-500/50 transition-all duration-300 group"
          >
            <span>🐙</span>
            <span>View All Projects on GitHub</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

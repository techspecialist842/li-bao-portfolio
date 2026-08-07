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

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-green-900/40 backdrop-blur-sm flex items-center justify-center gap-4 z-20"
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                style={{ background: project.color + 'cc' }}
              >
                Featured Work
              </motion.span>
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
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Websites, e-commerce rebuilds, and SaaS portals delivered for clients in Ukraine and abroad."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

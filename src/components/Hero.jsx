import { motion } from 'framer-motion';
import { Suspense } from 'react';
import ParticleField from './canvas/ParticleField';

const roles = ['Software Engineer', 'Full Stack Developer', 'Cloud Architect', '3D Web Creator'];

function TypewriterText() {
  return (
    <motion.div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
          className="px-3 py-1 text-sm rounded-full border border-[var(--color-border)] text-theme-muted bg-white/50"
        >
          {role}
        </motion.span>
      ))}
    </motion.div>
  );
}

function StatCard({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass-card px-6 py-4 text-center"
    >
      <div className="text-3xl font-black gradient-text">{value}</div>
      <div className="text-xs text-theme-muted mt-1">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="canvas-container">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/60 via-transparent to-[var(--color-bg)]/30" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black leading-tight text-[var(--color-text-heading)]"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Li Bao</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-theme-muted leading-relaxed max-w-2xl"
            >
              A passionate software engineer from China building{' '}
              <span className="text-green-700 font-semibold">scalable systems</span>,{' '}
              <span className="text-green-600 font-semibold">stunning interfaces</span>, and{' '}
              <span className="text-lime-700 font-semibold">cloud-native architectures</span>{' '}
              that power millions of users.
            </motion.p>

            <TypewriterText />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(47,143,70,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl cursor-pointer"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 text-[var(--color-text)] font-semibold rounded-xl border border-[var(--color-border)] bg-white/60 hover:bg-white/80 transition-all cursor-pointer"
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto md:mx-0"
            >
              <StatCard value="6+" label="Years Exp." delay={1.9} />
              <StatCard value="50+" label="Projects" delay={2.0} />
              <StatCard value="20M+" label="Users Served" delay={2.1} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/30 to-lime-400/30 blur-2xl animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-200/80 to-lime-200/80 border border-green-400/40 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-lime-400/20" />
              <span className="text-8xl select-none">👨‍💻</span>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: ['#2f8f46', '#5cb85c', '#6b9e3e', '#86efac'][i],
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: Math.cos((i / 4) * Math.PI * 2) * 150,
                  y: Math.sin((i / 4) * Math.PI * 2) * 150,
                  rotate: 360,
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-xs text-theme-muted group-hover:text-[var(--color-text)] transition-colors">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-600/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-green-600 rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
}

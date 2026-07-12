import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/libao-engineer' },
  { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/libao' },
  { label: 'Twitter', icon: '🐦', href: 'https://twitter.com/libao_dev' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-[var(--color-text)] font-bold text-lg">
            Li <span className="gradient-text">Bao</span>
          </p>
          <p className="text-theme-muted text-sm mt-1">Software Engineer · China</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-lg hover:border-green-500/40 transition-all"
              title={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-theme-muted text-xs text-center md:text-right">
          © {new Date().getFullYear()} Li Bao. Built with React & Three.js
        </p>
      </div>
    </footer>
  );
}

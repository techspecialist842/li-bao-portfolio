import { profile } from '../constants';

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-[var(--color-text)] font-bold text-lg">
            {profile.name.split(' ')[0]} <span className="gradient-text">{profile.name.split(' ')[1]}</span>
          </p>
          <p className="text-theme-muted text-sm mt-1">{profile.title} · {profile.location}</p>
        </div>

        <p className="text-theme-muted text-xs text-center md:text-right">
          © {new Date().getFullYear()} {profile.name}. Built with React & Three.js
        </p>
      </div>
    </footer>
  );
}

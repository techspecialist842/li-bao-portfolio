export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

export const skills = [
  {
    category: 'Frontend & Web',
    color: '#3b82f6',
    items: [
      { name: 'React.js', level: 96 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Vue.js', level: 86 },
      { name: 'HTML5 / CSS3', level: 94 },
    ],
  },
  {
    category: 'Mobile',
    color: '#2563eb',
    items: [
      { name: 'Android', level: 94 },
      { name: 'React Native', level: 88 },
      { name: 'Flutter', level: 84 },
      { name: 'Python', level: 90 },
      { name: 'iOS (cross-platform)', level: 80 },
    ],
  },
  {
    category: 'Backend & Platforms',
    color: '#60a5fa',
    items: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'SaaS / CRM', level: 86 },
      { name: 'Node.js / PHP', level: 88 },
      { name: 'WordPress / Laravel', level: 90 },
      { name: 'Docker / Git', level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Website Rebuild',
    description:
      'Rebuilt an online store with a modern React front-end integrated with WooCommerce and Stripe. Improved performance, checkout UX, and mobile responsiveness for a smoother shopping experience.',
    tags: ['React', 'WooCommerce', 'Stripe', 'JavaScript', 'CSS3'],
    color: '#3b82f6',
    gradient: 'from-blue-900/50 to-slate-900/50',
    icon: '🛒',
  },
  {
    id: 2,
    title: 'B2B SaaS Client Portal',
    description:
      'Built a client portal for a B2B SaaS company where users can view reports, notifications, and account settings in one place — designed for clarity, reliability, and day-to-day business use.',
    tags: ['React', 'Next.js', 'SaaS', 'TypeScript', 'PostgreSQL'],
    color: '#2563eb',
    gradient: 'from-indigo-900/50 to-blue-900/50',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Healthcare Clinic Website',
    description:
      'Created a multi-location clinic website with online booking flows and clear service pages. Built with WordPress, PHP, and JavaScript for easy content management by clinic staff.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'Responsive Design'],
    color: '#60a5fa',
    gradient: 'from-sky-900/50 to-blue-900/50',
    icon: '🏥',
  },
  {
    id: 4,
    title: 'Cross-Platform Mobile Apps',
    description:
      'Delivered mobile experiences with React Native, Flutter, and Android — focusing on polished UI, stable releases, and practical features for users on the go.',
    tags: ['React Native', 'Flutter', 'Android', 'JavaScript', 'API'],
    color: '#1d4ed8',
    gradient: 'from-blue-950/50 to-indigo-900/50',
    icon: '📱',
  },
  {
    id: 5,
    title: 'Agency Client Web Applications',
    description:
      'Developed and maintained websites and web applications for agency clients at Horizon Web Studio — from landing pages to custom web apps delivered on time for startups and small businesses.',
    tags: ['React', 'Next.js', 'Vue.js', 'Laravel', 'Docker'],
    color: '#3b82f6',
    gradient: 'from-slate-900/50 to-blue-900/50',
    icon: '🌐',
  },
  {
    id: 6,
    title: 'Multi-Language Business Sites',
    description:
      'Built WordPress and Laravel websites for business clients, including multi-language setups, custom themes, and integrations tailored to each brand’s goals.',
    tags: ['WordPress', 'Laravel', 'PHP', 'MySQL', 'Figma'],
    color: '#2563eb',
    gradient: 'from-blue-900/40 to-cyan-900/40',
    icon: '🌍',
  },
];

export const experiences = [
  {
    title: 'Senior Web Developer',
    company: 'Horizon Web Studio',
    period: 'Jan 2022 — Present',
    location: 'Kyiv, Ukraine (Remote)',
    description:
      'Develop and maintain websites and web applications for agency clients. Build reliable solutions for startups, agencies, and small businesses — from marketing sites to custom web apps — with a focus on quality and on-time delivery.',
    color: '#3b82f6',
    icon: '🚀',
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'BluePixel Digital',
    period: 'Jan 2019 — Jan 2022',
    location: 'Lviv, Ukraine',
    description:
      'Developed WordPress and Laravel websites for business clients. Built multi-language sites, custom features, and integrations while collaborating remotely with teams and stakeholders in English.',
    color: '#2563eb',
    icon: '💻',
  },
  {
    title: 'Junior Web Developer',
    company: 'CodeBridge Solutions',
    period: 'Jan 2017 — Jan 2019',
    location: 'Remote',
    description:
      'Built responsive landing pages with HTML, CSS, and JavaScript. Customized WordPress themes and shipped front-end features that helped grow into full-stack, mobile, and senior roles.',
    color: '#60a5fa',
    icon: '💡',
  },
];

export const profile = {
  name: 'Yevgen Slyudikov',
  shortName: 'Yevgen S.',
  initials: 'YS',
  title: 'Senior Web Developer | Mobile',
  location: 'Ukraine',
  yearsExp: '7+',
  completedProjects: '6',
  rating: '5.0',
  mainSkills: ['React.js', 'Android', 'Python'],
  tagline:
    'Building websites, e-commerce stores, web applications, and mobile experiences for clients in Ukraine and abroad.',
};

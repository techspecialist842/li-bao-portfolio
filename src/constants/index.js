export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

export const skills = [
  {
    category: 'Frontend',
    color: '#2f8f46',
    items: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Vue.js', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    category: 'Backend & CMS',
    color: '#228b3a',
    items: [
      { name: 'PHP / Laravel', level: 92 },
      { name: 'WordPress', level: 94 },
      { name: 'WooCommerce', level: 90 },
      { name: 'MySQL / PostgreSQL', level: 88 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    category: 'Mobile & Tools',
    color: '#4a8c2a',
    items: [
      { name: 'Android', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'Shopify', level: 85 },
      { name: 'Docker', level: 82 },
      { name: 'Git / Figma', level: 90 },
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
    color: '#2f8f46',
    gradient: 'from-green-900/40 to-emerald-900/40',
    icon: '🛒',
    github: '#',
    live: '#',
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 2,
    title: 'B2B SaaS Client Portal',
    description:
      'Built a client portal for a B2B SaaS company where users can view reports, notifications, and account settings in one place — designed for clarity, reliability, and day-to-day business use.',
    tags: ['React', 'Next.js', 'REST APIs', 'TypeScript', 'PostgreSQL'],
    color: '#228b3a',
    gradient: 'from-lime-900/40 to-green-900/40',
    icon: '📊',
    github: '#',
    live: '#',
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 3,
    title: 'Healthcare Clinic Website',
    description:
      'Created a multi-location clinic website with online booking flows and clear service pages. Built with WordPress, PHP, and JavaScript for easy content management by clinic staff.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'Responsive Design'],
    color: '#4a8c2a',
    gradient: 'from-emerald-900/40 to-teal-900/40',
    icon: '🏥',
    github: '#',
    live: '#',
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 4,
    title: 'Agency Client Web Applications',
    description:
      'Developed and maintained websites and web applications for agency clients at Horizon Web Studio — from landing pages to custom web apps delivered on time for startups and small businesses.',
    tags: ['React', 'Vue.js', 'Laravel', 'WordPress', 'Docker'],
    color: '#3cb371',
    gradient: 'from-green-800/40 to-lime-800/40',
    icon: '🌐',
    github: '#',
    live: '#',
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 5,
    title: 'Multi-Language Business Sites',
    description:
      'Built WordPress and Laravel websites for business clients, including multi-language setups, custom themes, and integrations tailored to each brand’s goals.',
    tags: ['WordPress', 'Laravel', 'PHP', 'MySQL', 'Figma'],
    color: '#2e9e4a',
    gradient: 'from-lime-800/40 to-green-800/40',
    icon: '🌍',
    github: '#',
    live: '#',
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 6,
    title: 'Shopify Storefronts',
    description:
      'Delivered Shopify storefronts with clean product pages, responsive layouts, and conversion-focused design for e-commerce brands entering or growing online.',
    tags: ['Shopify', 'JavaScript', 'HTML5', 'CSS3', 'Liquid'],
    color: '#6b9e3e',
    gradient: 'from-yellow-900/30 to-green-900/40',
    icon: '🛍️',
    github: '#',
    live: '#',
    stats: { stars: 0, forks: 0 },
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
    color: '#2f8f46',
    icon: '🚀',
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'BluePixel Digital',
    period: 'Jan 2019 — Jan 2022',
    location: 'Lviv, Ukraine',
    description:
      'Developed WordPress and Laravel websites for business clients. Built multi-language sites, custom features, and integrations while collaborating remotely with teams and stakeholders in English.',
    color: '#228b3a',
    icon: '💻',
  },
  {
    title: 'Junior Web Developer',
    company: 'CodeBridge Solutions',
    period: 'Jan 2017 — Jan 2019',
    location: 'Remote',
    description:
      'Built responsive landing pages with HTML, CSS, and JavaScript. Customized WordPress themes and shipped front-end features that helped grow into full-stack and senior roles.',
    color: '#4a8c2a',
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
  tagline:
    'Building websites, e-commerce stores, and web applications for clients in Ukraine and abroad.',
};

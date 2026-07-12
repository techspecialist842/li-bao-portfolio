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
    color: '#915eff',
    items: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Three.js', level: 80 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    color: '#00d4ff',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Go', level: 75 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 78 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    color: '#ff6b35',
    items: [
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 78 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Terraform', level: 70 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'NeuraFlow AI Platform',
    description:
      'A real-time AI workflow orchestration platform enabling teams to build, deploy, and monitor machine learning pipelines visually. Features drag-and-drop pipeline builder, live metrics, and multi-cloud deployment.',
    tags: ['React', 'Python', 'FastAPI', 'Redis', 'Docker', 'TensorFlow'],
    color: '#915eff',
    gradient: 'from-purple-900/40 to-blue-900/40',
    icon: '🤖',
    github: '#',
    live: '#',
    stats: { stars: 1240, forks: 280 },
  },
  {
    id: 2,
    title: 'ChainVault DeFi',
    description:
      'A decentralized finance protocol enabling trustless asset swaps, liquidity farming, and yield optimization across 8 blockchain networks. Processes over $2M in daily transactions with sub-second finality.',
    tags: ['Solidity', 'React', 'ethers.js', 'Node.js', 'The Graph'],
    color: '#00d4ff',
    gradient: 'from-cyan-900/40 to-teal-900/40',
    icon: '⛓️',
    github: '#',
    live: '#',
    stats: { stars: 890, forks: 195 },
  },
  {
    id: 3,
    title: 'HorizonOS Dashboard',
    description:
      'An enterprise cloud management console with 3D server topology visualization, real-time alerting, and AI-powered anomaly detection. Manages 500+ servers across distributed infrastructure.',
    tags: ['Next.js', 'Three.js', 'Go', 'Kubernetes', 'Prometheus', 'Grafana'],
    color: '#ff6b35',
    gradient: 'from-orange-900/40 to-red-900/40',
    icon: '🌐',
    github: '#',
    live: '#',
    stats: { stars: 1560, forks: 340 },
  },
  {
    id: 4,
    title: 'SwiftCart E-Commerce',
    description:
      'A high-performance e-commerce engine with micro-frontend architecture, real-time inventory sync, AI product recommendations, and multi-vendor marketplace support for 10,000+ concurrent users.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'GraphQL'],
    color: '#4ade80',
    gradient: 'from-green-900/40 to-emerald-900/40',
    icon: '🛒',
    github: '#',
    live: '#',
    stats: { stars: 720, forks: 160 },
  },
  {
    id: 5,
    title: 'DataPulse Analytics',
    description:
      'A self-serve analytics platform with real-time data streaming, interactive chart builder, and natural language query interface. Processes 1B+ events per day with p99 query latency under 200ms.',
    tags: ['TypeScript', 'Apache Kafka', 'ClickHouse', 'D3.js', 'Python'],
    color: '#f59e0b',
    gradient: 'from-yellow-900/40 to-amber-900/40',
    icon: '📊',
    github: '#',
    live: '#',
    stats: { stars: 1020, forks: 210 },
  },
  {
    id: 6,
    title: 'EchoChat Messenger',
    description:
      'An end-to-end encrypted messaging platform with WebRTC video calling, file sharing, and AI-powered translation for 50+ languages. Supports 100K+ active users with 99.99% uptime SLA.',
    tags: ['React Native', 'WebRTC', 'Socket.io', 'Node.js', 'Rust'],
    color: '#ec4899',
    gradient: 'from-pink-900/40 to-rose-900/40',
    icon: '💬',
    github: '#',
    live: '#',
    stats: { stars: 650, forks: 130 },
  },
];

export const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'TechNova Global',
    period: '2022 — Present',
    location: 'Remote / Beijing',
    description:
      'Lead a team of 8 engineers building distributed microservices handling 50M+ daily active users. Architected event-driven systems using Kafka and Kubernetes, reducing latency by 40%. Mentored junior engineers and drove adoption of TypeScript across the organization.',
    color: '#915eff',
    icon: '🚀',
  },
  {
    title: 'Full Stack Engineer',
    company: 'CloudSphere Inc.',
    period: '2020 — 2022',
    location: 'Shanghai',
    description:
      'Developed scalable SaaS products used by Fortune 500 clients. Built real-time collaboration features using WebSockets, reduced API response times by 60% through caching strategies, and implemented CI/CD pipelines cutting deployment time from hours to minutes.',
    color: '#00d4ff',
    icon: '☁️',
  },
  {
    title: 'Software Engineer',
    company: 'StartUp Labs',
    period: '2018 — 2020',
    location: 'Shenzhen',
    description:
      'Delivered full-stack features across web and mobile platforms for early-stage startups. Built React Native apps with offline-first architecture, integrated third-party APIs, and contributed to open-source projects with 2,000+ GitHub stars.',
    color: '#ff6b35',
    icon: '💡',
  },
  {
    title: 'B.Sc. Computer Science',
    company: 'Tsinghua University',
    period: '2014 — 2018',
    location: 'Beijing',
    description:
      'Graduated with honors. Specialized in distributed systems and algorithms. Published research on network optimization. Active member of the ACM campus chapter and led the university hackathon team to national championships.',
    color: '#4ade80',
    icon: '🎓',
  },
];

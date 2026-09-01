import type { Experience, SkillItem } from "../types/experience.types"

export const experienceData: Experience[] = [
  {
    id: 'syntax-solutions',
    role: 'Software Engineer',
    company: 'Terranxt pvt',
    startDate: '2023-01-01',
    current: true,
    bullets: [
      'Scaled enterprise React dashboard, reducing initial load time by 40% using code-splitting and memoization.',
      'Developed 15+ microservices with Node.js and Express, implementing OAuth2.0 and JWT security layers.',
    ],
  },
  {
    id: 'pixel-arch',
    role: 'Junior Web Developer',
    company: 'Pixel Arch Design',
    startDate: '2022-06-01',
    endDate: '2022-12-31',
    current: false,
    bullets: [
      'Built responsive landing pages and UI components using Tailwind CSS and TypeScript.',
    ],
  },
]

export const skillsData: SkillItem[] = [
  { id: 'mern',       icon: 'hub',          label: 'MERN Stack' },
  { id: 'rest',       icon: 'schema',       label: 'RESTful API' },
  { id: 'auth',       icon: 'security',     label: 'Auth/JWT' },
  { id: 'deploy',     icon: 'cloud_done',   label: 'Deployment' },
  { id: 'perf',       icon: 'speed',        label: 'Perf Audit' },
  { id: 'git',        icon: 'account_tree', label: 'Git Ops' },
]

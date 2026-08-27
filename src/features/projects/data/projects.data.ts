import type { Project } from "../types/projects.type";

export const projectsData: Project[] = [
  {
    id: 'neural-dashboard',
    title: 'NEURAL_DASHBOARD v1.0',
    subtitle: 'MERN',
    description:
      'A real-time data visualization platform built with React and Socket.io. Features custom chart engines and persistent state management via Redux Toolkit.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Neural Dashboard',
    tags: ['REACT', 'ZOD', 'EXPRESS'],
    category: 'mern',
    sourceUrl: '#',
    liveUrl: '#',
    featured: true,
    year: 2024,
    status: 'live',
  },
  {
    id: 'crypt-api-core',
    title: 'CRYPT_API CORE',
    subtitle: 'BACKEND',
    description:
      'High-performance RESTful API architecture for financial data indexing. Optimized MongoDB aggregation pipelines and Redis caching.',
    imageUrl:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Crypt API',
    tags: ['NODE.JS', 'REDIS', 'MONGODB'],
    category: 'backend',
    sourceUrl: '#',
    featured: true,
    year: 2023,
    status: 'live',
  },
]

export interface Workshop {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Web Dev' | 'AI & Data' | 'Cybersecurity' | 'UI/UX';
  location: 'Dhaka' | 'Chattogram' | 'Sylhet' | 'Online';
  date: string;
  price: number;
  instructor: string;
  imageUrl: string;
}

export const mockWorkshops: Workshop[] = [
  {
    id: 'w1',
    title: 'Advanced Machine Learning & Deepfake Detection',
    shortDescription: 'Explore neural networks and adversarial robustness in modern security.',
    fullDescription: 'Join us for an intensive breakdown of federated learning applications, malware classification, and how to build robust models against non-IID data skew.',
    category: 'AI & Data',
    location: 'Chattogram',
    date: '2026-05-15',
    price: 500,
    instructor: 'Dr. Hasan Mahmud',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'w2',
    title: 'Next.js App Router Mastery',
    shortDescription: 'Build scalable React applications with modern Next.js patterns.',
    fullDescription: 'A complete walkthrough of Server Components, dynamic routing, and Firebase authentication tailored for modern web developers.',
    category: 'Web Dev',
    location: 'Dhaka',
    date: '2026-05-20',
    price: 1000,
    instructor: 'Farhan Ahmed',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'w3',
    title: 'Python Data Visualization Workshop',
    shortDescription: 'Master Plotly and Power BI for interactive dashboards.',
    fullDescription: 'Learn to transform raw datasets into compelling visual stories using industry-standard Python libraries and BI tools.',
    category: 'AI & Data',
    location: 'Online',
    date: '2026-06-05',
    price: 0,
    instructor: 'Nadia Rahman',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'w4',
    title: 'UI/UX Fundamentals for Startups',
    shortDescription: 'Design user-centric interfaces that convert.',
    fullDescription: 'Focus on responsive design, color hierarchy, and consistent interactions using Figma and Tailwind CSS principles.',
    category: 'UI/UX',
    location: 'Sylhet',
    date: '2026-06-12',
    price: 300,
    instructor: 'Rafiq Islam',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'w5',
    title: 'Network Intrusion Detection with GANs',
    shortDescription: 'Advanced techniques for securing networks using Generative Adversarial Networks.',
    fullDescription: 'Dive deep into modern cybersecurity. Learn to simulate adversarial attacks and build robust NIDS architectures to protect enterprise data environments.',
    category: 'Cybersecurity',
    location: 'Dhaka',
    date: '2026-07-10',
    price: 800,
    instructor: 'Sazidul Islam', 
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'w6',
    title: 'Full-Stack Firebase Integration',
    shortDescription: 'Master authentication and serverless databases for web apps.',
    fullDescription: 'A practical workshop on wiring up Firebase Auth, Firestore, and Next.js App Router for production-ready applications.',
    category: 'Web Dev',
    location: 'Online',
    date: '2026-07-22',
    price: 0,
    instructor: 'Priya Saha',
    imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd38a8f94cb?auto=format&fit=crop&q=80&w=1000'
  }
];
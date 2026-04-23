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
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000'
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
    instructor: 'Sazidul Islam Hira',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000'
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
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000' 
  },
  {
    id: 'w7',
    title: 'Federated Learning & Malware Classification',
    shortDescription: 'Privacy-preserving AI architectures for robust malware defense.',
    fullDescription: 'An advanced session on training machine learning models across decentralized edge devices without exchanging raw data, specifically focusing on malware classification frameworks.',
    category: 'AI & Data',
    location: 'Chattogram',
    date: '2026-08-05',
    price: 1200,
    instructor: 'Mr. Khandaker Tayef Shahriar',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'w8',
    title: 'Modern Web UI & Component Architecture',
    shortDescription: 'Structuring scalable and reusable UI elements.',
    fullDescription: 'Learn how to break down complex interfaces into manageable, reusable React components while leveraging Tailwind CSS for rapid styling.',
    category: 'UI/UX',
    location: 'Online',
    date: '2026-08-15',
    price: 400,
    instructor: 'Md. Tasin Islam',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'w9',
    title: 'Cybersecurity Threat Modeling',
    shortDescription: 'Proactive defense strategies for modern web infrastructure.',
    fullDescription: 'Understand how to identify vulnerabilities, assess risks, and implement robust security protocols in your applications before deploying them to production.',
    category: 'Cybersecurity',
    location: 'Dhaka',
    date: '2026-09-01',
    price: 600,
    instructor: 'Md. Obaidul Amin',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000'
  }
];
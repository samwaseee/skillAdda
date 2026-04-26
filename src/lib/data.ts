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
  ownerEmail: string;
}
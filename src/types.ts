export interface ServiceItem {
  id: string;
  slug: string;
  groupNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
  materials?: string[];
  advantages: string[];
  workflow: string[];
  targetAudience: string;
  estimatedTime: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'bang-hieu' | 'in-an' | 'quang-cao' | 'decor' | 'thiet-ke';
  categoryLabel: string;
  image: string;
  clientType: string;
  location: string;
  materials: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

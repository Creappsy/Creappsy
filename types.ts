import type { ReactNode } from 'react';

export interface NavItem {
  name: string;
  href: string;
  children?: readonly NavItem[];
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export interface Project {
  imageUrl: string;
  title: string;
  category: string;
  description:string;
  serviceCategory?: string;
}

export interface PriceTier {
  name: string;
  price: string;
  period: string;
  delivery?: string;
  features: string[];
  cta: string;
  recommended?: boolean;
  limited?: boolean;
}

export interface BlogPost {
  category: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin: string;
    twitter: string;
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ChatMessage {
  text: string;
  sender: 'user' | 'ai';
}

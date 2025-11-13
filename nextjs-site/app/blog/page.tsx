import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText, Terminal, Coffee, Ghost } from 'lucide-react';

import { BlogPostCard } from '@/components/BlogPostCard'

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-slate-900 mb-12">Blog</h1>

      <section className="mb-12">
        <Ghost size={32} className="mr-3 text-purple-600"/>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Paranormal</h2>
        <div className="space-y-4">
          <BlogPostCard 
            title="The Mystery of Room 404"
            date="June 6, 2024"
            slug="mystery-room-404"
            excerpt="An investigation into the most haunted hotel room in America..."
            category="paranormal"
          />
          <BlogPostCard 
            title="Ghost Stories from Abandoned Places"
            date="March 25, 2025"
            slug="stories-abandoned-places"
            excerpt="Urban exploration meets paranormal investigation..."
            category="paranormal"
          />
          <BlogPostCard 
            title="Urban Legends Explored"
            date="December 15, 2024"
            slug="urban-legends-explored"
            excerpt="Separating fact from fiction in modern folklore..."
            category="paranormal"
          />
        </div>
      </section>
      <section className="mb-12">
        <Terminal size={32} className="mr-3 text-blue-600" />
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Tech</h2>
        <div className="space-y-4">
          <BlogPostCard 
            title="Building Modern Web Apps"
            date="April 3, 1995"
            slug="modern-web-apps"
            excerpt="A deep dive into React, Next.js, and the modern web stack..."
            category="tech"
          />
          <BlogPostCard 
            title="React Best Practices 2024"
            date="May 13, 1995"
            slug="react-best-practices"
            excerpt="Lessons learned from building production applications..."
            category="tech"
          />
          <BlogPostCard 
            title="The Future of AI in Development"
            date="February 15, 2025"
            slug="future-of-ai"
            excerpt="How AI tools are changing the way we write code..."
            category="tech"
          />
        </div>
      </section>
      <section className="mb-12">
        <Coffee size={32} className="text-pink-600" />
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Slice of Life</h2>
        <div className="space-y-4">
          <BlogPostCard 
            title="Coffee Shop Chronicles"
            date="January 5, 2006"
            slug="coffee-shop-chronicles"
            excerpt="Finding inspiration in the everyday moments..."
            category="life"
          />
          <BlogPostCard 
            title="Weekend Adventures"
            date="October 20, 2021"
            slug="weekend-adventures"
            excerpt="Exploring the world one weekend at a time..."
            category="life"
          />
          <BlogPostCard 
            title="Thoughts on Creativity"
            date="November 2, 2025"
            slug="thoughts-on-creativity"
            excerpt="What it means to be creative in a digital age..."
            category="life"
          />
        </div>
      </section>
    </div>
    
  );
}
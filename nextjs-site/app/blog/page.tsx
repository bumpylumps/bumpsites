import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText, Terminal, Coffee, Ghost } from 'lucide-react';
import Link from 'next/link'

import { BlogPostCard } from '@/components/BlogPostCard'

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto border-2 border-mgs-border px-6 py-20 mb-20">
      <h1 className="text-5xl font-bold text-mgs-dark mb-12">Blog</h1>

      <section className="group mb-12">
        <Ghost size={32} className="mr-3 text-mgs-dark group-hover:text-mgs-tan"/>
        <h2 className="text-3xl font-bold text-mgs-dark mb-6">Paranormal</h2>
        <div className="space-y-4">
          <BlogPostCard 
            title="The Mystery of Room 404"
            date="June 6, 2024"
            slug="mystery-room-404"
            excerpt="An investigation into the most haunted hotel room in America..."
          />
          <BlogPostCard 
            title="Ghost Stories from Abandoned Places"
            date="March 25, 2025"
            slug="stories-abandoned-places"
            excerpt="Urban exploration meets paranormal investigation..."
          />
          <BlogPostCard 
            title="Urban Legends Explored"
            date="December 15, 2024"
            slug="urban-legends-explored"
            excerpt="Separating fact from fiction in modern folklore..."
          />
          <Link
            href="/blog/paranormal"
            className="inline-block px-6 py-2 font-semibold text-sm text-mgs-dark border-2 border-mgs-border hover:bg-mgs-active hover:scale-[1.02] transition-transform shadow-md"
          >View All Paranormal</Link>
        </div>
      </section>
      <section className="group mb-12">
        <Terminal size={32} className="group-hover:text-mgs-tan mr-3 text-mgs-dark" />
        <h2 className="text-3xl font-bold text-mgs-dark mb-6">Tech</h2>
        <div className="space-y-4">
          <BlogPostCard 
            title="Building Modern Web Apps"
            date="April 3, 1995"
            slug="modern-web-apps"
            excerpt="A deep dive into React, Next.js, and the modern web stack..."
          />
          <BlogPostCard 
            title="React Best Practices 2024"
            date="May 13, 1995"
            slug="react-best-practices"
            excerpt="Lessons learned from building production applications..."
          />
          <BlogPostCard 
            title="The Future of AI in Development"
            date="February 15, 2025"
            slug="future-of-ai"
            excerpt="How AI tools are changing the way we write code..."
          />
          <Link 
          href="/blog/tech"
          className="inline-block px-6 py-2 font-semibold text-sm text-mgs-dark border-2 border-mgs-border hover:bg-mgs-active hover:scale-[1.02] transition-transform shadow-md"
          >View All Tech</Link>
        </div>
      </section>
      <section className="group mb-12">
        <Coffee size={32} className="group-hover:text-mgs-tan text-mgs-dark" />
        <h2 className="text-3xl font-bold text-mgs-dark mb-6">Slice of Life</h2>
        <div className="space-y-4">
          <BlogPostCard 
            title="Coffee Shop Chronicles"
            date="January 5, 2006"
            slug="coffee-shop-chronicles"
            excerpt="Finding inspiration in the everyday moments..."
          />
          <BlogPostCard 
            title="Weekend Adventures"
            date="October 20, 2021"
            slug="weekend-adventures"
            excerpt="Exploring the world one weekend at a time..."
          />
          <BlogPostCard 
            title="Thoughts on Creativity"
            date="November 2, 2025"
            slug="thoughts-on-creativity"
            excerpt="What it means to be creative in a digital age..."
          />
           <Link
          href="blog/life"
          className="inline-block px-6 py-2 font-semibold text-sm text-mgs-dark border-2 border-mgs-border hover:bg-mgs-active hover:scale-[1.02] transition-transform shadow-md"
          >View All Life</Link>
        </div>
      </section>
    </div>
    
  );
}
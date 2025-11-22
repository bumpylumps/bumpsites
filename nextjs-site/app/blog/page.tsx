import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText, Terminal, Coffee, Ghost } from 'lucide-react';
import Link from 'next/link'

import { getAllPosts } from '@/lib/posts'

import { BlogPostCard } from '@/components/BlogPostCard'

export default async function BlogPage() {
  const {life, paranormal, tech} = await getAllPosts()


  return (
    <div className="max-w-4xl mx-auto border-2 border-mgs-border px-6 py-20 mb-20">
      <h1 className="text-5xl font-bold text-mgs-dark mb-12">Blog</h1>

      <section className="group mb-12">
        <Ghost size={32} className="mr-3 text-mgs-dark group-hover:text-mgs-tan"/>
        <h2 className="çext-3xl font-bold text-mgs-dark mb-6">Paranormal</h2>
        <div className="space-y-4">
          { paranormal.slice(0,3).map(post => <BlogPostCard 
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            key={post.slug}
          />) }
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
          { tech.slice(0,3).map(post => <BlogPostCard 
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            key={post.slug}
          />) }
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
          { life.slice(0,3).map(post => <BlogPostCard 
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            key={post.slug}
          />) }
           <Link
          href="blog/life"
          className="inline-block px-6 py-2 font-semibold text-sm text-mgs-dark border-2 border-mgs-border hover:bg-mgs-active hover:scale-[1.02] transition-transform shadow-md"
          >View All Life</Link>
        </div>
      </section>
    </div>
    
  );
}
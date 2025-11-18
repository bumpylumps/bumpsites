
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Coffee, Briefcase, FileText } from 'lucide-react';
import { BlogPostCard } from '@/components/BlogPostCard'


export default function LifeBlog(){
    const posts = [
  { 
    title: 'Coffee Shop Chronicles', 
    excerpt: 'Finding inspiration in the everyday moments...',
    slug: 'coffee-shop-chronicles',
    date: 'Nov 15, 2024',
    category: 'life' as const
  },
  { 
    title: 'Weekend Adventures', 
    excerpt: 'Exploring the world one weekend at a time...',
    slug: 'weekend-adventures',
    date: 'Oct 28, 2024',
    category: 'life' as const
  },
  { 
    title: 'Thoughts on Creativity', 
    excerpt: 'What it means to be creative in a digital age...',
    slug: 'thoughts-on-creativity',
    date: 'Oct 10, 2024',
    category: 'life' as const
  }
];

    return (
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-4">
        <div className="flex items-center mb-6">
        <Coffee size={64} className="mr-3 text-mgs-dark"/>
        <h1 className="text-3xl font-bold text-mgs-dark">It's My Life</h1>
        </div>
        {posts.map((post, idx) => (
            <div 
                key={idx}>
                <BlogPostCard
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    date={post.date}
                />
            </div>
        ))}
      </div>
    );
}
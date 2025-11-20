import Link from 'next/link'
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText, Terminal, Coffee, Ghost } from 'lucide-react';

export async function generateStaticParams() {
  const allPosts = [
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
    },
    {
      title: 'Building Modern Web Apps',
      excerpt: 'A deep dive into React, Next.js, and the modern web stack...',
      slug: 'modern-web-apps',
      date: 'Nov 10, 2024',
      category: 'tech' as const
    },
    {
      title: 'React Best Practices 2024',
      excerpt: 'Lessons learned from building production applications...',
      slug: 'react-best-practices',
      date: 'Oct 15, 2024',
      category: 'tech' as const
    },
    {
      title: 'The Future of AI in Development',
      excerpt: 'How AI tools are changing the way we write code...',
      slug: 'future-of-ai',
      date: 'Sep 20, 2024',
      category: 'tech' as const
    },
    {
      title: 'The Mystery of Room 404',
      excerpt: 'An investigation into the most haunted hotel room in America...',
      slug: 'mystery-room-404',
      date: 'Nov 5, 2024',
      category: 'paranormal' as const
    },
    {
      title: 'Ghost Stories from Abandoned Places',
      excerpt: 'Urban exploration meets paranormal investigation...',
      slug: 'stories-abandoned-places',
      date: 'Oct 20, 2024',
      category: 'paranormal' as const
    },
    {
      title: 'Urban Legends Explored',
      excerpt: 'Separating fact from fiction in modern folklore...',
      slug: 'urban-legends-explored',
      date: 'Sep 15, 2024',
      category: 'paranormal' as const
    }
  ];

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function blogPostPage({ params }: { params: { slug: string } }){
    const { slug } = await params;
    
    const allPosts = [
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
  },
  // Tech posts
  {
    title: 'Building Modern Web Apps',
    excerpt: 'A deep dive into React, Next.js, and the modern web stack...',
    slug: 'modern-web-apps',
    date: 'Nov 10, 2024',
    category: 'tech' as const
  },
  {
    title: 'React Best Practices 2024',
    excerpt: 'Lessons learned from building production applications...',
    slug: 'react-best-practices',
    date: 'Oct 15, 2024',
    category: 'tech' as const
  },
  {
    title: 'The Future of AI in Development',
    excerpt: 'How AI tools are changing the way we write code...',
    slug: 'future-of-ai',
    date: 'Sep 20, 2024',
    category: 'tech' as const
  },
  // Paranormal posts
  {
    title: 'The Mystery of Room 404',
    excerpt: 'An investigation into the most haunted hotel room in America...',
    slug: 'mystery-room-404',
    date: 'Nov 5, 2024',
    category: 'paranormal' as const
  },
  {
    title: 'Ghost Stories from Abandoned Places',
    excerpt: 'Urban exploration meets paranormal investigation...',
    slug: 'stories-abandoned-places',
    date: 'Oct 20, 2024',
    category: 'paranormal' as const
  },
  {
    title: 'Urban Legends Explored',
    excerpt: 'Separating fact from fiction in modern folklore...',
    slug: 'urban-legends-explored',
    date: 'Sep 15, 2024',
    category: 'paranormal' as const
  }
];

const allIcons=[<Ghost />, <Coffee />, <Terminal />]


const post = allPosts.find(p => p.slug === slug)

const categoryIcons = {
    tech: <Terminal size={64} className=""/>,
    paranormal: <Ghost size={64} className="" />,
    life: <Coffee size={64} className="" />
}

if (!post) {
    return (
        <div className="">
            <h1>404 - Page not found</h1>
            <Link href="/blog">
                ← Back to Blog
            </Link>
        </div>
    )
} else {

    return (
        <div className="max-w-3xl mx-auto p-8 border-2 border-mgs-border">
            <div className="flex items-center mb-6 mr-3">
            <div className="text-mgs-dark">{categoryIcons[post.category]}</div>
            <h1 className="text-3xl font-bold text-mgs-dark mb-6">{post.title}</h1>
            </div>
            <div className="text-sm text-mgs-dark font-mono">{post.date}</div>
            <p className="text-lg font-bold text-mgs-dark">{post.excerpt}</p>

        </div>
    )
}
}
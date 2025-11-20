import Link from 'next/link'
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText, Terminal, Coffee, Ghost } from 'lucide-react';

import { getPostBySlug, getPostSlugs } from '@/lib/posts'

export async function generateStaticParams() {
  return await getPostSlugs()
}

export default async function blogPostPage({ params }: { params: { slug: string } }){
    const { slug } = await params;
    const post = await getPostBySlug(slug)

    
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
        <div className="max-w-6xl mx-auto p-8 border-2 border-mgs-border">
            <div className="flex items-end mb-6 mr-3">
            <div className="text-mgs-dark mr-4">{categoryIcons[post.category]}</div>
            <h1 className="text-3xl font-bold text-mgs-dark">{post.title}</h1>
            </div>
            <div className="text-sm text-mgs-dark font-mono">{post.date}</div>
            <p className="text-lg font-bold text-mgs-dark">{post.excerpt}</p>

            <div 
                className="prose prose-lg max-w-none text-mgs-dark mt-6"
                dangerouslySetInnerHTML={{ __html: post.content }} />

        </div>
    )
}
}
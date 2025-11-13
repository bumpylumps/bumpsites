import Link from 'next/link'
import { ChevronRight } from 'lucide-react'


interface BlogPostCardProps{
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    category: 'tech' | 'paranormal' | 'life';
}

export function BlogPostCard({ title, excerpt, date, category, slug }: BlogPostCardProps) {
    const colorMap = {
        tech: 'border-blue-500',
        paranormal: 'border-purple-500',
        life: 'border-pink-500'
    };

    return (
        <Link
            href={`/blog/${slug}`}
            className={`block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 ${colorMap[category]}`}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
                <span className="text-sm text-slate-500">{date}</span>
            </div>
            <p className="text-slate-600 mb-4">{excerpt}</p>
            <div className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Read More <ChevronRight size={20} className="ml-1" />
            </div>
        </Link>
    );
}
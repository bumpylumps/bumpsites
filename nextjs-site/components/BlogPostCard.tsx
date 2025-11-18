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

    return (
        <Link
            href={`/blog/${slug}`}
            className={`block bg-mgs-menu p-6 shadow-md hover:scale-[1.02] transition-all border-2 border-mgs-border`}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-mgs-dark">{title}</h3>
                <span className="text-sm text-mgs-dark">{date}</span>
            </div>
            <p className="text-mgs-dark mb-4">{excerpt}</p>
        </Link>
    );
}

import { Ghost } from 'lucide-react';
import { getAllPosts } from '@/lib/posts'
import { BlogPostCard } from '@/components/BlogPostCard'

export default async function TechBlog(){
    const { paranormal } = await getAllPosts()

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-mgs-dark mr-4 mb-4">{<Ghost size={32} />}</div>
        {paranormal.map((post, idx) => (
            <div key={idx}>
                <BlogPostCard
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                   />
            </div>
        ))}
      </div>
    );
}
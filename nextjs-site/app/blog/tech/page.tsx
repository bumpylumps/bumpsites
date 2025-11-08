
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText } from 'lucide-react';

export default function TechBlog(){
    const posts = [
        { title: 'Building Modern Web Apps', excerpt: 'A deep dive into React, Next.js, and the modern web stack...' },
        { title: 'React Best Practices 2024', excerpt: 'Lessons learned from building production applications...' },
        { title: 'The Future of AI in Development', excerpt: 'How AI tools are changing the way we write code...' }
      ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
        <h1>Tech Blog</h1>
        {posts.map((post, idx) => (
            <div key={idx}>
                {/* post card JSX */}
            </div>
        ))}
      </div>
    );
}
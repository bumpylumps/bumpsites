
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText } from 'lucide-react';

export default function LifeBlog(){
    const posts = [
        { title: 'Coffee Shop Chronicles', excerpt: 'Finding inspiration in the everyday moments...' },
        { title: 'Weekend Adventures', excerpt: 'Exploring the world one weekend at a time...' },
        { title: 'Thoughts on Creativity', excerpt: 'What it means to be creative in a digital age...' }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
        <h1>Life Blog</h1>
        {posts.map((post, idx) => (
            <div key={idx}>
                {/* post card JSX */}
            </div>
        ))}
      </div>
    );
}
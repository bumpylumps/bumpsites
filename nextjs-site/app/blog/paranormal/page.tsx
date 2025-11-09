
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText } from 'lucide-react';

export default function ParanormalBlog(){
    const posts = [
        { title: 'The Mystery of Room 404', excerpt: 'An investigation into the most haunted hotel room in America...' },
        { title: 'Ghost Stories from Abandoned Places', excerpt: 'Urban exploration meets paranormal investigation...' },
        { title: 'Urban Legends Explored', excerpt: 'Separating fact from fiction in modern folklore...' }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
        <h1>Paranormal Blog</h1>
        {posts.map((post, idx) => (
            <div key={idx}>
                {/* post card JSX */}
            </div>
        ))}
      </div>
    );
}
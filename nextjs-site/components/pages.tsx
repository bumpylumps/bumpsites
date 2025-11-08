import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText } from 'lucide-react';

  // Page Components

  const BlogList = ({ category }: { category: 'paranormal' | 'tech' | 'life' }) => {
    const blogs = {
      paranormal: [
        { title: 'The Mystery of Room 404', excerpt: 'An investigation into the most haunted hotel room in America...' },
        { title: 'Ghost Stories from Abandoned Places', excerpt: 'Urban exploration meets paranormal investigation...' },
        { title: 'Urban Legends Explored', excerpt: 'Separating fact from fiction in modern folklore...' }
      ],
      tech: [
        { title: 'Building Modern Web Apps', excerpt: 'A deep dive into React, Next.js, and the modern web stack...' },
        { title: 'React Best Practices 2024', excerpt: 'Lessons learned from building production applications...' },
        { title: 'The Future of AI in Development', excerpt: 'How AI tools are changing the way we write code...' }
      ],
      life: [
        { title: 'Coffee Shop Chronicles', excerpt: 'Finding inspiration in the everyday moments...' },
        { title: 'Weekend Adventures', excerpt: 'Exploring the world one weekend at a time...' },
        { title: 'Thoughts on Creativity', excerpt: 'What it means to be creative in a digital age...' }
      ]
    };

    const titles = {
      paranormal: 'Paranormal Blog',
      tech: 'Tech Blog',
      life: 'Slice of Life'
    };

    const colors = {
      paranormal: 'purple',
      tech: 'blue',
      life: 'pink'
    };

    const color = colors[category];

    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12">{titles[category]}</h1>
        <div className="space-y-6">
          {blogs[category].map((blog, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-${color}-500`}>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{blog.title}</h3>
              <p className="text-slate-600 mb-4">{blog.excerpt}</p>
              <button className={`text-${color}-600 hover:text-${color}-800 font-semibold flex items-center`}>
                Read More 
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };


  
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText } from 'lucide-react';


import { FeaturedProject } from '@/components/FeaturedProject';
import { ProjectCard } from '@/components/ProjectCard'

export default function ProjectsPage(){

    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12">Projects</h1>
        
        <FeaturedProject 
            title = "Ghost-Planet"
            description = "An immersive paranormal investigation experience. Explore haunted locations, collect evidence, uncover mysteries, and piece together the stories of the spirits that remain."
            href = "https://ghostplanet.bumpsites.com" 
            github = "https://github.com/bumpylumps"
            tech = "Go, NextJs"
            gradient = "from-purple-900 to-indigo-900"
            logo = {<svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <radialGradient id="planetGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor: '#a78bfa', stopOpacity: 0.8}} />
                <stop offset="50%" style={{stopColor: '#7c3aed', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: '#4c1d95', stopOpacity: 0.3}} />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#planetGlow)" opacity="0.3" />
            <circle cx="100" cy="100" r="70" fill="#6366f1" opacity="0.9" />
            <circle cx="80" cy="85" r="12" fill="#4338ca" opacity="0.6" />
            <circle cx="120" cy="95" r="8" fill="#4338ca" opacity="0.6" />
            <circle cx="105" cy="115" r="10" fill="#4338ca" opacity="0.6" />
            <path d="M 85 70 Q 85 55 100 55 Q 115 55 115 70 L 115 95 Q 118 100 115 105 L 112 105 Q 110 100 108 105 L 105 105 Q 103 100 101 105 L 98 105 Q 96 100 94 105 L 91 105 Q 88 100 85 105 Z" 
                  fill="white" opacity="0.7" />
            <circle cx="93" cy="72" r="3" fill="#1e1b4b" />
            <circle cx="107" cy="72" r="3" fill="#1e1b4b" />
          </svg>}
        />

        <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard 
          title="MicroServee"
          description="Demo Node.js application exploring microservices architecture patterns and best practices for scalable applications."
          href=""
          github="https://github.com/bumpylumps/microservee"
          tech="JavaScript, Node.js"
          gradient="from-orange-800 to-red-900"
        />

        <ProjectCard 
          title="Nest REST API"
          description="Basic REST API built with NestJS framework, demonstrating clean architecture and TypeScript best practices."
          href=""
          github="https://github.com/bumpylumps/nest-rest-api"
          tech="TypeScript, NestJS"
          gradient="from-pink-800 to-rose-900"
        />
        </div>
      </div>
    );
}
import { Github } from 'lucide-react';

interface FeaturedProjectProps {
    title: string;
    description: string;
    href?: string;
    github: string;
    tech?: string;
    gradient: string;
    logo?: React.ReactNode;
}

export function FeaturedProject({ title, description, href, github, tech, gradient, logo }: FeaturedProjectProps){
    
    return (
        <div className={`bg-gradient-to-br ${gradient} rounded-xl shadow-2xl text-white overflow-hidden mb-8`}>
          <div className="flex flex-col gap-0">
            <div className="bg-slate-900/50 p-8 flex items-center justify-center">
              <div className="w-48 h-48 relative">
                {logo}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">{title}</h3>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                {description}
              </p>
              <div className="flex gap-4">
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                  Visit Site →
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}
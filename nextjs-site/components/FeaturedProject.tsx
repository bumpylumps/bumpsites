import { Github } from 'lucide-react';

interface FeaturedProjectProps {
    title: string;
    description: string;
    href?: string;
    github: string;
    tech?: string;
    logo?: React.ReactNode;
}

export function FeaturedProject({ title, description, href, github, tech, logo }: FeaturedProjectProps){
    
    return (
        <div className={`bg-mgs-menu border-2 border-mgs-border shadow-2xl text-white overflow-hidden mb-8 hover:scale-[1.02] hover:bg-mgs-active transition-transform`}>
          <div className="flex flex-col gap-0">
            <div className="bg-slate-900/50 p-8 flex items-center justify-center">
              <div className="w-48 h-48 relative">
                {logo}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl text-mgs-dark font-bold mb-4">{title}</h3>
              <p className="text-mgs-dark text-sm mb-3 font-mono">{tech}</p>
              <p className="text-lg text-mgs-dark mb-6 leading-relaxed">
                {description}
              </p>
              <div className="flex gap-4">
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-mgs-menu border-2 border-mgs-border text-mgs-dark px-8 py-3 font-semibold hover:bg-mgs-active transition-colors">
                  Visit Site →
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex bg-mgs-menu text-mgs-dark items-center border-2 border-mgs-border px-8 py-3 font-semibold hover:bg-mgs-active transition-colors">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}
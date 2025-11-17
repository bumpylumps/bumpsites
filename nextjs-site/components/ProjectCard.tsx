import { Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    github: string;
    tech: string;

}

export function ProjectCard({ title, description, href, github, tech}: ProjectCardProps){
    

    return (
         <div className={`border-2 border-mgs-border bg-mgs-menu shadow-lg text-mgs-dark p-6 hover:scale-[1.02] hover:bg-mgs-active transition-transform`}>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-sm text-mgs-dark mb-3 font-mono">{tech}</p>
              <p className="text-mgs-dark mb-6 leading-relaxed">
                {description}
              </p>
              <div className="flex gap-3">
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-mgs-border bg-mgs-menu text-mgs-dark px-6 py-2 font-semibold hover:bg-mgs-active transition-colors text-sm">
                    Visit Site →
                  </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-mgs-border bg-mgs-menu px-6 py-2 font-semibold hover:bg-mgs-active transition-colors text-sm">
                  <Github size={18} className="mr-2" />
                  Code
                </a>
              </div>
            </div>
    )

}
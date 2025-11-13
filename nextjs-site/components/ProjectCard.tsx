import { Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    github: string;
    tech: string;
    gradient: string;

}

export function ProjectCard({ title, description, href, github, tech, gradient}: ProjectCardProps){
    

    return (
         <div className={`bg-gradient-to-br ${gradient} rounded-xl shadow-lg text-white p-6 hover:shadow-2xl transition-shadow`}>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-sm text-white/80 mb-3 font-mono">{tech}</p>
              <p className="text-white/90 mb-6 leading-relaxed">
                {description}
              </p>
              <div className="flex gap-3">
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm">
                    Visit Site →
                  </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
                  <Github size={18} className="mr-2" />
                  Code
                </a>
              </div>
            </div>
    )

}
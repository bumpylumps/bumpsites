
export default function ProjectsPage(){
    const projects = [
      {
        title: 'Ghost Planet',
        description: 'An immersive paranormal investigation experience. Explore haunted locations, collect evidence, uncover mysteries, and piece together the stories of the spirits that remain.',
        link: 'https://ghostplanet.bumpsites.com',
        github: 'https://github.com/bumpylumps',
        featured: true,
        gradient: 'from-purple-900 to-indigo-900',
        logo: (
          <svg viewBox="0 0 200 200" className="w-full h-full">
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
          </svg>
        )
      },
      {
        title: 'GhostBuds',
        description: 'Paranormal investigation app for documenting and sharing supernatural encounters. Connect with fellow investigators and explore haunted locations together.',
        link: 'https://ghostbuds.cyclic.app/',
        github: 'https://github.com/bumpylumps/ghostbuds',
        tech: 'EJS, Node.js',
        gradient: 'from-emerald-800 to-teal-900'
      },
      {
        title: 'Hi-Strangeness',
        description: 'A website dedicated to exploring unexplained phenomena, UFO sightings, and high strangeness events from around the world.',
        github: 'https://github.com/bumpylumps/hi-strangeness',
        tech: 'EJS',
        gradient: 'from-cyan-800 to-blue-900'
      },
      {
        title: 'Microservee',
        description: 'Demo Node.js application exploring microservices architecture patterns and best practices for scalable applications.',
        github: 'https://github.com/bumpylumps/microservee',
        tech: 'JavaScript, Node.js',
        gradient: 'from-orange-800 to-red-900'
      },
      {
        title: 'Nest REST API',
        description: 'Basic REST API built with NestJS framework, demonstrating clean architecture and TypeScript best practices.',
        github: 'https://github.com/bumpylumps/nest-rest-api',
        tech: 'TypeScript, NestJS',
        gradient: 'from-pink-800 to-rose-900'
      }
    ];

    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12">Projects</h1>
        
        {/* Featured Project */}
        <div className={`bg-gradient-to-br ${projects[0].gradient} rounded-xl shadow-2xl text-white overflow-hidden mb-8`}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-slate-900/50 p-8 flex items-center justify-center">
              <div className="w-48 h-48 relative">
                {projects[0].logo}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">{projects[0].title}</h3>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex gap-4">
                <a 
                  href={projects[0].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                  Visit Site →
                </a>
                <a 
                  href={projects[0].github} 
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

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg text-white p-6 hover:shadow-2xl transition-shadow`}>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              {project.tech && (
                <p className="text-sm text-white/80 mb-3 font-mono">{project.tech}</p>
              )}
              <p className="text-white/90 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm">
                    Visit Site →
                  </a>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
                  <Github size={18} className="mr-2" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
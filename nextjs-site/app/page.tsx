

export default function Home() {

  return (
  <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Your Name
            </h1>
            <p className="text-2xl md:text-3xl text-purple-200 mb-4">
              Freelance Developer & Creative
            </p>
            <p className="text-lg text-purple-300 max-w-2xl mx-auto">
              Building digital experiences at the intersection of technology and creativity
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bento Card Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-6 grid-rows-4 gap-4 h-[800px]">
          
          {/* About Card - Large rectangle (2x2) */}
          <button
            onClick={() => handleNavClick('about')}
            className="col-span-3 row-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white hover:scale-[1.02] transition-transform shadow-xl group overflow-hidden relative">
            <User size={48} className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Discover my journey, skills, and what drives me 
              to create unique digital experiences.
            </p>
          </button>

          {/* Projects Card - Tall (1.5x2) */}
          <button
            onClick={() => handleNavClick('projects')}
            className="col-span-2 row-span-2 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform shadow-xl group">
            <Briefcase size={36} className="mb-3 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-3">Projects</h2>
            <p className="text-pink-100 text-sm leading-relaxed mb-4">
              Explore my portfolio of creative work and technical experiments.
            </p>
            <div className="space-y-2 text-left">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">Ghost Planet</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">GhostBuds</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">Hi-Strangeness</div>
            </div>
          </button>

          {/* Resume Card - Tall (1x2) */}
          <button
            onClick={() => handleNavClick('resume')}
            className="col-span-1 row-span-2 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform shadow-xl group flex flex-col items-center justify-center">
            <FileText size={48} className="mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-center mb-2">Resume</h3>
            <p className="text-emerald-100 text-sm text-center">Skills & Experience</p>
          </button>

          {/* Tech Blog Card - Wide rectangle (2x1) */}
          <button
            onClick={() => handleNavClick('tech')}
            className="col-span-2 row-span-1 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform shadow-xl group">
            <div className="flex items-center gap-4">
              <div className="text-5xl">💻</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Tech Blog</h3>
                <p className="text-blue-100 text-sm">Code, frameworks, and insights</p>
              </div>
            </div>
          </button>

          {/* Slice of Life Card - Wide rectangle (2x1) */}
          <button
            onClick={() => handleNavClick('life')}
            className="col-span-2 row-span-1 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform shadow-xl group">
            <div className="flex items-center gap-4">
              <div className="text-5xl">☕</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Slice of Life</h3>
                <p className="text-rose-100 text-sm">Stories and everyday moments</p>
              </div>
            </div>
          </button>

          {/* Contact/Social Card - Medium (2x1) */}
          <div className="col-span-2 row-span-1 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <a href="https://github.com/bumpylumps" target="_blank" rel="noopener noreferrer" 
                   className="hover:scale-110 transition-transform">
                  <Github size={28} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="hover:scale-110 transition-transform">
                  <Instagram size={28} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="hover:scale-110 transition-transform">
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Paranormal Blog Card - Small square */}
          <button
            onClick={() => handleNavClick('paranormal')}
            className="col-span-1 row-span-1 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform shadow-xl group flex flex-col items-center justify-center">
            <div className="text-5xl mb-2">👻</div>
            <h3 className="text-lg font-bold text-center">Paranormal</h3>
          </button>

        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          <button
            onClick={() => handleNavClick('about')}
            className="w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
            <User size={40} className="mb-3 text-purple-400" />
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p className="text-slate-300 text-sm">Discover my journey and what drives me</p>
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            className="w-full bg-gradient-to-br from-indigo-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
            <Briefcase size={40} className="mb-3" />
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <p className="text-pink-100 text-sm">Explore my portfolio of work</p>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleNavClick('paranormal')}
              className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-4xl mb-2">👻</div>
              <h3 className="text-lg font-bold">Paranormal</h3>
            </button>

            <button
              onClick={() => handleNavClick('tech')}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-4xl mb-2">💻</div>
              <h3 className="text-lg font-bold">Tech</h3>
            </button>
          </div>

          <button
            onClick={() => handleNavClick('life')}
            className="w-full bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-4xl mb-2">☕</div>
            <h3 className="text-xl font-bold mb-1">Slice of Life</h3>
            <p className="text-rose-100 text-sm">Stories and everyday moments</p>
          </button>

          <button
            onClick={() => handleNavClick('resume')}
            className="w-full bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-xl">
            <FileText size={40} className="mb-3" />
            <h3 className="text-xl font-bold mb-1">Resume</h3>
            <p className="text-emerald-100 text-sm">Skills & Experience</p>
          </button>
        </div>
      </div>
    </div>
  );
}

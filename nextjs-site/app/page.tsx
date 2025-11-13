import Link from 'next/link'
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText, Terminal, Coffee, Ghost } from 'lucide-react';

import { BentoCard } from '@/components/BentoCard';

export default function HomePage() {

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
          <BentoCard 
            href= '/about'
            icon={User}
            title="About Me"
            colSpan={3}
            rowSpan={2}
            gradient= "from-slate-800 to-slate-900"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Discover my journey, skills, and what drives me 
              to create unique digital experiences."
          />

          {/* Projects Card - Tall (1.5x2) */}
          < BentoCard 
            href="/projects"
            icon={Briefcase}
            title="Projects"
            colSpan={2}
            rowSpan={2}
            gradient="from-indigo-600 to-pink-600"
            description="Explore my portfolio of creative work and technical experiments."
            >
              <div className="space-y-2 text-left">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">Ghost Planet</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">GhostBuds</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">Hi-Strangeness</div>
              </div>
            </BentoCard>
     
          {/* Resume Card - Tall (1x2) */}
          <BentoCard 
            href="/resume"
            icon={FileText}
            title="Resume"
            colSpan={1}
            rowSpan={2}
            gradient="from-emerald-600 to-teal-700"
            description="Skills & Experience"
          />

          {/* Tech Blog Card - Wide rectangle (2x1) */}
          <BentoCard 
            href="/blog/tech"
            title="Tech Blog"
            icon={Terminal}
            colSpan={2}
            rowSpan={1}
            gradient="from-blue-600 to-blue-800"
            description="Code, frameworks, and insights"
          />
          
  
          {/* Paranormal Blog Card - Small square */}
          <BentoCard
            href="/blog/paranormal"
            title="Paranormal Adventures"
            icon={Ghost}
            colSpan={2}
            rowSpan={1}
            gradient="from-purple-600 to-purple-800"
            description="For all the things going bump in the night"
          />

          {/* Slice of Life Card - Wide rectangle (2x1) */}
          <BentoCard 
            href="/blog/life"
            title="Slice of Life"
            icon={Coffee}
            colSpan={2}
            rowSpan={1}
            gradient="from-pink-500 to-rose-600"
            description="Stories and everyday moments"
          />
      

          {/* Contact/Social Card - Medium (2x1) */}
          <div className="col-span-6 row-span-1 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl flex items-center justify-center">
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


        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          <Link
            href="/about"
            className="w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
            <User size={40} className="mb-3 text-purple-400" />
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p className="text-slate-300 text-sm">Discover my journey and what drives me</p>
          </Link>

          <Link
            href="/projects"
            className="w-full bg-gradient-to-br from-indigo-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
            <Briefcase size={40} className="mb-3" />
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <p className="text-pink-100 text-sm">Explore my portfolio of work</p>
          </Link>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/blog/paranormal"
              className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-4xl mb-2">👻</div>
              <h3 className="text-lg font-bold">Paranormal</h3>
            </Link>

            <Link
              href="/blog/tech"
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-4xl mb-2">💻</div>
              <h3 className="text-lg font-bold">Tech</h3>
            </Link>
          </div>

          <Link
            href="/blog/life"
            className="w-full bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-4xl mb-2">☕</div>
            <h3 className="text-xl font-bold mb-1">Slice of Life</h3>
            <p className="text-rose-100 text-sm">Stories and everyday moments</p>
          </Link>

          <Link
            href="/resume"
            className="w-full bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-xl">
            <FileText size={40} className="mb-3" />
            <h3 className="text-xl font-bold mb-1">Resume</h3>
            <p className="text-emerald-100 text-sm">Skills & Experience</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

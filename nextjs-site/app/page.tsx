import Link from 'next/link'
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText, Terminal, Coffee, Ghost } from 'lucide-react';

import { BentoCard } from '@/components/BentoCard';
import { MobileCard } from '@/components/MobileCard';

export default function HomePage() {

  return (
  <div className="min-h-screen bg-mgs-dark">
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-mgs-menu overflow-hidden">
      
        
        {/* Hero content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-mgs-dark mb-6 tracking-tight">
              Alex Fulop
            </h1>
            <p className="text-2xl md:text-3xl text-mgs-dark mb-4">
              Software Engineer
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
        <div className="hidden md:grid grid-cols-12 grid-rows-4 gap-4 h-[800px]">
          
          <BentoCard 
            href="/blog"
            title="Blog"
            icon={Terminal}
            gridSpan="col-span-8 row-span-2"
          />

          <BentoCard 
            href= '/about'
            icon={User}
            title="About Me"
            gridSpan="col-span-4 row-span-2"
          />

            <BentoCard 
            href="/resume"
            icon={FileText}
            title="Resume"
            gridSpan="col-span-5 row-span-2"
          />

          < BentoCard 
            href="/projects"
            icon={Briefcase}
            title="Recent Projects"
            gridSpan="col-span-7 row-span-2"
            />
          
  

          {/* Contact/Social Card - Medium (2x1) */}
          <div className="col-span-12 row-span-1 bg-mgs-menu p-6 text-mgs-dark shadow-xl flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <a href="https://github.com/bumpylumps" target="_blank" rel="noopener noreferrer" 
                   className="hover:scale-110 hover:text-mgs-tan transition-transform">
                  <Github size={28} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="hover:scale-110 hover:text-mgs-tan transition-transform">
                  <Instagram size={28} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="hover:scale-110 hover:text-mgs-tan transition-transform">
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>


        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          <MobileCard 
            href="/about"
            icon={User}
            title="About Me"
            gradient="from-pink-500 to-rose-600"
          />

          <MobileCard 
            href="/projects"
            icon={Briefcase}
            title="Projects"
            gradient="from-indigo-600 to-pink-600"
          />

          <MobileCard 
            href="/blog/paranormal"
            icon={Ghost}
            title="Paranormal Blog"
            gradient="from-purple-600 to-purple-800"
          />

          <MobileCard 
            href="/blog/tech"
            icon={Terminal}
            title="Tech Blog"
            gradient="from-blue-600 to-blue-800"
          />

          <MobileCard 
            href="/blog/life"
            icon={Coffee}
            title="Slice of Life Blog"
            gradient="from-blue-600 to-blue-800"
          />

          <MobileCard 
            href="/resume"
            icon={FileText}
            title="Resume"
            gradient="from-emerald-600 to-teal-700"
          />
        </div>
      </div>
    </div>
  );
}

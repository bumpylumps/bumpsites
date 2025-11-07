import React, { useState } from 'react';
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText } from 'lucide-react';

const DrawerSidebarLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [blogExpanded, setBlogExpanded] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { 
      id: 'blog', 
      label: 'Blog',
      icon: BookOpen,
      submenu: [
        { id: 'paranormal', label: 'Paranormal' },
        { id: 'tech', label: 'Tech' },
        { id: 'life', label: 'Slice of Life' }
      ]
    },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText }
  ];

  const getPageLabel = (pageId) => {
    // Check main navigation
    const mainNav = navigation.find(item => item.id === pageId);
    if (mainNav) return mainNav.label;
    
    // Check blog submenu
    const blogNav = navigation.find(item => item.id === 'blog');
    if (blogNav && blogNav.submenu) {
      const subNav = blogNav.submenu.find(item => item.id === pageId);
      if (subNav) return `Blog > ${subNav.label}`;
    }
    
    return pageId;
  };

  const handleNavClick = (id) => {
    if (activePage !== id) {
      setPreviousPage(activePage);
    }
    setActivePage(id);
    if (window.innerWidth < 768) {
      setIsDrawerOpen(false);
    }
    setBlogExpanded(false);
  };

  const toggleBlog = () => {
    setBlogExpanded(!blogExpanded);
  };

  // Page Components
  const Hero = () => (
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

  const About = () => (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-slate-900 mb-8">About Me</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          Welcome! I'm a freelance developer with a passion for creating unique digital experiences. 
          My work spans across web development, creative projects, and everything in between.
        </p>
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          When I'm not coding, you'll find me exploring the paranormal, writing about technology, 
          or sharing slice-of-life stories on my blog. I believe in bringing creativity and 
          technical expertise together to build something meaningful.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          I specialize in React, modern JavaScript, and crafting user experiences that feel 
          both intuitive and delightful. Let's build something amazing together.
        </p>
      </div>
    </div>
  );

  const BlogList = ({ category }) => {
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

  const Projects = () => {
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
  };

  const Resume = () => (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-white p-12 rounded-xl shadow-lg border border-slate-200">
        <div className="border-b-4 border-purple-600 pb-6 mb-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">Your Name</h1>
          <p className="text-2xl text-purple-600">Freelance Developer</p>
        </div>
        
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-purple-600 mr-3"></div>
            Experience
          </h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-slate-900">Freelance Developer</h3>
            <p className="text-slate-600 mb-3">2020 - Present</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Developed web applications for various clients across multiple industries</li>
              <li>Specialized in React and modern JavaScript frameworks</li>
              <li>Built responsive, accessible, and performant user interfaces</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-purple-600 mr-3"></div>
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'Git', 'TypeScript', 'Tailwind CSS', 'REST APIs'].map((skill) => (
              <span key={skill} className="bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-purple-600 mr-3"></div>
            Education
          </h2>
          <h3 className="text-2xl font-semibold text-slate-900">Your University</h3>
          <p className="text-slate-600">Bachelor's Degree in Computer Science</p>
        </section>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Hero />;
      case 'about': return <About />;
      case 'paranormal': return <BlogList category="paranormal" />;
      case 'tech': return <BlogList category="tech" />;
      case 'life': return <BlogList category="life" />;
      case 'projects': return <Projects />;
      case 'resume': return <Resume />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar with Logo/Menu Button */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="hover:text-purple-600 transition-colors">
              {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <span className="text-2xl font-bold">YN</span>
          </div>
          
          {/* Breadcrumb Trail */}
          {!isDrawerOpen && previousPage && (
            <div className="flex items-center text-sm text-slate-600">
              <button 
                onClick={() => handleNavClick(previousPage)}
                className="hover:text-purple-600 transition-colors">
                {getPageLabel(previousPage)}
              </button>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-slate-900 font-medium">{getPageLabel(activePage)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-slate-900 text-white w-80 transform transition-transform duration-300 ease-in-out z-50 ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-2xl font-bold">Navigation</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={toggleBlog}
                        className="w-full flex items-center justify-between px-6 py-3 hover:bg-slate-800 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown 
                          size={20} 
                          className={`transform transition-transform ${blogExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {blogExpanded && (
                        <div className="bg-slate-800/50">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleNavClick(subItem.id)}
                              className={`w-full text-left px-12 py-3 hover:bg-slate-700 transition-colors ${
                                activePage === subItem.id ? 'bg-purple-600 hover:bg-purple-700' : ''
                              }`}>
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center space-x-3 px-6 py-3 hover:bg-slate-800 transition-colors ${
                        activePage === item.id ? 'bg-purple-600 hover:bg-purple-700' : ''
                      }`}>
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="border-t border-slate-700 p-6">
            <p className="text-slate-400 text-sm mb-4">Connect with me</p>
            <div className="flex space-x-4">
              <a href="https://github.com/bumpylumps" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-purple-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-purple-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
};

export default DrawerSidebarLayout;
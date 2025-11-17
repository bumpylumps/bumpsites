'use client'


import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Menu, X, Github, Instagram, Twitter, ChevronDown, ChevronRight, Home, User, BookOpen, Briefcase, FileText } from 'lucide-react';



const DrawerSidebarLayout = ({ children }: {children: React.ReactNode}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [blogExpanded, setBlogExpanded] = useState(false);
  const pathname = usePathname();
  const toggleBlog = () => {
    setBlogExpanded(!blogExpanded)
  }

  const navigation = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { 
      href: '/blog', 
      label: 'Blog',
      icon: BookOpen,
      submenu: [
        { href: '/blog/paranormal', label: 'Paranormal' },
        { href: '/blog/tech', label: 'Tech' },
        { href: '/blog/life', label: 'Slice of Life' }
      ]
    },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/resume', label: 'Resume', icon: FileText }
  ];

  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);

    return segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);

      return { path, label };
    });
  };


  return (
    <div className="min-h-screen bg-mgs-dark">
      {/* Top Bar with Logo/Menu Button */}
      <div className="fixed top-0 left-0 right-0 bg-mgs-active shadow-md z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="text-mgs-text hover:text-mgs-tan transition-colors">
              {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <span className="text-2xl font-bold text-mgs-text">Alex Fulop</span>
          </div>

        {/* Breadcrumbs */}
        {pathname !== '/' && (
          <div className="flex items-center text-sm text-mgs-text">
            <Link href="/" className="hover:text-mgs-tan transition-colors">
              Home
            </Link>
            {getBreadcrumbs().map((crumb, idx) => (
              <React.Fragment key={crumb.path}>
                <ChevronRight size={16} className="mx-2" /> 
                <Link href={crumb.path} className="hover:text-mgs-tan transition-colors">
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
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
      <div className={`fixed top-0 left-0 h-full bg-mgs-menu text-mgs-dark w-80 transform transition-transform duration-300 ease-in-out z-50 ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-6 border-b border-mgs-border">
            <h2 className="text-2xl font-bold">My Stuff</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.href}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={toggleBlog}
                        className="w-full flex items-center justify-between px-6 py-3 hover:bg-mgs-tan transition-colors">
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
                        <div className="bg-mgs-active">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block w-full text-left px-12 py-3 hover:bg-mgs-tan transition-color ${pathname === subItem.href ? 'bg-mgs-dark hover:bg-mgs-active' : ''}`}>
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`w-full flex items-center space-x-3 px-6 py-3 hover:bg-mgs-tan transition-colors ${pathname === item.href ? 'bg-mgs-menu hover:bg-mgs-active' : ''}`}>
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
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
        {children}
      </main>
    </div>
  );
};

export default DrawerSidebarLayout;
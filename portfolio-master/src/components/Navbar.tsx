import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={() => scrollToSection('home')}
            >
              Welcome
            </motion.h1>

            <div className="hidden lg:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-sm font-medium transition-colors ${
                        activeSection === item.toLowerCase()
                          ? 'text-purple-600'
                          : isScrolled
                          ? 'text-gray-800'
                          : 'text-white'
                      }`}
                    >
                      {item}
                    </button>
                    {activeSection === item.toLowerCase() && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`lg:hidden text-2xl transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-lg"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-4 top-4 text-2xl text-black hover:text-gray-600"
                aria-label="Close menu"
              >
                ✕
              </button>
              <div className="p-6 pt-16 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ x: 4 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium ${
                      activeSection === item.toLowerCase()
                        ? 'bg-purple-100 text-purple-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
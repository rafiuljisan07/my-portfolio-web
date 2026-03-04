import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-card-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center">
              <span className="font-mono text-xl text-primary font-bold gradient-text">{"< RIJ />"}</span>
              {/* <span className="text-xl font-bold">Jisan.dev</span> */}
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.name}>
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/10'
                        : 'hover:text-primary'
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-card-border transition-colors"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-outlined text-sm">
              {darkMode ? 'dark_mode' : 'light_mode'}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
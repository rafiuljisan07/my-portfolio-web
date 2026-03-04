import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects.jsx';

const ProjectsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Page entrance animation
    gsap.fromTo(pageRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={pageRef} className="pt-20">
      {/* Page Header */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My <span className="text-primary">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore my portfolio of web applications, mobile apps, and design projects. 
            Each project represents a unique challenge and showcases different aspects of my development skills.
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Component */}
      <Projects />

      {/* Additional Projects Info */}
      <motion.section 
        className="py-16 bg-white dark:bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to see more?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            These are just a few highlights from my portfolio. I'm always working on new projects 
            and experimenting with the latest technologies. Check out my GitHub for more code samples 
            and contributions to open source projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://github.com/rafiuljisan07"
              target='_blank'
              className="flex items-center gap-2 bg-gray-900 dark:bg-card-border hover:bg-gray-800 dark:hover:bg-[#2a2a2a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
              View GitHub
            </motion.a>
            <Link to="/contact">
              <motion.div
                className="flex items-center gap-2 bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                Get In Touch
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
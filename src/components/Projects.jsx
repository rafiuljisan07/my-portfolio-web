import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web App', 'Mobile', 'UI/UX', 'API'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'A React Native weather application with location-based forecasts, interactive maps, and beautiful animations.',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'OpenWeather API', 'Expo'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Banking App UI',
      description: 'Modern banking application interface design with clean aesthetics, intuitive navigation, and accessibility features.',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Adobe XD', 'Principle'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'RESTful API Service',
      description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation. Built with Node.js and PostgreSQL.',
      category: 'API',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'PostgreSQL', 'JWT', 'Swagger'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations, dark mode, and optimized performance. Built with modern web technologies.',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    // GSAP scroll animations
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-card-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-text-gray max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my skills in web development, mobile apps, and UI/UX design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white dark:bg-card-border text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] border border-gray-200 dark:border-[#333]'
              }`}
              onClick={() => handleFilterChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card bg-white dark:bg-card-dark border border-gray-200 dark:border-card-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <motion.a
                        href={project.liveUrl}
                        className="flex items-center gap-2 bg-white/90 text-gray-900 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center gap-2 bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="material-symbols-outlined text-[16px]">code</span>
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact Me Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/contact">
            <motion.div
              className="inline-flex items-center gap-2 bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 px-6 py-2.5 rounded-full transition-all text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
              Contact Me
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
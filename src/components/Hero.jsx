import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Mail, Eye, Github, Linkedin, Facebook } from 'lucide-react';
import profileAvatar from '../assets/profile-avater2.png';

const Hero = () => {
  const heroRef = useRef(null);
  const avatarRef = useRef(null);
  const codeRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();

    tl.fromTo(avatarRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' }
    )
      .fromTo('.hero-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
        '-=0.5'
      )
      .fromTo('.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

    // Floating animation for avatar
    gsap.to(avatarRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    // Terminal typing animation
    if (codeRef.current) {
      const codeLines = codeRef.current.querySelectorAll('.code-line');
      gsap.fromTo(codeLines,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.2,
          delay: 1,
          ease: 'power2.out'
        }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left hero-content">
            <motion.div
              className="flex justify-center lg:justify-start mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative" ref={avatarRef}>
                <img
                  alt="Profile Avatar"
                  className="w-24 h-24 rounded-full border-4 border-gray-200 dark:border-card-border shadow-xl object-cover"
                  src={profileAvatar}
                />
                <motion.div
                  className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-background-light dark:border-background-dark"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-mono mb-4 hero-title"
            >
              Hello, World! I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 hero-title"
            >
              <span className="text-primary">Rafiul Islam</span>
              <br />
              <span className="text-gray-900 dark:text-white">Jisan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 hero-title"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light">
                MERN Stack{" "}
                <span className="text-primary">Web Developer</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 mb-8 hero-title"
            >
              I craft modern, scalable web applications with clean code and
              exceptional user experiences. Let's build something amazing together.
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-12 hero-buttons">
              <Link to="/contact">
                <motion.div
                  className="flex items-center gap-2 bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 px-6 py-2.5 rounded-full transition-all text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Contact Me
                </motion.div>
              </Link>

              <Link to="/projects">
                <motion.div
                  className="flex items-center gap-2 bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 px-6 py-2.5 rounded-full transition-all text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={20} />
                  View Projects
                </motion.div>
              </Link>

              <div className="w-px h-8 bg-gray-300 dark:bg-card-border mx-2 hidden sm:block"></div>

              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: 'https://github.com/rafiuljisan07',
                    label: 'GitHub'
                  },
                  {
                    icon: Linkedin,
                    href: 'https://linkedin.com/in/rafiul-islam-jisan-99ba26332/',
                    label: 'LinkedIn'
                  },
                  {
                    icon: Facebook,
                    href: 'https://facebook.com/yourusername',
                    label: 'Facebook'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    className="text-gray-500 hover:text-primary transition-colors"
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="terminal-window bg-gray-900 dark:bg-black rounded-xl border border-gray-200 dark:border-card-border shadow-2xl overflow-hidden">
              <div className="terminal-header bg-gray-100 dark:bg-card-border px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-600 dark:text-gray-400 font-mono text-sm">developer.js</span>
              </div>
              <div ref={codeRef} className="p-6 font-mono text-sm leading-relaxed bg-gray-900 dark:bg-black text-white">
                <div className="code-line">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-yellow-300">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="code-line pl-4">
                  <span className="text-red-400">name:</span>{" "}
                  <span className="text-green-400">"Rafiul Islam Jisan"</span>,
                </div>
                <div className="code-line pl-4">
                  <span className="text-red-400">role:</span>{" "}
                  <span className="text-green-400">"MERN Stack Developer"</span>,
                </div>
                <div className="code-line pl-4">
                  <span className="text-red-400">skills:</span>{" "}
                  <span className="text-white">[</span>
                </div>
                <div className="code-line pl-8">
                  <span className="text-green-400">"MongoDB"</span>,{" "}
                  <span className="text-green-400">"Express"</span>,
                </div>
                <div className="code-line pl-8">
                  <span className="text-green-400">"React"</span>,{" "}
                  <span className="text-green-400">"Node.js"</span>
                </div>
                <div className="code-line pl-4">
                  <span className="text-white">]</span>,
                </div>
                <div className="code-line pl-4">
                  <span className="text-red-400">passion:</span>{" "}
                  <span className="text-green-400">"Building amazing web apps"</span>
                </div>
                <div className="code-line">
                  <span className="text-white">{"}"}</span>;
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
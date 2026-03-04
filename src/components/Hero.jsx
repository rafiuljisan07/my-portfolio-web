import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Mail, Eye, Github, Linkedin, Facebook } from 'lucide-react';
import profileAvatar from '../assets/profile-avater2.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const avatarRef = useRef(null);
  const codeRef = useRef(null);
  const animationsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Avatar entrance animation with smoother easing
      const avatarTl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      avatarTl.fromTo(avatarRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { 
          scale: 1, 
          rotation: 0, 
          opacity: 1,
          duration: 1.2, 
          ease: 'back.out(1.4)'
        }
      );

      // Floating animation for avatar with reduced movement
      const floatAnim = gsap.to(avatarRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      animationsRef.current.push(floatAnim);

      // Stagger text animations with smoother timing
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.3
        }
      );

      // Button animations
      gsap.fromTo('.hero-buttons',
        { opacity: 0, y: 15 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7,
          ease: 'power2.out',
          delay: 0.8
        }
      );

      // Terminal typing animation with improved timing
      if (codeRef.current) {
        const codeLines = codeRef.current.querySelectorAll('.code-line');
        gsap.fromTo(codeLines,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.5,
            ease: 'power2.out'
          }
        );
      }
    }, heroRef);

    return () => {
      // Cleanup all animations
      ctx.revert();
      animationsRef.current.forEach(anim => anim.kill());
      animationsRef.current = [];
    };
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl -z-10 pointer-events-none will-change-transform"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left hero-content">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative will-change-transform" ref={avatarRef}>
                <img
                  alt="Profile Avatar"
                  className="w-24 h-24 rounded-full border-4 border-gray-200 dark:border-card-border shadow-xl object-cover"
                  src={profileAvatar}
                />
                <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-background-light dark:border-background-dark animate-pulse" />
              </div>
            </div>

            <p className="text-primary font-mono mb-4 hero-title">
              Hello, World! I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 hero-title">
              <span className="text-primary">Rafiul Islam</span>
              <br />
              <span className="text-gray-900 dark:text-white">Jisan</span>
            </h1>

            <div className="mb-8 hero-title">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light">
                MERN Stack{" "}
                <span className="text-primary">Web Developer</span>
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 mb-8 hero-title">
              I craft modern, scalable web applications with clean code and
              exceptional user experiences. Let's build something amazing together.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-12 hero-buttons">
              <Link to="/contact">
                <div className="flex items-center gap-2 bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95">
                  <Mail size={20} />
                  Contact Me
                </div>
              </Link>

              <Link to="/projects">
                <div className="flex items-center gap-2 bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95">
                  <Eye size={20} />
                  View Projects
                </div>
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
                ].map((social) => (
                  <a
                    key={social.label}
                    className="text-gray-500 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="hidden lg:block terminal-container">
            <div className="terminal-window bg-gray-900 dark:bg-black rounded-xl border border-gray-200 dark:border-card-border shadow-2xl overflow-hidden transform-gpu">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP scroll animations
    gsap.fromTo('.service-card', 
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

  const serviceCards = [
    {
      icon: 'computer',
      title: 'What I can do',
      description: 'I can help develop solutions that will help you grow your business:',
      items: [
        'UI/UX Design',
        'Fullstack Web Development',
        'Mobile App Development',
        'Database Design',
        'API Integration'
      ]
    },
    {
      icon: 'layers',
      title: 'Tools I Use',
      description: 'I use the latest tools and technologies to build functional and scalable products:',
      items: [
        { category: 'Frontend:', tech: 'Tailwind CSS, React, TypeScript' },
        { category: 'Backend:', tech: 'Node.js, Fastify, MongoDB, PostgreSQL' },
        { category: 'Design:', tech: 'Figma, Framer, Photoshop' }
      ]
    },
    {
      icon: 'palette',
      title: 'UI/UX Design',
      description: 'I am a designer first, developer second. I can help design clean and modern interfaces:',
      items: [
        'User-Centered Design',
        'Modern & Clean UI',
        'Responsive Layouts',
        'Wireframes & Prototypes'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Digital Experiences</h2>
          <p className="text-gray-600 dark:text-text-gray max-w-2xl text-lg">
            I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.title}
              ref={el => cardsRef.current[index] = el}
              className={`service-card bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-card-border rounded-xl p-8 hover:border-primary/50 transition-colors duration-300 shadow-sm ${
                index === 2 ? 'md:col-span-1' : ''
              }`}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="p-3 bg-primary/10 rounded-lg text-primary"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-text-gray mb-6">
                {card.description}
              </p>

              <ul className="space-y-3">
                {card.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className={`flex ${typeof item === 'object' ? 'flex-col gap-1' : 'items-center gap-3'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {typeof item === 'object' ? (
                      <>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          <span className="font-medium">{item.category}</span>
                        </div>
                        <span className="pl-5 text-sm text-gray-500 dark:text-gray-400">{item.tech}</span>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="font-medium">{item}</span>
                      </>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-end mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <motion.div 
              className="inline-flex items-center gap-2 bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 px-6 py-3 rounded-lg transition-all text-sm font-medium group" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">grid_view</span>
              View My Projects
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
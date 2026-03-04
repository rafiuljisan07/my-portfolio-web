import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
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
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-card-border py-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg">Rafiul Islam Jisan</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">Based In Bangladesh</div>
        </motion.div>

        <motion.div
          className="text-center md:text-left text-sm text-gray-500 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Website Designed in Figma. Built with React, JavaScript and Tailwind CSS.
        </motion.div>

        <motion.div
          className="flex flex-col items-center md:items-end gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                className="text-gray-500 hover:text-primary transition-colors"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={link.label}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  color: '#8b5cf6'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05
                }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
          <motion.div
            className="text-xs text-gray-500 mt-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            © 2026 Jisan. All rights are reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
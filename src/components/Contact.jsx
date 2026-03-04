import React, {  useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rafiuljisan2005@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1825 490 655'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh'
    }
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    
    // Reset form with animation
    gsap.to('.form-field input, .form-field textarea', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setFormData({ name: '', email: '', message: '' });
      }
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24" ref={ref}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-light via-gray-50/5 to-background-light dark:from-background-dark dark:via-card-dark/5 dark:to-background-dark" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's talk about your project
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-card-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-card-border text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-card-border space-y-6"
            >
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="block text-gray-900 dark:text-white font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#0f0f0f] border border-gray-300 dark:border-[#2a2a2a] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-gray-900 dark:text-white font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#0f0f0f] border border-gray-300 dark:border-[#2a2a2a] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block text-gray-900 dark:text-white font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#0f0f0f] border border-gray-300 dark:border-[#2a2a2a] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3.5 rounded-lg bg-transparent border border-gray-300 dark:border-card-border hover:bg-gray-100 dark:hover:bg-card-border/50 text-gray-900 dark:text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
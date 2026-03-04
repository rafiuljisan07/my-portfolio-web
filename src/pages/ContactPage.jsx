import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Contact from '../components/Contact.jsx';

const ContactPage = () => {
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
      {/* Contact Component */}
      <Contact />

      {/* Additional Contact Info */}
      <motion.section
        className="py-16 bg-white dark:bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
              </div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I typically respond within 24 hours
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Based in Bangladesh, working globally
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">handshake</span>
              </div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Open to freelance and full-time opportunities
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import '@/app/components/Info.css'; 

const InfoSection = () => {
  return (
    <section className='info-section-wrapper'>
      <motion.h2
        className='info-title'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why choose us !
      </motion.h2>
      <motion.p
        className='info-text'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We provide the best food delivery service with a wide variety of
        delicious meals from top-rated restaurants. Experience fast, reliable,
        and affordable food delivery at your convenience.
      </motion.p>
    </section>
  );
};

export default InfoSection;



'use client';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/context/usercontext';
import '@/app/components/Hero.css'

const Hero = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const { user, isLoggedIn } = context;

  function handleMenu() {
    if (!isLoggedIn || !user) {
      router.push('/pages/signup');
    } else {
      router.push('/pages/menu');
    }
  }

  return (
    <section className='herosection'>
      <div className='hero-content'>
        <motion.h2
          className='hero-title'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Foodify
        </motion.h2>
        <motion.p
          className='hero-subtitle'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Delicious meals delivered to your door
        </motion.p>
        <motion.button
          className='hero-button'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
     onClick={handleMenu}
        >
          Order Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

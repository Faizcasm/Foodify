// "use client"
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const InfoSectionWrapper = styled.section`
//   padding: 4rem 2rem;
//   background-color: #ffffff;
//   color:#1a1a1a;
//   text-align: center;
//   border-radius:20px;
//   margin-top:20px;
//   margin-bottom:20px;
// `;

// const InfoTitle = styled(motion.h2)`
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const InfoText = styled(motion.p)`
//   font-size: 1.2rem;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const InfoSection = () => {
//   return (
//     <InfoSectionWrapper>
//       <InfoTitle
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Why choose us !
//       </InfoTitle>
//       <InfoText
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         We provide the best food delivery service with a wide variety of
//         delicious meals from top-rated restaurants. Experience fast, reliable,
//         and affordable food delivery at your convenience.
//       </InfoText>
//     </InfoSectionWrapper>
//   );
// };

// export default InfoSection;

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './Info.css'; // Import the CSS file

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

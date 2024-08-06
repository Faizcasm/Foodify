// 'use client';
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import Navbar from '@/app/components/Navbar';
// import Hero from '@/app/components/Hero';
// import InfoSection from '@/app/components/Infosectionn';
// import Footer from '@/app/components/Footer';
// import Head from 'next/head';
// import { useRouter } from 'next/navigation';

// const FeaturesSection = styled.section`
//   padding: 4rem 2rem;
//   background-color: #ffffff;
//   text-align: center;
//   color:#1a1a1a;
// border-radius:15px;
//   h2 {
//     font-size: 1.5rem;
//     margin-bottom: 1.5rem;
//   }

//   p {
//     font-size: 1.2rem;
//     color: #666;
//   }

//   @media (max-width: 768px) {
//     padding: 3rem 1rem;

//     h2 {
//       font-size: 1.5rem;
//     }

//     p {
//       font-size: 1rem;
//     }
//   }
// `;

// const Feature = styled(motion.div)`
//   background-color: white;
//   border-radius: 10px;
//   padding: 2rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
//   margin: 1rem 0;
// color:#1a1a1a;
//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 1rem;
//   }

//   p {
//     font-size: 1rem;
//     color:#1a1a1a;
//   }

//   @media (max-width: 768px) {
//     padding: 1.5rem;

//     h3 {
//       font-size: 1.25rem;
//     }

//     p {
//       font-size: 0.9rem;
//     }
//   }
// `;

// const TestimonialsSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
//   background-color:#ffffff;
//   color:#1a1a1a;
//   border-radius:15px;
//   h2 {
//     font-size: 2rem;
//     margin-bottom: 1.5rem;
//   }

//   @media (max-width: 768px) {
//     padding: 3rem 1rem;

//     h2 {
//       font-size: 1.75rem;
//     }
//   }
// `;

// const Testimonial = styled(motion.div)`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 2rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
//   margin: 1rem 0;

//   p {
//     font-size: 1rem;
//     color: #666;
//   }
//   span {
//     font-weight: bold;
//     color: #333;
//   }
//   @media (max-width: 768px) {
//     padding: 1.5rem;

//     p {
//       font-size: 0.9rem;
//     }
//   }
// `;

// const CallToActionSection = styled.section`
//   padding: 4rem 2rem;
//   background-color: #ffffff;
//   text-align: center;
//   color: #1a1a1a;
//   margin-bottom:20px;
//   border-radius:15px;
//   h2 {
//     font-size: 1.5rem;
//     margin-bottom: 1.5rem;
//   }

//   p {
//     font-size: 1.2rem;
//     margin-bottom: 2rem;
//   }

//   button {
//     padding: 0.75rem 1.5rem;
//     font-size: 1rem;
//     color: #ffffff;
//     background-color: #1a1a1a;
//     border-radius: 30px;
//     border: none;
//     cursor: pointer;
//   }

//   button:hover {
//     background-color: #333333;
//   }

//   @media (max-width: 768px) {
//     padding: 3rem 1rem;

//     h2 {
//       font-size: 1.5rem;
//     }

//     p {
//       font-size: 1rem;
//     }

//     button {
//       padding: 0.5rem 1rem;
//       font-size: 0.9rem;
//     }
//   }
// `;

// export default function Home() {
//     const router = useRouter()
//     function signup(){
//         router.push('/pages/signup')
//     }
//   return (
//     <> 
//     <title>Home - Foodify</title>
   
       
//       <Navbar />
//       <br/><br/>
//       <Hero />
//       <InfoSection />
//       <FeaturesSection>
//         <h2>Features</h2>
//           <Feature
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay:  0.3 }}
//           >
//              <h3>Fast Delivery</h3>
//           <p>
//             Enjoy lightning-fast delivery times with Foodify. Our network of delivery partners ensures your food arrives hot and fresh, no matter where you are.
//           </p>
//           </Feature>
//           <Feature
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay:  0.3 }}
//           >
//              <h3>Wide Variety of Cuisines</h3>
//           <p>
//             From local favorites to exotic international dishes, Foodify offers a diverse menu selection to satisfy every craving. Discover new tastes with us!
//           </p>
//           </Feature>
//           <Feature
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay:  0.3 }}
//           >
//                <h3>Real-Time Tracking</h3>
//           <p>
//             Stay updated with real-time order tracking. Know exactly when your food will arrive with our intuitive tracking feature, available on our app.
//           </p>
//           </Feature>
//       </FeaturesSection>
//       <br/><br/>
//       <TestimonialsSection>
//         <h2>Ratings</h2>
//         <Testimonial
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           <p>"Foodify has completely transformed the way I order food. The delivery is always on time and the food is hot and fresh. Highly recommend!"</p>
//           <span>- Ali kak.</span>
//         </Testimonial>
//         <Testimonial
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           <p>"I love the variety of cuisines available on Foodify. I can try new dishes from different cultures without leaving my home. Amazing service!"</p>
//           <span>- Gulzar peer.</span>
//         </Testimonial>
//         <Testimonial
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.9 }}
//         >
//           <p>"The real-time tracking feature is a game-changer. I always know exactly when my food will arrive, which is super convenient. Great job, Foodify!"</p>
//           <span>- Sarjan.</span>
//         </Testimonial>
//       </TestimonialsSection>
//       <br/><br/>
//       <CallToActionSection>
//         <h2>Ready to Get Started</h2>
//         <p>Join us today and experience the best food delivery service.</p>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={signup}
//         >
//           Sign Up Now
//         </motion.button>
//       </CallToActionSection>
//       <Footer />
//     </>
//   );
// }


import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
    const router = useRouter();
    function signup() {
        router.push('/pages/signup');
    }

    return (
        <>
            <Head>
                <title>Home - Foodify</title>
            </Head>
            <style jsx>{`
                .featuresSection,
                .testimonialsSection,
                .callToActionSection {
                    padding: 2rem 0;
                    text-align: center;
                }

                .feature,
                .testimonial {
                    margin: 1rem 0;
                }

                .callToActionSection button {
                    padding: 0.5rem 1rem;
                    font-size: 0.9rem;
                    border: none;
                    background-color: #ff6347;
                    color: white;
                    cursor: pointer;
                    border-radius: 5px;
                }

                .callToActionSection button:hover {
                    background-color: #ff4500;
                }
            `}</style>
            <Navbar />
            <br/><br/>
            <Hero />
            <InfoSection />
            <section className="featuresSection">
                <h2>Features</h2>
                <div className="feature">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h3>Fast Delivery</h3>
                        <p>
                            Enjoy lightning-fast delivery times with Foodify. Our network of delivery partners ensures your food arrives hot and fresh, no matter where you are.
                        </p>
                    </motion.div>
                </div>
                <div className="feature">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h3>Wide Variety of Cuisines</h3>
                        <p>
                            From local favorites to exotic international dishes, Foodify offers a diverse menu selection to satisfy every craving. Discover new tastes with us!
                        </p>
                    </motion.div>
                </div>
                <div className="feature">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h3>Real-Time Tracking</h3>
                        <p>
                            Stay updated with real-time order tracking. Know exactly when your food will arrive with our intuitive tracking feature, available on our app.
                        </p>
                    </motion.div>
                </div>
            </section>
            <br/><br/>
            <section className="testimonialsSection">
                <h2>Ratings</h2>
                <div className="testimonial">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p>&quot;Foodify has completely transformed the way I order food. The delivery is always on time and the food is hot and fresh. Highly recommend!&quot;</p>
                        <span>- Ali Kak.</span>
                    </motion.div>
                </div>
                <div className="testimonial">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p>&quot;I love the variety of cuisines available on Foodify. I can try new dishes from different cultures without leaving my home. Amazing service!&quot;</p>
                        <span>- Gulzar Peer.</span>
                    </motion.div>
                </div>
                <div className="testimonial">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <p>&quot;The real-time tracking feature is a game-changer. I always know exactly when my food will arrive, which is super convenient. Great job, Foodify!&quot;</p>
                        <span>- Sarjan.</span>
                    </motion.div>
                </div>
            </section>
            <br/><br/>
            <section className="callToActionSection">
                <h2>Ready to Get Started</h2>
                <p>Join us today and experience the best food delivery service.</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={signup}
                >
                    Sign Up Now
                </motion.button>
            </section>
            <Footer />
        </>
    );
}

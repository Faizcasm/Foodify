'use client'

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import InfoSection from '@/app/components/InfoSection';
import Footer from '@/app/components/Footer';
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

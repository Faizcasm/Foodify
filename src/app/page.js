'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/Infosectionn";
import Footer from "./components/Footer";
import Head from "next/head";
import './styles/home.css';
export default function Home() {
  return (
    <>
   <title>Home - Foodify</title>
    <Navbar/>
    <br/><br/>
      <Hero/>
      <InfoSection/>
     <section className="features-section">
                <h2>Features</h2>
                <motion.div
                    className="feature"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h3>Fast Delivery</h3>
                    <p>
                        Enjoy lightning-fast delivery times with Foodify. Our network of delivery partners ensures your food arrives hot and fresh, no matter where you are.
                    </p>
                </motion.div>
                <motion.div
                    className="feature"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h3>Wide Variety of Cuisines</h3>
                    <p>
                        From local favorites to exotic international dishes, Foodify offers a diverse menu selection to satisfy every craving. Discover new tastes with us!
                    </p>
                </motion.div>
                <motion.div
                    className="feature"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h3>Real-Time Tracking</h3>
                    <p>
                        Stay updated with real-time order tracking. Know exactly when your food will arrive with our intuitive tracking feature, available on our app.
                    </p>
                </motion.div>
            </section>
            <br/><br/>
            <section className="testimonials-section">
                <h2>Ratings</h2>
                <motion.div
                    className="testimonial"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <p>&quot;Foodify has completely transformed the way I order food. The delivery is always on time and the food is hot and fresh. Highly recommend!&quot;</p>
                    <span>- Ali Kak.</span>
                </motion.div>
                <motion.div
                    className="testimonial"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p>&quot;I love the variety of cuisines available on Foodify. I can try new dishes from different cultures without leaving my home. Amazing service!&quot;</p>
                    <span>- Gulzar Peer.</span>
                </motion.div>
                <motion.div
                    className="testimonial"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <p>&quot;The real-time tracking feature is a game-changer. I always know exactly when my food will arrive, which is super convenient. Great job, Foodify!&quot;</p>
                    <span>- Sarjan.</span>
                </motion.div>
            </section>
                  <br/>
      <Footer/>
    
    </>
  );
}

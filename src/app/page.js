'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/Infosectionn";
import Footer from "./components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
   <title>Home - Foodify</title>
    <Navbar/>
    <br/><br/>
      <Hero/>
      <InfoSection/>
      <Footer/>
    </>
  );
}

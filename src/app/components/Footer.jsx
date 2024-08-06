

"use client";
import './Footer.css'; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  function homess(){
    router.push('/');
  }

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a className="footer-link" onClick={homess}>Home</a>
          <a className="footer-link" onClick={homess}>About</a>
          <a className="footer-link" onClick={homess}>Services</a>
          <a className="footer-link" onClick={homess}>Contact</a>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/faizan.js" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/faizan-hameed-a54316255?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3Bn9uG5kt%2FRHO%2FULvP8dLbYw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} All rights reserved by Foodify.com</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWater, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo.jpg'; // Import the logo


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-delay="100">
              <div className="footer-info">
                <div className="logo">
                  <Link to="/" className="logo-link">
                    <img src={logo} alt="G-Tech Water Solutions Logo" className="logo-img" />
                  </Link>
                </div>
                <p>
                  Established in 2021, G-Tech Water Solutions is a leading supplier of water treatment equipment and chemicals,
                  providing high-quality solutions for various water treatment needs.
                </p>
              </div>
            </div>

            <div className="col" data-aos="fade-up" data-aos-delay="200">
              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col" data-aos="fade-up" data-aos-delay="300">
              <div className="footer-links">
                <h4>Our Products</h4>
                <ul>
                  <li><Link to="/products">Water Treatment Plants</Link></li>
                  <li><Link to="/products">Reverse Osmosis Plants</Link></li>
                  <li><Link to="/products">Sewage Treatment Plants</Link></li>
                  <li><Link to="/products">Effluent Treatment Plants</Link></li>
                  <li><Link to="/products">Water Treatment Chemicals</Link></li>
                </ul>
              </div>
            </div>

            <div className="col" data-aos="fade-up" data-aos-delay="400">
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>16/116 SNDP Shopping Complex, Kongorpilly, Koonamavu, Kochi, 683518</span>
                </p>
                <p>
                  <FaPhone className="contact-icon" />
                  <span>+91 9976542503</span>
                </p>
                <p>
                  <FaEnvelope className="contact-icon" />
                  <span>gtechwatersolutions@gmail.com</span>
                </p>
                <div className="social-links">
                  <a href="https://www.facebook.com/Gtechwatersolutions/" className="facebook"><FaFacebook /></a>
                  <a href="https://x.com/Gtechwater" className="twitter"><FaTwitter /></a>
                  <a href="https://www.instagram.com/gtech_watersolutions/?hl=en" className="instagram"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/company/106879992/admin/dashboard/" className="linkedin"><FaLinkedin /></a>
                  <a href="https://www.youtube.com/@GTech-e1q" className="youtube"><FaYoutube /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            &copy; {currentYear} <strong>G-Tech Water Solutions</strong>. All Rights Reserved |
            <a href="https://www.inspitetech.com/index.html#" target="_blank" rel="noopener noreferrer"> Powered by Inspite Technologies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { FaCheck, FaWater, FaUsers, FaAward, FaHandshake, FaTrophy, FaBuilding, FaTools } from 'react-icons/fa';
import './About.css';

// Import all images separately
import bannerImage from '../assets/banner2.jpeg';
import aboutSectionImage from '../assets/parallax.jpeg';
import milestoneParallaxImage from '../assets/about.jpeg';
import infrastructureImage from '../assets/about1.png';
import ctaParallaxImage from '../assets/aboutpage.png';

// Milestones
const milestones = [
  {
    id: 1,
    year: '2021',
    title: 'Company Founded',
    description: 'G&G Water Solutions was established in Tamil Nadu as a supplier of water treatment equipments.'
  },
  {
    id: 2,
    year: '2022',
    title: 'Major Projects',
    description: 'Successfully completed several major projects including Aster Medicity 1000 KLD STP.'
  },
  {
    id: 3,
    year: '2023',
    title: 'Expansion',
    description: 'Expanded operations with a new branch GTech Water Solutions in Kochi.'
  },
  {
    id: 4,
    year: '2024',
    title: 'Growing Portfolio',
    description: 'Continued growth with diverse projects across healthcare, hospitality, and residential sectors.'
  }
];

// Team members with separate images


// Core values
const coreValues = [
  {
    id: 1,
    icon: <FaAward />,
    title: 'Quality',
    description: 'We are committed to providing high-quality products and services that meet or exceed client expectations.'
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: 'Integrity',
    description: 'We conduct our business with the highest standards of honesty, transparency, and ethical behavior.'
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: 'Customer Focus',
    description: 'We prioritize understanding and fulfilling our customers\' needs to ensure their complete satisfaction.'
  },
  {
    id: 4,
    icon: <FaTools />,
    title: 'Innovation',
    description: 'We continuously seek innovative solutions to improve our products, services, and processes.'
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Page Banner - using bannerImage */}
      <Parallax
        bgImage={bannerImage}
        strength={300}
        className="page-banner"
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="container">

            <div className="breadcrumb" data-aos="fade-up" data-aos-delay="100">

            </div>
          </div>
        </div>
      </Parallax>

      {/* About Section - using aboutSectionImage */}
      <section className="section about-section">
        <div className="container">
          <div className="row">
            <div className="col" data-aos="fade-right">
              <div className="about-image-container">
                <div className="about-image-box">
                  <img src={aboutSectionImage} alt="G-Tech Water Solutions" />
                  <div className="experience-box">
                    <h3>3+</h3>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-left">
              <div className="section-title left-aligned">
                <h2>G-Tech Water Solutions</h2>
              </div>
              <p>
                Established in 2021, G-Tech Water Solutions is a well-established company specialized in supplying all types
                of water treatment chemicals and equipment. We steadily keep an eye on quality control norms to provide
                customer satisfaction and ensure the quality of chemicals and equipment.
              </p>
              <p>
                We excel in execution, supply, design, engineering fabrication, site supplies, and commissioning of projects.
                Our sophisticated equipment enables us to install various water treatment systems including Reverse Osmosis,
                De-Mineralization, and Evaporators with precision and efficiency.
              </p>
              <ul className="check-list">
                <li><FaCheck className="check-icon" />Qualified technical and non-technical staff</li>
                <li><FaCheck className="check-icon" />Continuous plant monitoring up to warranty period</li>
                <li><FaCheck className="check-icon" />Timely delivery and installation</li>
                <li><FaCheck className="check-icon" />High-quality products and services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section core-values-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Core Values</h2>
            <p>The principles that guide our business operations</p>
          </div>

          <div className="values-container">
            {coreValues.map((value) => (
              <div key={value.id} className="value-card" data-aos="fade-up" data-aos-delay={value.id * 100}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Parallax Section - using milestoneParallaxImage */}
      <Parallax
        bgImage={milestoneParallaxImage}
        strength={500}
        className="milestone-section"
      >
        <div className="milestone-overlay"></div>
        <div className="container">
          <div className="section-title light" data-aos="fade-up">
            <h2>Our Journey</h2>
            <p>Key milestones in our company's growth</p>
          </div>

          <div className="timeline">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="timeline-item" data-aos="fade-up" data-aos-delay={milestone.id * 100}>
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Parallax>

      {/* Infrastructure Section - using infrastructureImage */}
      <section className="section infrastructure-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Infrastructure</h2>
            <p>Well-equipped facilities to serve our clients better</p>
          </div>

          <div className="infrastructure-content">
            <div className="row">
              <div className="col" data-aos="fade-right">
                <div className="infrastructure-features">
                  <div className="feature-item">
                    <FaBuilding className="feature-icon" />
                    <div className="feature-content">
                      <h3>Modern Facility</h3>
                      <p>Our well-equipped facility enables us to design, engineer, and fabricate water treatment systems efficiently.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <FaTools className="feature-icon" />
                    <div className="feature-content">
                      <h3>Sophisticated Equipment</h3>
                      <p>We utilize advanced equipment for installing various water treatment systems with precision.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <FaUsers className="feature-icon" />
                    <div className="feature-content">
                      <h3>Qualified Team</h3>
                      <p>Our skilled technical and non-technical team ensures the highest quality of service for our clients.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-left">
                <div className="infrastructure-image">
                  <img src={infrastructureImage} alt="G-Tech Infrastructure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Branch Information Section */}
      <section className="section branches-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Branches</h2>
            <p>Serving clients across Kerala and Tamil Nadu</p>
          </div>

          <div className="branches-container">


            <div className="branch-card" data-aos="fade-up" data-aos-delay="100">
              <div className="branch-header">
                <FaBuilding className="branch-icon" />
                <h3>G&G Water Solutions</h3>
              </div>
              <div className="branch-details">
                <p><strong>Year of Establishment:</strong> 2021</p>
                <p><strong>Address:</strong> Shop No.5 K.S.V Complex S.P.T Main Nagar, Gandhi Nagar Sub Post Office, Neyveli, Cuddalore, Tamil Nadu, 607801</p>
                <p><strong>Phone:</strong> 9976542503</p>
                <p><strong>GST No:</strong> 33BOQPG6831Q1ZA</p>
              </div>
            </div>
            <div className="branch-card" data-aos="fade-up">
              <div className="branch-header">
                <FaBuilding className="branch-icon" />
                <h3>G-Tech Water Solutions</h3>
              </div>
              <div className="branch-details">
                <p><strong>Year of Establishment:</strong> 2023</p>
                <p><strong>Address:</strong> 16/116 SNDP Shopping Complex, Kongorpilly, Koonamavu, Kochi, 683518</p>
                <p><strong>Phone:</strong> 9976542503</p>
                <p><strong>GST No:</strong> 32BOQPG6831Q1ZC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Parallax CTA Section - using ctaParallaxImage */}
      <Parallax
        bgImage={ctaParallaxImage}
        strength={300}
        className="cta-parallax-section"
      >
        <div className="parallax-overlay"></div>
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Ready to Work With Us?</h2>
            <p>Contact us today for all your water treatment needs</p>
            <Link to="/contact" className="btn btn-lg">Get in Touch</Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

// Import placeholder images
import contactBannerImg from '../assets/aboutpage.png';

// Branch location data
const branchLocations = {
  kochi: {
    name: 'G-Tech Water Solutions',
    address: '16/116 SNDP Shopping Complex, Kongorpilly, Koonamavu, Kochi, 683518',
    phone: '+91 9976542503',
    email: 'gtechwatersolutions@gmail.com',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1371123039105!2d76.32!3d10.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAyJzI0LjAiTiA3NsKwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1616729254916!5m2!1sen!2sin"
  },
  tamilnadu: {
    name: 'G&G Water Solutions',
    address: 'Shop No.5 K.S.V Complex S.P.T Main Nagar, Gandhi Nagar Sub Post Office, Neyveli, Cuddalore, Tamil Nadu, 607801',
    phone: '+91 9976542503',
    email: 'gtechwatersolutions@gmail.com',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.244324364408!2d79.47!3d11.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMxJzQ4LjAiTiA3OcKwMjgnMTIuMCJF!5e0!3m2!1sen!2sin!4v1616729254916!5m2!1sen!2sin"
  }
};

// FAQ data
const faqData = [
  {
    question: "What types of water treatment plants do you supply?",
    answer: "We supply a wide range of water treatment plants including Filtration Plants, Iron Removal Plants, Softener Plants, De-Mineralization Plants, Reverse Osmosis Plants, Sewage Treatment Plants, and Effluent Treatment Plants. Our solutions are customized based on your specific requirements."
  },
  {
    question: "Do you provide installation and maintenance services?",
    answer: "Yes, we provide complete installation services for all our water treatment systems. We also offer maintenance contracts to ensure your equipment runs efficiently. Our qualified technical team is available for regular servicing and emergency repairs."
  },
  {
    question: "How long does installation typically take?",
    answer: "Installation time varies depending on the type and complexity of the system. Small systems like domestic RO plants may take a day, while larger industrial systems can take 1-4 weeks. We'll provide a specific timeline during the consultation phase based on your project requirements."
  },
  {
    question: "Do you offer customized water treatment solutions?",
    answer: "Absolutely! We specialize in designing and implementing customized water treatment solutions based on your specific water quality, quantity requirements, space constraints, and budget. Our team conducts a detailed analysis before recommending the most suitable system for your needs."
  },
  {
    question: "What warranty do you offer on your products?",
    answer: "We offer comprehensive warranties on all our products and installations. The warranty period varies depending on the type of equipment, typically ranging from 1-3 years. We also provide extended warranty options and annual maintenance contracts for continued protection and service."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [activeBranch, setActiveBranch] = useState('kochi');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long';
    }
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormLoading(true);
    
    // Simulate form submission (in a real app, you would send data to a server)
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset form submitted state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Change active branch
  const changeBranch = (branch) => {
    setActiveBranch(branch);
  };

  return (
    <div className="contact-page">
      {/* Page Banner */}
      <Parallax
        bgImage={contactBannerImg}
        strength={300}
        className="page-banner"
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          
        </div>
      </Parallax>

      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2 className="smaller-heading">Get In Touch</h2>
            <p className="smaller-text">We'd love to hear from you. Reach out to us for any inquiries or support.</p>
          </div>
          
          <div className="info-cards" data-aos="fade-up">
            <div className="info-card">
              <div className="info-icon smaller-icon">
                <FaMapMarkerAlt size={18} />
              </div>
              <h3 className="smaller-heading">Our Location</h3>
              <p className="smaller-text">
                <a href="https://maps.google.com/?q=16/116 SNDP Shopping Complex,Kongorpilly, Koonamavu,Kochi, 683518" target="_blank" rel="noreferrer">
                  16/116 SNDP Shopping Complex,<br />Kongorpilly, Koonamavu,<br />Kochi, 683518
                </a>
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon smaller-icon">
                <FaPhone size={18} />
              </div>
              <h3 className="smaller-heading">Call Us</h3>
              <p className="smaller-text">
                <a href="tel:+919976542503">+91 9976542503</a>
              </p>
              <p className="smaller-text">
                <a href="tel:+919976542503">+91 9976542503</a>
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon smaller-icon">
                <FaEnvelope size={18} />
              </div>
              <h3 className="smaller-heading">Email Us</h3>
              <p className="smaller-text">
                <a href="mailto:gtechwatersolutions@gmail.com">gtechwatersolutions@gmail.com</a>
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon smaller-icon">
                <FaClock size={18} />
              </div>
              <h3 className="smaller-heading">Working Hours</h3>
              <p className="smaller-text">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="smaller-text">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container" data-aos="fade-right">
              <h2 className="smaller-heading">Send Us a Message</h2>
              <p className="smaller-text">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {formSubmitted ? (
                <div className="form-success-message">
                  <div className="success-icon">✓</div>
                  <h3 className="smaller-heading">Thank you for contacting us!</h3>
                  <p className="smaller-text">Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={formErrors.phone ? 'error' : ''}
                      />
                      {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={formErrors.subject ? 'error' : ''}
                    />
                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`submit-btn ${formLoading ? 'loading' : ''}`}
                    disabled={formLoading}
                  >
                    {formLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div className="map-container" data-aos="fade-left">
              <div className="branch-selector">
                <div className="branch-tabs">
                  <button 
                    className={`branch-tab ${activeBranch === 'kochi' ? 'active' : ''}`}
                    onClick={() => changeBranch('kochi')}
                  >
                    <FaBuilding size={16} /> Kochi Office
                  </button>
                  <button 
                    className={`branch-tab ${activeBranch === 'tamilnadu' ? 'active' : ''}`}
                    onClick={() => changeBranch('tamilnadu')}
                  >
                    <FaBuilding size={16} /> Tamil Nadu Office
                  </button>
                </div>
                
                <div className="branch-info">
                  <h3 className="smaller-heading">{branchLocations[activeBranch].name}</h3>
                  <p className="smaller-text">
                    <FaMapMarkerAlt size={16} />
                    <a href={`https://maps.google.com/?q=${branchLocations[activeBranch].address}`} target="_blank" rel="noreferrer">
                      {branchLocations[activeBranch].address}
                    </a>
                  </p>
                  <p className="smaller-text">
                    <FaPhone size={16} />
                    <a href={`tel:${branchLocations[activeBranch].phone}`}>
                      {branchLocations[activeBranch].phone}
                    </a>
                  </p>
                  <p className="smaller-text">
                    <FaEnvelope size={16} />
                    <a href={`mailto:${branchLocations[activeBranch].email}`}>
                      {branchLocations[activeBranch].email}
                    </a>
                  </p>
                  <div className="social-links">
                    <a href="https://wa.me/919976542503" className="social-link" target="_blank" rel="noreferrer"><FaWhatsapp size={16} /></a>
                    <a href="https://facebook.com/gtechwatersolutions" className="social-link" target="_blank" rel="noreferrer"><FaFacebook size={16} /></a>
                    <a href="https://instagram.com/gtechwatersolutions" className="social-link" target="_blank" rel="noreferrer"><FaInstagram size={16} /></a>
                    <a href="https://linkedin.com/company/gtechwatersolutions" className="social-link" target="_blank" rel="noreferrer"><FaLinkedin size={16} /></a>
                  </div>
                </div>
              </div>
              
              <div className="google-map">
                <iframe 
                  src={branchLocations[activeBranch].mapSrc}
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title={`${branchLocations[activeBranch].name} Location`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2 className="smaller-heading">Frequently Asked Questions</h2>
            <p className="smaller-text">Find answers to the most common questions about our services.</p>
          </div>
          
          <div className="faq-container" data-aos="fade-up">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3 className="smaller-heading">{faq.question}</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p className="smaller-text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
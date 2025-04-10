import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { FaFilter, FaMapMarkerAlt, FaBuilding, FaCalendarAlt, FaChevronRight, FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Projects.css';

// Import placeholder images
import projectsBannerImg from '../assets/projects.jpeg';
// Project categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'residential', name: 'Residential' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'commercial', name: 'Commercial' },
];

// Project data - removed Aster Medicity from main projects
const projectsData = [
  {
    id: 1,
    title: 'KIMS HOSPITAL',
    description: '250 KLD STP MBR MODEL',
    category: 'healthcare',
    location: 'Kollam',
    client: 'KIMS Hospital',
    
    contact: '8129396397',
    images: [
      'https://kimskollam.wordpress.com/wp-content/uploads/2017/01/edited.jpg?w=1200',
      
    ],
    details: `Implemented a 250 KLD STP with MBR MODEL for KIMS Hospital in Kollam. The system was designed to meet the hospital's specific requirements for wastewater treatment, focusing on water conservation and environmental compliance.
    
    The compact design allowed for installation in a limited space while delivering high-quality treated water output. The system includes advanced features for monitoring and control to ensure consistent performance.`,
    features: [
      'Compact MBR system',
      'Capacity: 250 KLD',
      'Remote monitoring capabilities',
      'Low noise operation',
      'Compliant with PCB regulations'
    ]
  },
  {
    id: 2,
    title: 'MODERN HOSPITAL',
    description: '500 LPH MEDICAL RO PLANT',
    category: 'healthcare',
    location: 'Kodungallur',
    client: 'Modern Hospital',
   
    contact: '9562052655',
    images: [
      'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1670556654420_HospitalProfileImage_Profile%20Pic.png',
     
    ],
    details: `Designed and commissioned a 500 LPH Medical-grade Reverse Osmosis plant for Modern Hospital in Kodungallur. The system was specifically engineered to meet the stringent water quality requirements for medical applications including dialysis, laboratory, and sterilization processes.
    
    The RO plant features multiple pre-treatment stages, high-rejection membranes, and a specialized post-treatment system to ensure consistently pure water that meets all medical standards.`,
    features: [
      '500 LPH (Liters Per Hour) capacity',
      'Multi-stage filtration system',
      'Medical-grade components',
      'Low-maintenance design',
      'Consistent water quality monitoring'
    ]
  },
  {
    id: 3,
    title: 'LOURDES HOSPITAL',
    description: 'LAUNDRY WATER PH NEUTRAL PLANT',
    category: 'healthcare',
    location: 'Kochi',
    client: 'Lourdes Hospital',
   
    contact: '9544487044',
    images: [
      'https://content.jdmagicbox.com/comp/ernakulam/d8/0484px484.x484.140730142718.n1d8/catalogue/dr-paul-puthuran-pachalam-ernakulam-general-physician-doctors-773tifsbr1.jpg',
      
    ],
    details: `Implemented a specialized pH neutralization system for laundry wastewater at Lourdes Hospital in Kochi. The system was designed to treat the high-alkaline wastewater from the hospital's laundry operations before discharge.
    
    The pH neutral plant includes automatic dosing systems, continuous monitoring, and a fail-safe design to ensure consistent compliance with environmental regulations. The treated water meets all discharge standards and helps the hospital maintain its environmental commitments.`,
    features: [
      'Automated pH correction system',
      'Chemical dosing control',
      'Real-time monitoring',
      'Fail-safe design',
      'Low operating cost'
    ]
  },
  {
    id: 4,
    title: 'ASTER SERINITY HOSTEL',
    description: '50 KLD STP',
    category: 'residential',
    location: 'Kochi',
    client: 'Aster Serinity Hostel',
   
    contact: '7012865128',
    images: [
      '/api/placeholder/1200/800',
      
    ],
    details: `Designed and installed a 50 KLD Sewage Treatment Plant for Aster Serinity Hostel in Kochi. The compact system was specifically designed to fit within the limited space available while providing efficient treatment of domestic wastewater.
    
    The STP incorporates biological treatment processes that ensure low odor operation, minimal noise, and high-quality treated water suitable for gardening and flushing applications within the hostel premises.`,
    features: [
      'Compact design for limited space',
      'Low noise and odor operation',
      'Capacity: 50 KLD',
      'Energy-efficient operation',
      'Treated water suitable for gardening'
    ]
  },
  {
    id: 5,
    title: 'NEST HOSTEL',
    description: '100 KLD STP',
    category: 'residential',
    location: 'Kochi',
    client: 'Nest Hostel',
    contact: '7012865128',
    images: [
      'https://d2bxpw04qb5rhq.cloudfront.net/production/property_image/image/17750/7ad52590254464a5707339ad79f3ff684354be9b5f75e14ba4be0ba00b01262279749fb97a7736c4/def3efdfca017b51241c43e17a1c7789.jpg',
      
    ],
    details: `Successfully implemented a 100 KLD Sewage Treatment Plant for Nest Hostel in Kochi. The system was designed to handle the wastewater generated from the large residential facility while ensuring minimal environmental impact.
    
    The STP features an advanced biological treatment process that efficiently removes organic contaminants, producing high-quality treated water. The system includes automation features for ease of operation and maintenance, reducing the operational overhead for the hostel management.`,
    features: [
      'Modern biological treatment',
      'Capacity: 100 KLD',
      'Automated control system',
      'Low maintenance requirements',
      'Compliant with all regulatory standards'
    ]
  },
  {
    id: 6,
    title: 'AMALA MULTI SPECIALTY HOSPITAL',
    description: '1000 LPH MEDICAL RO',
    category: 'healthcare',
    location: 'Irutty',
    client: 'Amala Multi Specialty Hospital',
    contact: '9747885591',
    images: [
      'https://content.jdmagicbox.com/comp/kannur/37/9999PMULBLRSTD2016037/catalogue/amala-hospital-iritty-kannur-private-hospitals-p0z3yb.jpg',
      
    ],
    details: `Designed and installed a 1000 LPH Medical-grade Reverse Osmosis system for Amala Multi Specialty Hospital in Irutty. The high-capacity RO plant was engineered to meet the comprehensive water purification needs of the hospital for various medical applications.
    
    The system incorporates advanced filtration technologies, UV disinfection, and precise monitoring to ensure consistent production of ultra-pure water suitable for critical medical procedures. The RO plant features modular design for easy maintenance and future capacity expansion.`,
    features: [
      '1000 LPH capacity',
      'Medical-grade water production',
      'Advanced monitoring system',
      'Modular design',
      'Energy recovery technology'
    ]
  },
  {
    id: 7,
    title: 'DONBOSCO HOSPITAL',
    description: '500 LPH MEDICAL RO PLANT',
    category: 'healthcare',
    location: 'North Paravoor',
    client: 'Donbosco Hospital',
    contact: '8590043538',
    images: [
      'https://donboscohospital.com/wp-content/themes/donboscohospital/images/intro-img.jpg',
      
    ],
    details: `Implemented a 500 LPH Medical Reverse Osmosis plant for Donbosco Hospital in North Paravoor. The system was designed to provide high-purity water for critical hospital applications including dialysis units, laboratory, and central sterilization department.
    
    The RO plant features comprehensive pre-treatment, high-rejection TFC membranes, and continuous monitoring to ensure consistent water quality that meets all medical standards. The system is equipped with automated sanitization features to maintain hygienic operation.`,
    features: [
      'Medical-grade water production',
      '500 LPH capacity',
      'Automated sanitization',
      'Multiple quality monitoring points',
      'Emergency backup system'
    ]
  },
  {
    id: 8,
    title: 'KOIKKARA CATERERS',
    description: '50 KLD MBBR STP PLANT',
    category: 'commercial',
    location: 'Kochi',
    client: 'Koikkara Caterers',
    contact: '9847165169',
    images: [
      '/api/placeholder/1200/800',
      
    ],
    details: `Designed and installed a 50 KLD Moving Bed Biofilm Reactor (MBBR) Sewage Treatment Plant for Koikkara Caterers in Kochi. The system was specifically engineered to handle the high-strength wastewater generated from food preparation and catering operations.
    
    The MBBR technology efficiently removes the high organic load through biofilm processes, ensuring that the treated water meets all discharge standards. The compact design and odor control features make it suitable for the commercial food service environment.`,
    features: [
      'MBBR technology for high organic load',
      'Capacity: 50 KLD',
      'Grease trap integration',
      'Odor control system',
      'Low footprint design'
    ]
  },
  {
    id: 9,
    title: 'MADELIN BUILDERS & DEVELOPERS',
    description: 'WATER TREATMENT SYSTEMS',
    category: 'residential',
    location: 'Calicut',
    client: 'Madelin Builders & Developers',
    contact: '9876543210',
    images: [
      'https://www.thecompanycheck.com/Images/default-com-logo.webp',
      
    ],
    details: `Provided comprehensive water treatment solutions for multiple residential projects developed by Madelin Builders & Developers in Calicut. The scope included water filtration systems, softeners, and domestic RO systems for drinking water.
    
    The integrated approach ensured consistent water quality throughout the residential complexes, addressing issues of hardness, taste, odor, and safety. The systems were designed for easy maintenance and long-term reliability to benefit the residents.`,
    features: [
      'Multi-building water treatment integration',
      'Central water softening',
      'Drinking water purification',
      'Low maintenance design',
      'Water quality monitoring'
    ]
  }
];

// Aster Medicity sub-work data
const asterMedicityData = {
  title: 'ASTER MEDICITY',
  description: '1000 KLD STP MBR System',
  location: 'Kochi',
  client: 'Aster Medicity',
  contact: '9847940844',
  image: 'https://lh3.googleusercontent.com/p/AF1QipO6VyrxGwNDWHtRRQInaUEN2w-vu6Hdxjq6_FsY=s1360-w1360-h1020',
  shortDescription: 'Designed and installed a state-of-the-art 1000 KLD Sewage Treatment Plant using Membrane Bio-Reactor (MBR) technology for Aster Medicity, one of the largest healthcare facilities in Kochi.'
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Filter projects based on category and search term
  useEffect(() => {
    let filtered = projectsData;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProjects(filtered);
    
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [activeCategory, searchTerm]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  // Close project modal
  const closeProjectModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeProjectModal();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="projects-page">
      {/* Page Banner */}
      <Parallax
        bgImage={projectsBannerImg}
        strength={300}
        className="page-banner"
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          
        </div>
      </Parallax>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <div className="projects-header" data-aos="fade-up">
            <h2>Our Completed Projects</h2>
            <p>Explore our portfolio of successful installations across Kerala</p>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search projects by name, location or client..." 
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          {/* Filter Categories */}
          <div className="filter-categories" data-aos="fade-up">
            <span className="filter-label"><FaFilter /> Filter:</span>
            <div className="categories-list">
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={activeCategory === category.id ? 'active' : ''}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="project-card"
                  data-aos="fade-up" 
                  data-aos-delay={project.id % 5 * 100}
                  id={`project-${project.id}`}
                >
                  <div className="project-image">
                    <img src={project.images[0]} alt={project.title} />
                    <div className="project-category">{categories.find(cat => cat.id === project.category)?.name}</div>
                    <div className="project-overlay">
                      <button className="view-details" onClick={() => openProjectModal(project)}>
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.description}</p>
                    <div className="project-meta">
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{project.location}</span>
                      </div>
                      <div className="meta-item">
                        <FaBuilding />
                        <span>{project.client}</span>
                      </div>
                    </div>
                    <button className="read-more" onClick={() => openProjectModal(project)}>
                      Read More <FaChevronRight />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-projects">
                <h3>No projects found</h3>
                <p>Try changing your search term or selecting a different category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sub-Works Section - Just for Aster Medicity */}
      <section className="section sub-works-section">
        <div className="container">
          <div className="sub-works-header" data-aos="fade-up">
            <h2>Sub-Works</h2>
            <p>Projects we've contributed to as a sub-contractor</p>
          </div>

          <div className="sub-work-card" data-aos="fade-up">
            <div className="sub-work-image">
              <img src={asterMedicityData.image} alt={asterMedicityData.title} />
            </div>
            <div className="sub-work-info">
              <h3>{asterMedicityData.title}</h3>
              <p className="sub-work-subtitle">{asterMedicityData.description}</p>
              <p className="sub-work-description">{asterMedicityData.shortDescription}</p>
              <div className="sub-work-meta">
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{asterMedicityData.location}</span>
                </div>
                <div className="meta-item">
                  <FaBuilding />
                  <span>{asterMedicityData.client}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeProjectModal}></div>
          <div className="modal-content" data-aos="zoom-in">
            <button className="close-modal" onClick={closeProjectModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
            
            <div className="modal-body">
              <div className="project-slider">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                >
                  {selectedProject.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`${selectedProject.title} - Image ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              <div className="project-details">
                <div className="project-info-grid">
                  <div className="info-item">
                    <h4>Client</h4>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div className="info-item">
                    <h4>Location</h4>
                    <p>{selectedProject.location}</p>
                  </div>
                  <div className="info-item">
                    <h4>Category</h4>
                    <p>{categories.find(cat => cat.id === selectedProject.category)?.name}</p>
                  </div>
                  <div className="info-item">
                    <h4>Contact</h4>
                    <p>{selectedProject.contact}</p>
                  </div>
                </div>
                
                <div className="project-description">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.details}</p>
                </div>
                
                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-cta">
                  <Link to="/contact" className="btn">Contact Us About This Project</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Have a Project in Mind?</h2>
            <p>Contact our team to discuss your water treatment requirements</p>
            <Link to="/contact" className="btn btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
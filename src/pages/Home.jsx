import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { FaWater, FaIndustry, FaRecycle, FaChartLine, FaUsers, FaCertificate, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Home.css';

// Import images from src/assets folder
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';
import aboutImg from '../assets/about2.png';  // You can use a different image for about section
import parallaxBgImg from '../assets/banner1.jpeg';  // Add this file to your assets folder
import testimonialBgImg from '../assets/banner2.jpeg';  // Add this file to your assets folder

// Project images
import project1 from '../assets/aster.jpg';  // Add project images to your assets folder
import project2 from '../assets/kims.webp';
import project3 from '../assets/modern.png';

// Product categories
const productCategories = [
    {
        id: 1,
        icon: <FaWater />,
        title: 'Water Treatment Plants',
        description: 'Filtration Plants, Iron Removal Plants, Softener Plants, De-Mineralization Plants',
        link: '/products'
    },
    {
        id: 2,
        icon: <FaRecycle />,
        title: 'Reverse Osmosis Plants',
        description: 'Ultra Filtration, Nano Filtration, Industrial RO Plants, Desalination RO Plants',
        link: '/products'
    },
    {
        id: 3,
        icon: <FaIndustry />,
        title: 'Sewage Treatment Plants',
        description: 'MBBR, FBBR, SAF, MBR, UASBR and more advanced technologies',
        link: '/products'
    },
    {
        id: 4,
        icon: <FaRecycle />,
        title: 'Effluent Treatment Plants',
        description: 'Aerobic and Anaerobic Methods for industrial waste water treatment',
        link: '/products'
    }
];

// Featured projects
const featuredProjects = [
    {
        id: 1,
        title: 'ASTER MEDICITY',
        description: '1000 KLD STP MBR',
        image: project1,
        client: 'Aster Medicity',
        location: 'Kochi'
    },
    {
        id: 2,
        title: 'KIMS HOSPITAL',
        description: '250 KLD STP MBR MODEL',
        image: project2,
        client: 'KIMS Hospital',
        location: 'Kollam'
    },
    {
        id: 3,
        title: 'MODERN HOSPITAL',
        description: '500 LPH MEDICAL RO PLANT',
        image: project3,
        client: 'Modern Hospital',
        location: 'Kodungallur'
    }
];

// Why choose us features
const features = [
    {
        id: 1,
        icon: <FaChartLine />,
        title: 'Quality Assurance',
        description: 'We maintain strict quality control for all our equipment and chemicals.'
    },
    {
        id: 2,
        icon: <FaCertificate />,
        title: 'Certified Experts',
        description: 'Our team consists of qualified and experienced professionals.'
    },
    {
        id: 3,
        icon: <FaUsers />,
        title: 'Customer Focus',
        description: 'We prioritize customer satisfaction with timely delivery and support.'
    }
];

// Testimonials
const testimonials = [
    {
        id: 1,
        name: 'Aster Medicity',
        position: 'Kochi',
        quote: 'G-Tech Water Solutions provided excellent service in installing our 1000 KLD STP MBR system. Their team was professional and efficient throughout the process.',
    },
    {
        id: 2,
        name: 'KIMS Hospital',
        position: 'Kollam',
        quote: 'We are extremely satisfied with the 250 KLD STP MBR model installed by G-Tech. Their support and maintenance services are outstanding.',
    },
    {
        id: 3,
        name: 'Modern Hospital',
        position: 'Kodungallur',
        quote: 'The 500 LPH Medical RO Plant installed by G-Tech meets all our requirements perfectly. Highly recommend their services.',
    }
];

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section with Slider */}
            <section className="hero-section">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    effect={'fade'}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="hero-swiper"
                >
                    {[banner1, banner2, banner3].map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-content" style={{ backgroundImage: `url(${image})` }}>
                                <div className="slide-overlay"></div>
                                <div className="container">
                                    <div className="slide-text" data-aos="fade-up">
                                        <h1>G-Tech Water Solutions</h1>
                                        <p>Manufacturer and supplier who providing all water treatment plants and supplies WTP equipments , chemicals in both industrial and domestic applications.</p>
                                        <div className="hero-btns">
                                            <Link to="/products" className="btn">Our Products</Link>
                                            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* About Preview Section */}
            <section className="section about-preview">
                <div className="container">
                    <div className="row">
                        <div className="col" data-aos="fade-right">
                            <div className="about-image">
                                <img src={aboutImg} alt="G-Tech Water Solutions" />
                            </div>
                        </div>
                        <div className="col" data-aos="fade-left">
                            <div className="about-content">
                                <h2>About G-Tech Water Solutions</h2>
                                <p>
                                    Established in 2021, G-Tech Water Solutions is a leading supplier of water treatment equipment
                                    and chemicals. We maintain strict quality control norms to ensure customer satisfaction and
                                    high-quality products.
                                </p>
                                <p>
                                    We specialize in designing, engineering, fabricating, installing, and commissioning various
                                    water treatment systems including Reverse Osmosis, De-Mineralization, and Evaporators.
                                </p>
                                <ul className="about-list">
                                    <li>Qualified technical and non-technical staff</li>
                                    <li>Continuous monitoring of commissioned plants</li>
                                    <li>Timely delivery and installation</li>
                                    <li>Comprehensive warranty coverage</li>
                                </ul>
                                <Link to="/about" className="btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories Section */}
            <section className="section product-categories">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Our Product Range</h2>
                        <p>Comprehensive water treatment solutions for various requirements</p>
                    </div>

                    <div className="categories-grid">
                        {productCategories.map((category) => (
                            <div key={category.id} className="category-card" data-aos="zoom-in" data-aos-delay={category.id * 100}>
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <Link to={category.link} className="category-link">View Details <FaArrowRight /></Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5" data-aos="fade-up">
                        <Link to="/products" className="btn">View All Products</Link>
                    </div>
                </div>
            </section>

            {/* Parallax Middle Section */}
            <Parallax
                bgImage={parallaxBgImg}
                strength={500}
                className="parallax-section"
            >
                <div className="parallax-overlay"></div>
                <div className="parallax-content">
                    <div className="container">
                        <div className="stats-container" data-aos="fade-up">
                            <div className="stat-item">
                                <h3>100+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Happy Clients</p>
                            </div>
                            
                            <div className="stat-item">
                                <h3>3+</h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            {/* Why Choose Us Section */}
            <section className="section why-choose-us">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Why Choose Us</h2>
                        <p>Our commitment to excellence sets us apart</p>
                    </div>

                    <div className="features-container">
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card" data-aos="fade-up" data-aos-delay={feature.id * 100}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section featured-projects">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Our Featured Projects</h2>
                        <p>Some of our notable installations across Kerala</p>
                    </div>

                    <div className="projects-container">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="project-card" data-aos="fade-up" data-aos-delay={project.id * 100}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <Link to={`/projects#project-${project.id}`} className="view-project">View Details</Link>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-meta">
                                        <span><strong>Client:</strong> {project.client}</span>
                                        <span><strong>Location:</strong> {project.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5" data-aos="fade-up">
                        <Link to="/projects" className="btn">View All Projects</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Parallax
                bgImage={testimonialBgImg}
                strength={300}
                className="testimonial-section"
            >
                <div className="testimonial-overlay"></div>
                <div className="container">
                    <div className="section-title light" data-aos="fade-up">
                        <h2>What Our Clients Say</h2>
                        <p>Testimonials from our satisfied customers</p>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-item" data-aos="fade-up">
                                    <div className="quote">"</div>
                                    <p>{testimonial.quote}</p>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.position}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Parallax>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content" data-aos="zoom-in">
                        <h2>Need Water Treatment Solutions?</h2>
                        <p>Contact us today for a free consultation and quote</p>
                        <Link to="/contact" className="btn btn-lg">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
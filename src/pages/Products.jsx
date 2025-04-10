import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { FaSearch, FaFilter, FaWater, FaIndustry, FaRecycle, FaFlask, FaChevronDown, FaChevronUp, FaTools } from 'react-icons/fa';
import './Products.css';

// Import placeholder images
import productBannerImg from '../assets/products.jpeg';
// Product categories
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'wtp', name: 'Water Treatment Plants' },
  { id: 'ro', name: 'Reverse Osmosis Plants' },
  { id: 'stp', name: 'Sewage Treatment Plants' },
  { id: 'etp', name: 'Effluent Treatment Plants' },
  { id: 'chemicals', name: 'Water Treatment Chemicals' },
  { id: 'accessories', name: 'Accessories' },
];

// Product data
const productsData = [
  {
    id: 1,
    name: 'Filtration Plant',
    category: 'wtp',
    image: 'https://www.vikaspumps.com/images/products/water-filtration-plant.jpg',
    description: 'Efficient filtration systems for removing suspended solids, sediment, and turbidity from water.',
    features: [
      'Multi-grade media filtration',
      'Automatic backwash systems',
      'Flow rates from 500 LPH to 100,000 LPH',
      'Industrial grade construction',
      'Easy maintenance design'
    ]
  },
  {
    id: 2,
    name: 'Iron Removal Plant',
    category: 'wtp',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/11/469379971/MT/OF/MR/30074996/domestic-iron-removal-plant.jpg',
    description: 'Specialized systems designed to remove dissolved iron and manganese from water supplies.',
    features: [
      'Oxidation and filtration processes',
      'Removes dissolved iron and manganese',
      'Prevents staining and metallic taste',
      'Customizable for various water conditions',
      'Low maintenance requirements'
    ]
  },
  {
    id: 3,
    name: 'Softener Plant',
    category: 'wtp',
    image: 'https://hydrosmart.com.au/wp-content/uploads/water-softener-1.jpg',
    description: 'Water softening systems to remove hardness-causing minerals from water through ion exchange.',
    features: [
      'Ion exchange technology',
      'Removes calcium and magnesium ions',
      'Automatic regeneration cycle',
      'Reduces scale formation',
      'Improves efficiency of soaps and detergents'
    ]
  },
  {
    id: 4,
    name: 'De-Mineralization Plant',
    category: 'wtp',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/XL/KQ/BN/113538998/water-demineralization-plant-500x500-500x500.png',
    description: 'Advanced systems for removing mineral salts from water through ion exchange process.',
    features: [
      'Two-bed and mixed-bed configurations',
      'Complete removal of dissolved solids',
      'High purity water output',
      'Custom-designed for specific needs',
      'Ideal for industrial applications'
    ]
  },
  {
    id: 5,
    name: 'Industrial RO Plant',
    category: 'ro',
    image: 'https://jeiaquatech.in/wp-content/uploads/2022/09/commercial-ro-plant-service-provider-1.jpg.webp',
    description: 'High-capacity reverse osmosis systems for industrial and commercial applications.',
    features: [
      'High rejection membranes',
      'Energy recovery systems',
      'Advanced automation',
      'Corrosion-resistant materials',
      'Pre-treatment integration'
    ]
  },
  {
    id: 6,
    name: 'Domestic RO Plant',
    category: 'ro',
    image: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-8ac4-61f7-8350-ea010fa188a0/raw?se=2025-04-10T06%3A27%3A41Z&sp=r&sv=2024-08-04&sr=b&scid=42ff119f-d405-5ae5-bf28-7713b3831b52&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-10T04%3A08%3A06Z&ske=2025-04-11T04%3A08%3A06Z&sks=b&skv=2024-08-04&sig=hgjYnwpAFBZl6LTu2syVnQ569WlRDrzeNEF0zeuOXCM%3D',
    description: 'Compact reverse osmosis systems for residential and small commercial use.',
    features: [
      'Space-saving design',
      'Multiple purification stages',
      'Easy filter replacement',
      'Low maintenance',
      'Energy-efficient operation'
    ]
  },
  {
    id: 7,
    name: 'Desalination RO Plant',
    category: 'ro',
    image: 'https://www.newater.com/wp-content/uploads/2021/06/seawater-reverse-osmosis-system-1.jpg',
    description: 'Specialized reverse osmosis systems designed for converting seawater into fresh water.',
    features: [
      'High-pressure operation',
      'Special seawater membranes',
      'Energy recovery devices',
      'Corrosion-resistant components',
      'Scalable modular design'
    ]
  },
  {
    id: 8,
    name: 'MBBR Sewage Treatment Plant',
    category: 'stp',
    image: 'https://sigmadafclarifiers.com/wp-content/uploads/MBBR1-2.jpg',
    description: 'Moving Bed Biofilm Reactor technology for efficient biological wastewater treatment.',
    features: [
      'High surface area biofilm carriers',
      'Compact footprint',
      'Resistant to shock loads',
      'Low sludge production',
      'High treatment efficiency'
    ]
  },
  {
    id: 9,
    name: 'MBR Sewage Treatment Plant',
    category: 'stp',
    image: 'https://www.newater.com/wp-content/uploads/2022/03/MBR-plant.jpg',
    description: 'Membrane Bio-Reactor systems combining biological treatment with membrane filtration.',
    features: [
      'Advanced membrane separation',
      'Superior effluent quality',
      'Smallest footprint available',
      'Automated operation',
      'Ideal for water reuse applications'
    ]
  },
  {
    id: 10,
    name: 'Aerobic Effluent Treatment Plant',
    category: 'etp',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/10/460829361/ZZ/FD/XW/5246371/effluent-treatment-wastewater-treatment-plant-500x500.jpg',
    description: 'Treatment systems using aerobic biological processes for industrial effluent treatment.',
    features: [
      'High organic removal efficiency',
      'Adaptable to various industrial wastes',
      'Low operating costs',
      'Environmentally friendly process',
      'Complies with discharge regulations'
    ]
  },
  {
    id: 11,
    name: 'Anaerobic Effluent Treatment Plant',
    category: 'etp',
    image: 'https://www.nijhuisindustries.com/assets/uploads/solutions/Anaerobic-treatment.jpg',
    description: 'Treatment systems utilizing anaerobic digestion for high-strength industrial wastewater.',
    features: [
      'Biogas production',
      'Energy-positive operation',
      'Handles high organic loads',
      'Low sludge production',
      'Minimal chemical requirement'
    ]
  },
  {
    id: 12,
    name: 'RO Antiscalants',
    category: 'chemicals',
    image: 'https://tse2.mm.bing.net/th?id=OIP.b2hY1Y_RjOVs76_rFg73kQHaHa&w=474&h=474&c=7',
    description: 'Specialized chemicals to prevent scale formation on RO membranes.',
    features: [
      'Prevents calcium carbonate precipitation',
      'Effective against silica scaling',
      'Compatible with all membrane types',
      'Extends membrane life',
      'Reduces cleaning frequency'
    ]
  },
  {
    id: 13,
    name: 'Boiler Chemicals',
    category: 'chemicals',
    image: 'https://www.sidsal.com/wp-content/uploads/2020/06/Boiler-Water-Treatment-Chemicals.jpg',
    description: 'Chemical formulations for boiler water treatment to prevent scaling and corrosion.',
    features: [
      'Oxygen scavengers',
      'Alkalinity builders',
      'Corrosion inhibitors',
      'Sludge conditioners',
      'Scale inhibitors'
    ]
  },
  {
    id: 14,
    name: 'Diffused Aeration System',
    category: 'accessories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4tNrf-IMVDrFYOuOeKc3vcScZ_-0EmfTTg&s',
    description: 'Air diffusion systems for effective oxygen transfer in wastewater treatment.',
    features: [
      'High oxygen transfer efficiency',
      'Energy-efficient design',
      'Corrosion-resistant materials',
      'Low maintenance requirements',
      'Various bubble size options'
    ]
  },
  {
    id: 15,
    name: 'Filter Press',
    category: 'accessories',
    image: 'https://www.kontekwater.com/wp-content/uploads/2015/02/Filter-Press-1-1500x1000.jpg',
    description: 'Dewatering equipment for separation of liquids and solids from sludge.',
    features: [
      'High pressure operation',
      'Automated operation',
      'High dry solids content',
      'Low operational costs',
      'Various plate sizes available'
    ]
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // Filter products based on category and search term
  useEffect(() => {
    let filtered = productsData;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
    
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [activeCategory, searchTerm]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Toggle product details expansion
  const toggleProductExpand = (productId) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productId);
    }
  };

  // Get category icon
  const getCategoryIcon = (categoryId) => {
    switch(categoryId) {
      case 'wtp': return <FaWater />;
      case 'ro': return <FaRecycle />;
      case 'stp': return <FaRecycle />;
      case 'etp': return <FaIndustry />;
      case 'chemicals': return <FaFlask />;
      case 'accessories': return <FaTools />;
      default: return <FaWater />;
    }
  };

  return (
    <div className="products-page">
      {/* Page Banner */}
      <Parallax
  bgImage={productBannerImg}
  strength={300}
  className="page-banner"
>
  <div className="banner-overlay"></div>
  <div className="banner-content">
   
  </div>
</Parallax>

      {/* Products Section */}
      <section className="section products-section">
        <div className="container">
          <div className="products-header" data-aos="fade-up">
            <h2>Water Treatment Solutions</h2>
            <p>Explore our wide range of water treatment products and equipment</p>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          <div className="products-main">
            {/* Filter Sidebar */}
            <div className={`products-filter ${isFilterOpen ? 'open' : ''}`} data-aos="fade-right">
              <div className="filter-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h3><FaFilter /> Categories</h3>
                {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              
              <div className="filter-body">
                <ul className="category-list">
                  {categories.map(category => (
                    <li 
                      key={category.id}
                      className={activeCategory === category.id ? 'active' : ''}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.id !== 'all' && getCategoryIcon(category.id)}
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products Grid */}
            <div className="products-grid" data-aos="fade-up">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className={`product-card ${expandedProduct === product.id ? 'expanded' : ''}`}
                    data-aos="fade-up"
                    data-aos-delay={product.id % 5 * 100}
                  >
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="product-category">{categories.find(cat => cat.id === product.category)?.name}</div>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      
                      <div className={`product-details ${expandedProduct === product.id ? 'show' : ''}`}>
                        <h4>Key Features:</h4>
                        <ul className="features-list">
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <Link to={`/contact`} className="btn">Request Quote</Link>
                      </div>
                      
                      <button 
                        className="details-toggle" 
                        onClick={() => toggleProductExpand(product.id)}
                      >
                        {expandedProduct === product.id ? 'Show Less' : 'View Details'}
                        {expandedProduct === product.id ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try changing your search term or selecting a different category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Need Custom Water Treatment Solutions?</h2>
            <p>Contact our team for expert advice and tailored solutions for your specific requirements</p>
            <Link to="/contact" className="btn btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
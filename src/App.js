import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Footer from './footer';
import P1ScrollText from './P1scrolltext'; // ScrollText for grid 1
import P2ScrollText from './P2scrolltext'; // ScrollText for grid 2
import P3ScrollText from './P3scrolltext'; // ScrollText for grid 3
import P4ScrollText from './P4scrolltext'; // ScrollText for grid 4
import ImageCarousel from './P1ImageCarousel'; // Carousel component for grid 1
import ImageCarousel2 from './P2ImageCarousel'; // Carousel component for grid 2
import ImageCarousel3 from './P3ImageCarousel'; // Carousel component for grid 3
import ImageCarousel4 from './P4ImageCarousel'; // Carousel component for grid 4
import grid1 from './Assets/Grid/grid1.jpeg';
import grid2 from './Assets/Grid/grid2.jpeg';
import grid3 from './Assets/Grid/grid3.jpeg';
import grid4 from './Assets/Grid/grid4.jpeg';

function App() {
  const [activeCarousel, setActiveCarousel] = useState(null); // State for active carousel
  const containerRef = useRef(null);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const handleImageClick = (gridIndex) => {
    if (activeCarousel === gridIndex) {
      setActiveCarousel(null);
    } else {
      setActiveCarousel(gridIndex);
    }

    if (containerRef.current) {
      setTimeout(() => {
        window.scrollTo({ top: 3000, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleReadMoreClick = () => {
    setIsContainerVisible(!isContainerVisible);

    if (!isContainerVisible && containerRef.current) {
      setTimeout(() => {
        window.scrollTo({ top: 3000, behavior: 'smooth' });
      }, 100);
    }
  };

  const hideGallery = () => {
    setIsContainerVisible(false);
  };

  const hidecarousal = () => {
    setActiveCarousel(null);
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="website">
      <div className="first-page">
        <div className={`homepage ${scrollY > 50 ? 'scroll-out' : ''}`}>
          <div className="header-section" style={{ cursor: 'pointer' }}>
            <h1>HIMANSHI JAIN</h1>
            <p>Product Designer</p>
          </div>
          <div className="text-section">
            <h1>ABOUT <span>ME</span></h1>
            <p>
              As a <span>product designer</span>, I focus on understanding human behavior and emotions. Great design is about empathy, understanding, and communication. I use human-centered principles to create solutions that solve problems and bring joy and comfort. Whether designing furniture, lighting, or games, I aim to make experiences that resonate with people. I love projects that involve research, exploring materials, and continuous prototyping to help users and bring smiles to their faces.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="image-grid-page">
          <div className="image-grid">
            <div className="image-item" onClick={() => handleImageClick(1)}>
              <img src={grid1} alt="Work 1" />
              <div className="image-title">Eco Sustainable Lounge Chair</div>
            </div>
            <div className="image-item" onClick={() => handleImageClick(2)}>
              <img src={grid2} alt="Work 2" />
              <div className="image-title">Infinity (Multifunctional Bookshelf)</div>
            </div>
            <div className="image-item" onClick={() => handleImageClick(3)}>
              <img src={grid3} alt="Work 3" />
              <div className="image-title">VoiceBook</div>
            </div>
            <div className="image-item" onClick={() => handleImageClick(4)}>
              <img src={grid4} alt="Work 4" />
              <div className="image-title">Jenga Together</div>
            </div>
          </div>
        </div>
      </div>

      {/* Show the appropriate carousel based on the active grid */}
      {activeCarousel === 1 && (
        <div className="carousal">
          <h1>Eco Sustainable Lounge Chair</h1>
          <ImageCarousel />
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      )}

      {activeCarousel === 2 && (
        <div className="carousal">
          <h1>Infinity (Multifunctional Bookshelf)</h1>
          <ImageCarousel2 />
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      )}

      {activeCarousel === 3 && (
        <div className="carousal">
          <h1>VoiceBook</h1>
          <ImageCarousel3 />
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      )}

      {activeCarousel === 4 && (
        <div className="carousal">
          <h1>Jenga Together</h1>
          <ImageCarousel4 />
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      )}

      {/* Render ScrollText based on activeCarousel */}
      {activeCarousel === 1 && <P1ScrollText isContainerVisible={isContainerVisible} hideGallery={hideGallery} />}
      {activeCarousel === 2 && <P2ScrollText isContainerVisible={isContainerVisible} hideGallery={hideGallery} />}
      {activeCarousel === 3 && <P3ScrollText isContainerVisible={isContainerVisible} hideGallery={hideGallery} />}
      {activeCarousel === 4 && <P4ScrollText isContainerVisible={isContainerVisible} hideGallery={hideGallery} />}

      <div className="last-page">
        <div className="contact">
          <h2>Let's Connect</h2>
          <p>Connect on social media!</p>
          <div className="button-container">
            <button className="social-button">LinkedIn</button>
            <button className="social-button">Behance</button>
            <button className="email-button">Get Email Id</button>
          </div>
        </div>
      </div>

      <Footer hideGallery={hideGallery} hidecarousal={hidecarousal} />
      </div>
  );
}

export default App;

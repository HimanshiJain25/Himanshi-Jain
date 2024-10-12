import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import P1ScrollText from './components/pages/ScrollText/P1ScrollText'; // ScrollText for grid 1
import P2ScrollText from './components/pages/ScrollText/P1ScrollText'; // ScrollText for grid 2
import P4ScrollText from './components/pages/ScrollText/P4ScrollText'; // ScrollText for grid 4
import ImageCarousel from './components/pages/ImageCarousal/P1ImageCarousel'; // Carousel component for grid 1
import ImageCarousel2 from './components/pages/ImageCarousal/P2ImageCarousel'; // Carousel component for grid 2
import ImageCarousel3 from './components/pages/ImageCarousal/P3ImageCarousel'; // Carousel component for grid 3
import ImageCarousel4 from './components/pages/ImageCarousal/P4ImageCarousel'; // Carousel component for grid 4
import grid1 from './components/Assets/Grid/grid1.jpeg';
import grid2 from './components/Assets/Grid/grid2.jpeg';
import grid3 from './components/Assets/Grid/grid3.png';
import grid4 from './components/Assets/Grid/grid4.jpeg';
import UnderstandPart from './components/pages/VoiceBox/p3Understand'; // Corrected import
import SecondaryPart from './components/pages/VoiceBox/p3Secondary';
import PrimaryPart from './components/pages/VoiceBox/P3Primary';
import IdeatePart from './components/pages/VoiceBox/p3IdeatePart';
import ProtoPart from './components/pages/VoiceBox/p3ProtoPart';
import TestPart from './components/pages/VoiceBox/p3TestPart';
import FinancialPart from './components/pages/VoiceBox/p3FinancialPart';

function App() {
  const [activeCarousel, setActiveCarousel] = useState(null); // State for active carousel
  const [activeCarouselbtn, setActiveCarouselbtn] = useState(null); // State for active carousel
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [activePart, setActivePart] = useState(null); // State for active part (e.g., 'Understand')

  const carouselRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Refs for each carousel
  const linkedInUrl = "https://www.linkedin.com/in/himanshi-jain-92098b2a0";
  const behanceUrl = "https://www.behance.net/himanshijain14";
  const email = "himanshi.neeta@gmail.com";

  const handleLinkedInClick = () => {
    window.open(linkedInUrl, '_blank'); // Opens the LinkedIn link in a new tab
  };

  const handleBehanceClick = () => {
    window.open(behanceUrl, '_blank'); // Opens the Behance link in a new tab
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email); // Copies the email to the clipboard
    alert("Email Id copied!"); // Optional: Displays an alert confirming the copy
  };

  const handleImageClick = (gridIndex) => {
    setActiveCarousel(gridIndex);
    
    hideGallery(); // Hides the carousel

    // Scroll to the respective carousel after the state updates
    setTimeout(() => {
      if (carouselRefs[gridIndex - 1].current) {
        carouselRefs[gridIndex - 1].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  const handleReadMoreClick = () => {
    // Toggle visibility of the container (if needed)
    setIsContainerVisible(!isContainerVisible);
  
    // Scroll down slightly when "Read More" is pressed
    setTimeout(() => {
      window.scrollBy({
        top: 500, // Adjust the value to scroll down more or less
        behavior: 'smooth',
      });
    }, 100); // Delay to ensure smooth transition
  };

  const hideGallery = () => {
    setIsContainerVisible(false);
  };

  const hidecarousal = () => {
    setActiveCarousel(null);
  };

  const handleCircleClick = (section) => {
   // Update state to display the relevant part
  setActivePart(section);
  setActiveCarouselbtn(section)

  // Scroll down slightly after the state has been updated
  setTimeout(() => {
    window.scrollBy({
      top: 200, // Adjust the value to scroll down more or less
      behavior: 'smooth',
    });
  }, 100); // Delay to ensure smooth transition
  };


  const handleCircleClickbtm = (section) => {
    // Update state to display the relevant part
   setActivePart(section);
 
   // Scroll down slightly after the state has been updated
   setTimeout(() => {
    window.scrollTo({ top: 2200, behavior: 'smooth' });}); // Delay to ensure smooth transition
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
        <div className={`homepage ${scrollY > 5 ? 'scroll-out' : ''}`}>
          <div className="header-section" style={{ cursor: 'pointer' }}>
            <h1>HIMANSHI JAIN</h1>
            <p>Product Designer</p>
          </div>
          <div className="text-section">
            <h1>ABOUT <span>ME</span></h1>
            <p>
              As a <span>product designer</span>, I focus on understanding human behavior and emotions. Great design is about empathy, understanding, and communication. I use human-centered principles to create solutions that solve problems and bring joy and comfort. Whether designing furniture, lighting, or games, I aim to make experiences that resonate with people.
            </p>
          </div>
        </div>

        <div className='spacer'></div>
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
        <div ref={carouselRefs[0]} className="carousal">
          <h1>Eco Sustainable Lounge Chair</h1>
          <ImageCarousel />
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      )}

      {activeCarousel === 2 && (
        <div ref={carouselRefs[1]} className="carousal">
          <h1>Infinity (Multifunctional Bookshelf)</h1>
          <ImageCarousel2 />
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      )}

      {activeCarousel === 3 && (
        <div ref={carouselRefs[2]} className="carousal">
          <h1>VoiceBook</h1>
          <ImageCarousel3 />
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMoreClick}>Read More</button>
          </div>

          {/* Render Process Circles */}
        </div>
      )}

      {activeCarousel === 4 && (
        <div ref={carouselRefs[3]} className="carousal">
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
      {activeCarousel === 4 && <P4ScrollText isContainerVisible={isContainerVisible} hideGallery={hideGallery} />}

      {activeCarousel === 3 && isContainerVisible && (
            <div className="process-section">
              <h1>Process</h1>
              <div className="process-circles">
                <div className="process-circle" onClick={() => handleCircleClick('Understand')}>
                  Understand
                </div>
                <div className="process-circle" onClick={() => handleCircleClick('Secondary Research')}>
                  Secondary Research
                </div>
                <div className="process-circle" onClick={() => handleCircleClick('Primary Research')}>
                  Primary Research & Empathise
                </div>
                
                <div className="process-circle" onClick={() => handleCircleClick('Ideate')}>
                  Ideate
                </div>
                <div className="process-circle" onClick={() => handleCircleClick('Design/Prototype')}>
                  Design/Prototype
                </div>
                <div className="process-circle" onClick={() => handleCircleClick('Test & Learn')}>
                  Test & Learn
                </div>
                <div className="process-circle" onClick={() => handleCircleClick('Financial Planning')}>
                  Financial Planning
                </div>
              </div>

              {/* Display the corresponding component based on the clicked circle */}
              {activePart === 'Understand' && <UnderstandPart />}
              {activePart === 'Primary Research' && <PrimaryPart/>}
              {activePart === 'Secondary Research' && <SecondaryPart/>}
              {activePart === 'Ideate' && <IdeatePart/>}
              {activePart === 'Design/Prototype' && <ProtoPart/>}
              {activePart === 'Test & Learn' && <TestPart/>}
              {activePart === 'Financial Planning' && <FinancialPart/>}
            </div>
          )}


{activeCarouselbtn && isContainerVisible && (
            <div className="process-section">
              <h1></h1>
              <div className="process-circles">
                <div className="process-circle" onClick={() => handleCircleClickbtm('Understand')}>
                  Understand
                </div>
                <div className="process-circle" onClick={() => handleCircleClickbtm('Secondary Research')}>
                  Secondary Research
                </div>
                <div className="process-circle" onClick={() => handleCircleClickbtm('Primary Research')}>
                  Primary Research & Empathise
                </div>

                <div className="process-circle" onClick={() => handleCircleClickbtm('Ideate')}>
                  Ideate
                </div>
                <div className="process-circle" onClick={() => handleCircleClickbtm('Design/Prototype')}>
                  Design/Prototype
                </div>
                <div className="process-circle" onClick={() => handleCircleClickbtm('Test & Learn')}>
                  Test & Learn
                </div>
                <div className="process-circle" onClick={() => handleCircleClickbtm('Financial Planning')}>
                  Financial Planning
                </div>
              </div>

            </div>
          )}
          

      <div className="last-page">
      <h1 className="Connect-bg">CONNECT</h1>

        <div className="contact">
          <h2>Let's Connect</h2>
          <p>on social media!</p>
          <div className="button-container">
            <button className="social-button" onClick={handleLinkedInClick}>LinkedIn</button>
            <button className="social-button" onClick={handleBehanceClick}>Behance</button>
            <button className="email-button" onClick={handleEmailClick}>Get Email Id</button>
          </div>
        </div>
      </div>

      <Footer hideGallery={hideGallery} hidecarousal={hidecarousal} />
    </div>
  );
}

export default App;

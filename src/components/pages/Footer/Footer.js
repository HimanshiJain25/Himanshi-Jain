import React from 'react';
import './Footer.css';

function Footer({ hideGallery, hidecarousal , gridRef}) {
  const scrollToPortfolio = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    hideGallery();
    hidecarousal();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hideGallery(); // Hides the scroll text
    hidecarousal(); // Hides the carousel
  };

  const scrollToAbout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hideGallery(); // Hides the scroll text
    hidecarousal(); // Hides the carousel
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <button className="footer-button" onClick={scrollToAbout}>About Me</button>
          <button className="footer-button" onClick={scrollToPortfolio}>Portfolio</button>
          <button className="footer-button" onClick={scrollToBottom}>Contact Me</button>
        </div>
      </footer>

      <div className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </div>
    </>
  );
}

export default Footer;

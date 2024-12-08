import React from 'react';
import './Footer.css';

function Footer({ hideGallery, hidecarousal, hidescroller, gridRef }) {
  const scrollToPortfolio = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    hideGallery();
    hidecarousal();
    hidescroller(); // Hides the scroller
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hideGallery();
    hidecarousal();
    hidescroller(); // Hides the scroller
  };

  const scrollToAbout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hideGallery();
    hidecarousal();
    hidescroller(); // Hides the scroller
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

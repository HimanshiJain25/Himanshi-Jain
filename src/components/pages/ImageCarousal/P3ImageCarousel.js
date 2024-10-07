import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../../../App.css'; // Import the CSS file for consistency
import p3s1 from '../.././Assets/Project3/slider/mockup 0.png';
import p3s2 from '../.././Assets/Project3/slider/mockup 1.png';
import p3s3 from '../.././Assets/Project3/slider/mockup 2.png';
import p3s4 from '../.././Assets/Project3/slider/mockup 3.png';
import p3s5 from '../.././Assets/Project3/slider/mockup 4.png';
import p3s6 from '../.././Assets/Project3/slider/mockup 5.png';

const ImageCarousel2 = () => {
  const images = [p3s1,p3s2,p3s3,p3s4,p3s5,p3s6]; // Use imported images instead of URLs

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef();

  // Animation effect when the image changes
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, [currentIndex]);

  // Automatically change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="image-container">
        <img
          ref={imageRef}
          src={images[currentIndex]}
          alt="Carousel"
          className="carousel-image"
        />
      </div>
      {/* Arrow buttons */}
      <button onClick={prevImage} className="carousel-button prev-button">
        &#10094; {/* Left arrow */}
      </button>
      <button onClick={nextImage} className="carousel-button next-button">
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImageCarousel2;


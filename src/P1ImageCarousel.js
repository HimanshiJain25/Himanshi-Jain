import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './App.css'; // Import the CSS file for consistency
import p1s1 from './Assets/Project1/Slider/slider1.jpeg';
import p1s2 from './Assets/Project1/Slider/slider2.jpeg';
import p1s3 from './Assets/Project1/Slider/slider3.jpeg';
import p1s4 from './Assets/Project1/Slider/slider4.jpeg';

const ImageCarousel = () => {
  const images = [p1s1, p1s2, p1s3, p1s4 ]; // Use imported images instead of URLs

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

export default ImageCarousel;


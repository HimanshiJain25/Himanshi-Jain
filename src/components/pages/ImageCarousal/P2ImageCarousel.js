import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../../../App.css';
import p2s1 from '../../Assets/Project2/Slider/slider1.jpeg';
import p2s2 from '../../Assets/Project2/Slider/slider2.jpeg';
import p2s3 from '../../Assets/Project2/Slider/slider3.jpeg';
import p2s4 from '../../Assets/Project2/Slider/slider4.jpeg';

const ImageCarousel2 = () => {
  const images = [p2s1, p2s2, p2s3, p2s4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    gsap.fromTo(imageRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((i) => (i + 1) % images.length), 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img ref={imageRef} src={images[currentIndex]} alt="Carousel" className="carousel-image" />
      <button onClick={() => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))} className="carousel-button prev-button">&#10094;</button>
      <button onClick={() => setCurrentIndex((i) => (i + 1) % images.length)} className="carousel-button next-button">&#10095;</button>
    </div>
  );
};

export default ImageCarousel2;

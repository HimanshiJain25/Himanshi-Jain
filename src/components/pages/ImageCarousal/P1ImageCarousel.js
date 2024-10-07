import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../../../App.css'; 
import p1s1 from '../../Assets/Project1/Slider/slider1.jpeg';
import p1s2 from '../../Assets/Project1/Slider/slider2.jpeg';
import p1s3 from '../../Assets/Project1/Slider/slider3.jpeg';
import p1s4 from '../../Assets/Project1/Slider/slider4.jpeg';

const ImageCarousel = () => {
  const images = [p1s1, p1s2, p1s3, p1s4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    gsap.to(imageRef.current, { opacity: 0, duration: 0.5, onComplete: () => {
      imageRef.current.src = images[currentIndex]; // Change the image
      gsap.to(imageRef.current, { opacity: 1, duration: 0.5 });
    }});
  }, [currentIndex]);
  
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((i) => (i + 1) % images.length), 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img ref={imageRef} src={images[currentIndex]} alt="Carousel" className="carousel-image" key={currentIndex} />
      <button onClick={() => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))} className="carousel-button prev-button">&#10094;</button>
      <button onClick={() => setCurrentIndex((i) => (i + 1) % images.length)} className="carousel-button next-button">&#10095;</button>
    </div>
  );
};

export default ImageCarousel;

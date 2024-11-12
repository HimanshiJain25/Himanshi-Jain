import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../../../App.css'; // Import the CSS file for consistency
import p3s1 from '../../Assets/Project3/slider/mockup 0.png';
import p3s2 from '../../Assets/Project3/slider/mockup 1.png';
import p3s3 from '../../Assets/Project3/slider/mockup 2.png';
import p3s4 from '../../Assets/Project3/slider/mockup 3.png';
import p3s5 from '../../Assets/Project3/slider/mockup 4.png';
import p3s6 from '../../Assets/Project3/slider/mockup 5.png';

const ImageCarousel2 = () => {
  const images = [p3s1, p3s2, p3s3, p3s4, p3s5, p3s6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = [useRef(null), useRef(null)]; // Two refs for crossfading images

  const updateImages = () => {
    const currentImage = imageRefs[currentIndex % 2].current;
    const nextImage = imageRefs[(currentIndex + 1) % 2].current;

    // Set the src for the next image element before fading
    nextImage.src = images[(currentIndex + 1) % images.length];
    // Crossfade effect
    gsap.to(currentImage, { opacity: 0, duration: 0.5 });
    gsap.to(nextImage, { opacity: 1, duration: 0.5 });

    // Update the current index
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(updateImages, 4000); // Change image every 4 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  // Set the initial images when the component mounts
  useEffect(() => {
    if (imageRefs[0].current && imageRefs[1].current) {
      imageRefs[0].current.src = images[0];
      imageRefs[1].current.src = images[1];
      gsap.set(imageRefs[0].current, { opacity: 1 }); // Initial image visible
      gsap.set(imageRefs[1].current, { opacity: 0 }); // Next image hidden
    }
  }, []);

  return (
    <div className="carousel-container">
      <img
        ref={imageRefs[0]}
        alt="Carousel Image 1"
        className="carousel-image"
        style={{ position: 'absolute', transition: 'opacity 1s ease-in-out' }}
      />
      <img
        ref={imageRefs[1]}
        alt="Carousel Image 2"
        className="carousel-image"
        style={{ position: 'absolute', transition: 'opacity 1s ease-in-out' }}
      />
      <button
        onClick={() => {
          setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }}
        className="carousel-button prev-button"
      >
        &#10094;
      </button>
      <button
        onClick={() => {
          setCurrentIndex((currentIndex + 1) % images.length);
        }}
        className="carousel-button next-button"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel2;

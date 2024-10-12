import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const connectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Ensure ScrollTrigger is properly set up
    const contactAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 80%', // Start when the section is 80% visible
        end: 'bottom 20%',
        scrub: 1, // Smooth scrolling effect
      },
    });

    // Animation for the "Connect" text
    contactAnimation.fromTo(
      connectRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }
    );

    // Animation for the "contact" div
    contactAnimation.fromTo(
      contactRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.out' },
      '-=1.5'
    );
  }, []);

  return (
    <div className="last-page" ref={contactRef}>
      <h1 className="Connect-bg" ref={connectRef}>CONNECT</h1>
      <div className="contact">
        <h2>Let's Connect</h2>
        <p>on social media!</p>
        <div className="button-container">
          <button className="social-button">LinkedIn</button>
          <button className="social-button">Behance</button>
          <button className="email-button">Get Email Id</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

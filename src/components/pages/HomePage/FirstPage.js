import React, { useEffect, useState } from 'react';

const ScrollEffect = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`first-page ${scrollY > 50 ? 'scroll-out' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollEffect;

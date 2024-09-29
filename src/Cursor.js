import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const speed = 0.1; // The speed at which the cursor catches up to the mouse

  // Smoothly follow the mouse
  const followMouse = () => {
    const dx = mousePosition.current.x - cursorPosition.current.x;
    const dy = mousePosition.current.y - cursorPosition.current.y;

    cursorPosition.current.x += dx * speed;
    cursorPosition.current.y += dy * speed;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0)`;
    }

    requestRef.current = requestAnimationFrame(followMouse);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    requestRef.current = requestAnimationFrame(followMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default Cursor;

import React, { useEffect } from "react";
import "./ScrollImg.css";

import g1 from "../../Assets/project10/g1.png";
import g2 from "../../Assets/project10/g2.png";
import g3 from "../../Assets/project10/g3.png";
import g4 from "../../Assets/project10/g4.png";
import g5 from "../../Assets/project10/g5.png";
import g6 from "../../Assets/project10/g6.png";

const ScrollImg10 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scroll = window.scrollY + window.innerHeight / 3;

      let isActiveSectionFound = false;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (top <= scroll && top + height > scroll) {
          sections.forEach((s) => s.classList.remove("active"));
          section.classList.add("active");
          isActiveSectionFound = true;
        }
      });

      // If no section is in view, ensure all are inactive
      if (!isActiveSectionFound) {
        sections.forEach((s) => s.classList.remove("active"));
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger the scroll effect initially
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [g1, g2, g3, g4, g5, g6];

  return (
    <div>
      {images.map((image, index) => (
        <div key={index} className="section">
          <div className="section-img">
            <div
              className="section-img-inner"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollImg10;

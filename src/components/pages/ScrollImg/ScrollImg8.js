import React, { useEffect } from "react";
import "./ScrollImg.css";

import b1 from "../../Assets/project8/b1.png";
import b2 from "../../Assets/project8/b2.png";
import b3 from "../../Assets/project8/b3.png";
import b4 from "../../Assets/project8/b4.png";
import b5 from "../../Assets/project8/b5.png";
import b6 from "../../Assets/project8/b6.png";

const ScrollImg8 = () => {
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

  const images = [b1, b2, b3, b4, b5, b6];

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

export default ScrollImg8;

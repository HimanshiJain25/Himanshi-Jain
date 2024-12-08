import React, { useEffect } from "react";
import "./ScrollImg.css";

import d1 from "../../Assets/project9/d1.png";
import d2 from "../../Assets/project9/d2.png";
import d3 from "../../Assets/project9/d3.png";
import d4 from "../../Assets/project9/d4.png";
import d5 from "../../Assets/project9/d5.png";
import d6 from "../../Assets/project9/d6.png";
import d7 from "../../Assets/project9/d7.png";
import d8 from "../../Assets/project9/d8.png";
import d9 from "../../Assets/project9/d9.png";
import d10 from "../../Assets/project9/d10.png";
import d11 from "../../Assets/project9/d11.png";
import d12 from "../../Assets/project9/d12.png";
import d13 from "../../Assets/project9/d13.png";
import d14 from "../../Assets/project9/d14.png";
import d15 from "../../Assets/project9/d15.png";
import d16 from "../../Assets/project9/d16.png";
import d17 from "../../Assets/project9/d17.png";

const ScrollImg9 = () => {
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

  const images = [
    d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17,
  ];

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

export default ScrollImg9;

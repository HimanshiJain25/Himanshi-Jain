import React, { useEffect } from "react";
import "./ScrollImg.css";

import r0 from "../../Assets/project6/r0.png";
import r1 from "../../Assets/project6/r1.png";
import r2 from "../../Assets/project6/r2.png";
import r3 from "../../Assets/project6/r3.png";
import r4 from "../../Assets/project6/r4.png";
import r5 from "../../Assets/project6/r5.png";
import r6 from "../../Assets/project6/r6.png";
import r7 from "../../Assets/project6/r7.png";
import r8 from "../../Assets/project6/r8.png";
import r9 from "../../Assets/project6/r9.png";
import r10 from "../../Assets/project6/r10.png";
import r11 from "../../Assets/project6/r11.png";
import r12 from "../../Assets/project6/r12.png";
import r13 from "../../Assets/project6/r13.png";

const ScrollImg6 = () => {
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

  const images = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13];

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

export default ScrollImg6;

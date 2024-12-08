import React, { useEffect } from "react";
import "./ScrollImg.css";

import c2 from "../../Assets/project5/c2.png";
import c3 from "../../Assets/project5/c3.png";
import c4 from "../../Assets/project5/c4.png";
import c5 from "../../Assets/project5/c5.png";
import c6 from "../../Assets/project5/c6.png";
import c7 from "../../Assets/project5/c7.png";
import c8 from "../../Assets/project5/c8.png";
import c9 from "../../Assets/project5/c9.png";
import c10 from "../../Assets/project5/c10.png";

const ScrollImg5 = () => {
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

  return (
    <div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c2})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c3})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c4})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c5})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c6})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c7})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c8})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c9})` }}
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="section-img">
          <div
            className="section-img-inner"
            style={{ backgroundImage: `url(${c10})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollImg5;

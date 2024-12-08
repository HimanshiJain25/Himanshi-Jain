import React, { useEffect } from "react";
import "./ScrollImg.css";

import s1 from "../../Assets/project7/s1.png";
import s2 from "../../Assets/project7/s2.png";
import s3 from "../../Assets/project7/s3.png";
import s4 from "../../Assets/project7/s4.png";
import s5 from "../../Assets/project7/s5.png";
import s6 from "../../Assets/project7/s6.png";
import s7 from "../../Assets/project7/s7.png";
import s8 from "../../Assets/project7/s8.png";
import s9 from "../../Assets/project7/s9.png";
import s10 from "../../Assets/project7/s10.png";
import s11 from "../../Assets/project7/s11.png";
import s12 from "../../Assets/project7/s12.png";
import s13 from "../../Assets/project7/s13.png";
import s14 from "../../Assets/project7/s14.png";
import s15 from "../../Assets/project7/s15.png";
import s16 from "../../Assets/project7/s16.png";
import s17 from "../../Assets/project7/s17.png";
import s18 from "../../Assets/project7/s18.png";
import s19 from "../../Assets/project7/s19.png";
import s20 from "../../Assets/project7/s20.png";
import s21 from "../../Assets/project7/s21.png";
import s22 from "../../Assets/project7/s22.png";
import s23 from "../../Assets/project7/s23.png";
import s24 from "../../Assets/project7/s24.png";
import s25 from "../../Assets/project7/s25.png";
import s26 from "../../Assets/project7/s26.png";
import s27 from "../../Assets/project7/s27.png";
import s28 from "../../Assets/project7/s28.png";
import s29 from "../../Assets/project7/s29.png";
import s30 from "../../Assets/project7/s30.png";
import s31 from "../../Assets/project7/s31.png";
import s32 from "../../Assets/project7/s32.png";
import s33 from "../../Assets/project7/s33.png";
import s34 from "../../Assets/project7/s34.png";
import s35 from "../../Assets/project7/s35.png";
import s36 from "../../Assets/project7/s36.png";
import s37 from "../../Assets/project7/s37.png";
import s38 from "../../Assets/project7/s38.png";
import s39 from "../../Assets/project7/s39.png";
import s40 from "../../Assets/project7/s40.png";
import s41 from "../../Assets/project7/s41.png";

const ScrollImg7 = () => {
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
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17,
    s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32,
    s33, s34, s35, s36, s37, s38, s39, s40, s41,
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

export default ScrollImg7;

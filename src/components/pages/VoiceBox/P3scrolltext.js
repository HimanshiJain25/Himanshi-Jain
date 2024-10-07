import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../App.css'; // Make sure the styles are still accessible

// Import your images
import p1i1 from '../../Assets/Project1/1.jpeg';
import p1i2 from '../../Assets/Project1/2.jpeg';
import p1i3 from '../../Assets/Project1/3.jpeg';
import p1i4 from '../../Assets/Project1/4.jpeg';
import p1i5 from '../../Assets/Project1/5.jpeg';
import p1i6 from '../../Assets/Project1/6.jpeg';
import p1i7 from '../../Assets/Project1/7.jpeg';
import p1i8 from '../../Assets/Project1/8.jpeg';
import p1i9 from '../../Assets/Project1/9.jpeg';
import p1i10 from '../../Assets/Project1/10.jpeg';
import p1i11 from '../../Assets/Project1/11.jpeg';
import p1i12 from '../../Assets/Project1/12.jpeg';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const P1ScrollText = ({ isContainerVisible, hideGallery }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isContainerVisible) {
      let ctx = gsap.context(() => {
        gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

        const animation = gsap.to(".photo:not(:first-child)", {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 1,
        });

        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".leftblock",  // Update pinning class after swap
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => ctx.revert();
    }
  }, [isContainerVisible]);

  return (
    isContainerVisible && (
      <div className="gallery" ref={containerRef}>
        
        <div className="leftblock"> {/* Swapped */}
          <div className="photo-container">

          <div className="photo">
              <img src={p1i1} alt="img-1" />
            </div>
            <div className="photo">
              <img src={p1i2} alt="img-2" />
            </div>
            <div className="photo">
              <img src={p1i3} alt="img-3" />
            </div>
            <div className="photo">
              <img src={p1i4} alt="img-4" />
            </div>
            <div className="photo">
              <img src={p1i5} alt="img-5" />
            </div>
            <div className="photo">
              <img src={p1i6} alt="img-6" />
            </div>
            <div className="photo">
              <img src={p1i7} alt="img-7" />
            </div>
            <div className="photo">
              <img src={p1i8} alt="img-8" />
            </div>
            <div className="photo">
              <img src={p1i9} alt="img-9" />
            </div>
            <div className="photo">
              <img src={p1i10} alt="img-10" />
            </div>
            <div className="photo">
              <img src={p1i11} alt="img-11" />
            </div>
            <div className="photo">
              <img src={p1i12} alt="img-12" />
            </div>

          </div>
        </div>

        <div className="right"> {/* Swapped */}
          <div className="details">
            <p>The research started by exploring the fundamental concept of a chair, examining various sitting positions, and identifying the most comfortable ones. This was followed by an analysis of average chair dimensions and an in-depth look at ergonomics, focusing on comfortable positions that accommodate the 5th to 95th percentile of the population. This ensures the design suits the vast majority of users, while also considering the need for specialized designs for outliers.</p>
          </div>
          <div className="details">
            <p>
            After gaining a basic understanding of chairs from the research, I created a moodboard to explore various existing chair designs, different materials, and how different chair structures are balanced. This included examining weight distribution and identifying the supports needed for stability.
            </p>
          </div>
          <div className="details"><p>This project focuses on creating an eco-sustainable lounge chair designed for short-term relaxation in public and private spaces. Combining lightweight yet sturdy materials, the chair offers an innovative solution for modern homeowners, eco-conscious consumers, and wellness centers. Its versatile design makes it ideal for areas such as pool sides, hotels, living rooms, and relaxation centers, providing comfort while promoting sustainability.</p></div>
          <div className="details">
            <p>After completing research, creating a moodboard, and understanding the objective and target audience, I began sketching various concepts for the eco-sustainable lounge chair. I explored different shapes, materials, and forms, focusing on creating a lightweight yet sturdy design. Each sketch aimed to balance comfort, functionality, and sustainability, considering the needs of modern homeowners, eco-conscious users, and public spaces like hotels and wellness centers. These sketches laid the groundwork for refining the final design.</p>
          </div>
          <div className="details">
            <p>
            The materials chosen for this project, including triwall sheets and paper rods, were selected for their eco-friendly properties and structural integrity. The natural, uncolored appearance was intentionally left to highlight the raw, beautiful texture of the triwall sheets, enhancing the sustainability narrative while offering a minimalistic aesthetic. While Fevicol was used as a temporary adhesive, future iterations will explore more sustainable gluing options to further align with the eco-conscious objectives of the design.
            </p>
          </div>
          <div className="details"><p>After sketching, the top 10 side views were selected based on the material I planned to use. While all the designs could be made in wood or metal, not all were suitable for construction with triwall sheets. This selection process ensured that the designs aligned with the material's properties.
From the top 10 side views, I narrowed it down to two designs: a lounge chair and a rocking chair. I then made 1/4 scale models of both to evaluate which one would work better.
</p></div>          <div className="details">
            <p>After reviewing the 1/4 scale models, I chose the lounge chair because there was a slight risk of the rocking chair tilting due to the triwall sheet material. I then created a full-size cutout of the lounge chair's side view and tested it myself. During testing, I noticed that the chair might tip forward if a heavy person sat only on the front part. To prevent this, I adjusted the design, making the front more square-shaped to ensure the chair stays stable and secure.</p>
          </div>
          <div className="details">
            <p>
            This design shows the measurements for a structure with three parts: left, center, and right. It is 34.7 inches tall and 69.3 inches wide. The angles, including 137 degrees, help the structure stay balanced. Each profile consists of 20 layers each, making the design strong and well-proportioned.
            </p>
          </div>
          <div className="details"><p>I repurposed the leftover pieces from the chair by turning them into a side table and a shoe supporter. The remaining material was used for prototyping another project, ensuring that nothing went to waste.</p></div>          <div className="details">
            <p>After completing the chair, I conducted extensive user testing, ensuring it could support a wide range of body types—from very thin individuals to those weighing up to 150kg. The chair proved durable and comfortable across all tests. It has also been showcased at various competitions, receiving positive feedback for its strength and design.</p>
          </div>
          <div className="details">
            <p>
            In future refinements, the design will feature a more three-dimensional appearance, explore additional sustainable materials, and include eco-friendly lamination and sustainable glue.
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default P1ScrollText;

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../App.css'; // Make sure the styles are still accessible

// Import your images
import p4i1 from '../../Assets/Project4/1.jpeg';
import p4i2 from '../../Assets/Project4/2.jpeg';
import p4i3 from '../../Assets/Project4/3.jpeg';
import p4i4 from '../../Assets/Project4/4.jpeg';
import p4i5a from '../../Assets/Project4/5a.jpeg';
import p4i5b from '../../Assets/Project4/5b.jpeg';
import p4i6 from '../../Assets/Project4/6.jpeg';
import p4i7 from '../../Assets/Project4/7.jpeg';
import p4i8a from '../../Assets/Project4/8a.jpeg';
import p4i8b from '../../Assets/Project4/8b.jpeg';
import p4i9 from '../../Assets/Project4/9.jpeg';

gsap.registerPlugin(ScrollTrigger);

const P4ScrollText = ({ isContainerVisible }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isContainerVisible) {
      const ctx = gsap.context(() => {
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
          pin: ".leftblock",
          animation,
          scrub: true,
        });
      });

      return () => ctx.revert();
    }
  }, [isContainerVisible]);

  const images = [p4i1, p4i2, p4i3, p4i4, p4i5a, p4i5b, p4i6, p4i7, p4i8a, p4i8b, p4i9];

  const textContent = [
    "Jenga is a game where players take turns removing one block at a time from a tower made of wooden blocks and then place it on top without making the tower fall. The goal is to keep the tower standing as long as possible. This mind map outlines key aspects of Jenga, including gameplay actions, strategies, player turns, tools, and related games. It highlights important concepts like skill, balance, and concentration in Jenga.",
    "After learning about Jenga, its key interaction points, and doing basic research using the mind map, I created a moodboard. This moodboard showcases various types of Jenga games available, similar stacking games, and accessible games designed for the visually impaired. It also highlights how visually impaired players engage with these games, helping me understand accessibility in game design.",
    "After completing the process, I identified several key insights that require further refinement. These include ensuring a non-slippery surface for safety, optimizing storage space, preventing accidental shifts during use, and improving the alignment of components. These insights will help enhance both the functionality and user experience of the bookshelf design.",
    "The focus here is on designing tactile features and incorporating feedback systems to make Jenga enjoyable for visually impaired players. The aim is to create an inclusive version of the game that enhances the experience without compromising its fun and social aspects. By doing so, visually impaired individuals can participate fully, making the game both accessible and engaging for everyone.",
    "After creating prototypes for setup time, block storage, alignment, turn indicators, and a stable base, I realized that these aren't problems unique to visually impaired players; they're universal issues with the game. The main challenge for visually impaired players is accidental shifts, so I decided to focus on addressing that problem while also making storage easier.",
    "Here I made prototypes of different grips that can be easy to remove the block.",
    "These final Jenga blocks are designed with grips for fingers and thumbs on all sides, making them easy to remove. The holes are ergonomically shaped based on the study of finger and thumb sizes from the 5th to 99th percentile, ensuring comfort and accessibility for a wide range of players.",
    "A magnetic box with a top lid. When you open the lid, you can unfold the magnetic flaps, slide out the box, and the Jenga tower is already set up and ready to play. A box that opens on all four sides with a handle on top. When you lift the handle, the box opens up, and the square in the middle serves as a stable base and the Jenga tower is ready to play.",
    "In the first set of steps, the box is initially presented in a closed state with a clean, simple design. To begin, the user removes the cap, which opens easily. Next, the magnetic flaps on either side of the box are opened, allowing for full access to the interior. These steps ensure the box is easy to open and user-friendly, making it convenient for storing or accessing the Jenga blocks inside.",
    "In the second set of steps, one side of the box is removed, and the Jenga blocks are smoothly slid out. The blocks can also be removed by turning the box upside down, offering an alternative method of access. Finally, the other half of the box is used to align the blocks for play. These steps simplify the process of both storing and preparing the Jenga blocks for gameplay, making it efficient and easy to handle.",
    "I conducted user testing with my target audience, a visually impaired individual, to evaluate the functionality and experience of the product. The feedback was overwhelmingly positive, and the user had a lot of fun interacting with the design. This confirmed the product's potential to offer an enjoyable and accessible experience for the visually impaired community."
  ];

  return (
    isContainerVisible && (
      <>
        <div className="gallery" ref={containerRef}>
          <div className="leftblock">
            <div className="photo-container">
              {images.map((src, index) => (
                <div className="photo" key={index}>
                  <img src={src} alt={`img-${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="right">
            {textContent.map((text, index) => (
              <div className="details" key={index}>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thank You Container */}
        <div className="thank-you-container">
          <p>Thank you</p>
        </div>
      </>
    )
  );
};

export default P4ScrollText;

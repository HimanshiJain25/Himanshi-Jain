import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../App.css';

// Import your images
import p2i1 from '../../Assets/Project2/1.jpeg';
import p2i2 from '../../Assets/Project2/2.jpeg';
import p2i3 from '../../Assets/Project2/3.jpeg';
import p2i4 from '../../Assets/Project2/4.jpeg';
import p2i5 from '../../Assets/Project2/5.jpeg';
import p2i6a from '../../Assets/Project2/6a.jpeg';
import p2i6b from '../../Assets/Project2/6b.jpeg';
import p2i7 from '../../Assets/Project2/7.jpeg';
import p2i8 from '../../Assets/Project2/8.jpeg';
import p2i9 from '../../Assets/Project2/9.jpeg';
import p2i10 from '../../Assets/Project2/10.jpeg';

gsap.registerPlugin(ScrollTrigger);

const P2ScrollText = ({ isContainerVisible }) => {
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

  const images = [p2i1, p2i2, p2i3, p2i4, p2i5, p2i6a, p2i6b, p2i7, p2i8, p2i9, p2i10];

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
            <div className="details">
              <p>I designed this bookshelf after studying various existing designs. First, I explored different types of bookshelves and examined ergonomic data available online. Additionally, I measured the heights, arm lengths, and maximum reach of several individuals, specifically capturing data from the 5th to the 95th percentile to ensure broad usability. This approach helped me determine the most practical and accessible dimensions for the bookshelf, accommodating a wide range of users.</p>
            </div>
            <div className="details">
              <p>After researching different types of bookshelves, I created a mood board featuring a variety of designs. This included shelves made from different materials and those placed in various settings like walls, storage areas, and hotels. This expanded my perspective beyond basic bookshelves, introducing me to new designs and helping me understand the use of different materials.</p>
            </div>
            <div className="details">
              <p>This multi-functional bookshelf seamlessly combines both shelving and seating to enhance versatility and user experience in diverse spaces. Designed for short-term relaxation and reading, it allows for effortless customization, making it ideal for use in homes, cafes, hotel lobbies, and libraries. By optimizing functionality, the bookshelf adapts to various room settings, catering to both practicality and comfort.</p>
            </div>
            <div className="details">
              <p>After completing research, creating a moodboard, and understanding the objective and target audience, I began sketching various bookshelf concepts. I explored a range of shelving types, focusing on balancing functionality and aesthetics while ensuring adaptability to different environments like homes, cafes, and hotels. These sketches provided a foundation for refining the design.</p>
            </div>
            <div className="details">
              <p>For the bookshelf, I selected materials that offer both flexibility and strength. The 6mm flexible ply allows for curved or unique shapes, while the 12mm plywood provides sturdy support for the structure. Fevicol and nails ensure a strong, durable assembly. For the finish, I applied a primer to protect the wood and used metallic copper paint to give the bookshelf a modern, stylish appearance that enhances its visual appeal. This combination of materials and coatings ensures a balance of durability, functionality, and aesthetics.</p>
            </div>
            <div className="details">
              <p>After sketching various ideas, I chose the top three designs: one for multipurpose use, and the others featuring rotating and folding shelves. I then created quick paper prototypes to better visualize and understand these concepts.</p>
            </div>
            <div className="details">
              <p>After creating paper prototypes, I selected one design to develop further. I began by experimenting with various live hinges to bend the plywood for constructing the outer and inner circles of the shelf. I tried different types and sizes of live hinges, heated the plywood, and tested its breaking strength. After these experiments, I discovered a material called flexible plywood, which easily bends into a circular shape. I decided to use this flexible plywood for my design.</p>
            </div>
            <div className="details">
              <p>This bookshelf design features precise measurements to ensure both functionality and aesthetics. With an overall height of 39.2 inches and a width of 58.95 inches, the circular shelving units provide ample space for storage. Each unit has a diameter of 19.6 inches, with a 0.78-inch thickness for durability, and 3.93 inches of spacing between the shelves to accommodate a variety of books and decorative items. This balanced design maximizes space while maintaining a sleek, modern look.</p>
            </div>
            <div className="details">
              <p>The process of making the bookshelf began with cutting the circular frames using a CNC machine. I then cut and assembled rods to hold the structure in place, creating the basic framework. Using flexible ply, I carefully wrapped it around the circular frames and secured it with nails. Once the structure was complete, I used a sanding machine and sandpaper to smooth the surface. After that, I applied a primer to prepare the wood for finishing, followed by a metallic copper paint to give it the final aesthetic appeal. This process ensured a sturdy and visually striking bookshelf.</p>
            </div>
            <div className="details">
              <p>This bookshelf is designed as a DIY modular concept. It comes with four cylindrical shelves and two stoppers to prevent the cylinder from rolling. Depending on the space available, users can customize it by adding more shelves as needed. The versatility of this design allows for multiple uses – you can use some shelves for storing books, others as a cozy spot to rest and read, or even as a seat. That’s why it’s called the "Infinity Shelf," offering limitless possibilities for customization and use.</p>
            </div>
            <div className="details">
              <p>The bookshelf design will undergo future refinements. Currently, the tray where the books are placed is static, but it will be upgraded to a sliding mechanism, allowing users to easily sit and slide the tray to pick a book. Additionally, book holders will be added to the tray itself to prevent the books from falling when someone is sliding.</p>
            </div>
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

export default P2ScrollText;

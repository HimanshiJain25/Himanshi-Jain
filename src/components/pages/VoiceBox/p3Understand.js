import React from "react";
import image1 from '../../Assets/Project3/understandPart/understand 1.png';
import image2 from '../../Assets/Project3/understandPart/understand 2.png';
import '../../../App.css';

const UnderstandPart = () => {
  return (
    <div className="understand-container">
      <h1>About Project</h1>
      <p>
        Connection in Elders was the topic we chose. Here we researched the different aspects of connections of elderly with same and other age groups, social media, financial from different perspectives such as location and class.
      </p>

      <div className="understand-images-grid">
        <img src={image1} alt="Understand Image 1" className="understand-grid-image" />
        <img src={image2} alt="Understand Image 2" className="understand-grid-image" />
      </div>
    </div>
  );
};

export default UnderstandPart;

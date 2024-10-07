import React from "react";
import image1 from '../../Assets/Project3/ideatePart/ideation 1.png';
import image2 from '../../Assets/Project3/ideatePart/ideation 2.png';
import image3 from '../../Assets/Project3/ideatePart/ideation 3.png';
import image4 from '../../Assets/Project3/ideatePart/ideation 4.png';
import image5 from '../../Assets/Project3/ideatePart/ideation 5.png';
import image6 from '../../Assets/Project3/ideatePart/ideation 6.png';
import image7 from '../../Assets/Project3/ideatePart/ideation 7.png';
import image8 from '../../Assets/Project3/ideatePart/ideation 8.png';


const IdeatePart = () => {
    return (
        <div className="ideatePart-container">
            <h1>Ideation</h1>

            <div className="ideatePart-images-grid ">
                <img src={image1} className="ideatePart-grid-image" />
                <img src={image2} className="ideatePart-grid-image" />
                <img src={image3} className="ideatePart-grid-image" />
                <img src={image4} className="ideatePart-grid-image" />
                <img src={image5} className="ideatePart-grid-image" />
                <img src={image6} className="ideatePart-grid-image" />
                <img src={image7} className="ideatePart-grid-image" />
                <img src={image8} className="ideatePart-grid-image" />
            </div>
        </div>
    );
};

export default IdeatePart;
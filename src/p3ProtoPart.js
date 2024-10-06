import React from "react";
import image1 from './Assets/Project3/protoPart/proto 1.png';
import image2 from './Assets/Project3/protoPart/proto 2.png';
import image3 from './Assets/Project3/protoPart/proto 3.png';
import image4 from './Assets/Project3/protoPart/proto 4.png';
import image5 from './Assets/Project3/protoPart/proto 5.png';
import image6 from './Assets/Project3/protoPart/proto 6.png';
import image7 from './Assets/Project3/protoPart/proto 7.png';
import image8 from './Assets/Project3/protoPart/proto 8.png';

const ProtoPart = () =>{
    return (
        <div className="prototype-container">
            <h1>Design / Prototype</h1>

            <div className="prototype-images-grid">
                <img src={image1} className="prototype-grid-image"/>
                <img src={image2} className="prototype-grid-image"/>
                <img src={image3} className="prototype-grid-image"/>
                <img src={image4} className="prototype-grid-image"/>
                <img src={image5} className="prototype-grid-image"/>
                <img src={image6} className="prototype-grid-image"/>
                <img src={image7} className="prototype-grid-image"/>
                <img src={image8} className="prototype-grid-image"/>
            </div>
        </div>
    );
};

export default ProtoPart;
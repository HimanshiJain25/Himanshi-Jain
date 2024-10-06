import React from "react";
import sImage1 from './Assets/Project3/secondaryPart/secondary research 1.png';
import sImage2 from './Assets/Project3/secondaryPart/secondary research 2.png';
import sImage3 from './Assets/Project3/secondaryPart/secondary research 3.png';
import sImage4 from './Assets/Project3/secondaryPart/secondary reserach 4.png';
import sImage5 from './Assets/Project3/secondaryPart/secondary reserach 5.png';
import sImage6 from './Assets/Project3/secondaryPart/secondary reserach 6.png';
import sImage7 from './Assets/Project3/secondaryPart/secondary research 7.png';

const SecondaryPart = () => {
    return (
        <div className="secondaryPart-container">
            <h1>Secondary Research</h1>

            <div className="secondary-images-grid">
                <img src={sImage1} className="secondary-grid-image" />
                <img src={sImage2} className="secondary-grid-image" />
                <img src={sImage3} className="secondary-grid-image" />
                <img src={sImage4} className="secondary-grid-image" />
                <img src={sImage5} className="secondary-grid-image" />
                <img src={sImage6} className="secondary-grid-image" />
                <img src={sImage7} className="secondary-grid-image" />
            </div>
        </div>
    );
};

export default SecondaryPart;
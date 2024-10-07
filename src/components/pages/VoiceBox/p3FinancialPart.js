import React from "react";
import image1 from '../../Assets/Project3/financialPart/fp1.png';
import image2 from '../../Assets/Project3/financialPart/fp2.png';
import image3 from '../../Assets/Project3/financialPart/fp3.png';
import image4 from '../../Assets/Project3/financialPart/fp4.png';
import image5 from '../../Assets/Project3/financialPart/fp5.png';
import image6 from '../../Assets/Project3/financialPart/fp6.png';
import image7 from '../../Assets/Project3/financialPart/fp7.png';
import image8 from '../../Assets/Project3/financialPart/fp8.png';
import image9 from '../../Assets/Project3/financialPart/fp9.png';
import image10 from '../../Assets/Project3/financialPart/fp10.png';
import image11 from '../../Assets/Project3/financialPart/fp11.png';

const FinancialPart = () => {
    return (
        <div className="financialPart-container">
            <h1>Financial Planning</h1>

            <div className="financialPart-images-grid">
                <img src={image1} className="financialPart-grid-image"/>
                <img src={image2} className="financialPart-grid-image"/>
                <img src={image3} className="financialPart-grid-image"/>
                <img src={image4} className="financialPart-grid-image"/>
                <img src={image5} className="financialPart-grid-image"/>
                <img src={image6} className="financialPart-grid-image"/>
                <img src={image7} className="financialPart-grid-image"/>
                <img src={image8} className="financialPart-grid-image"/>
                <img src={image9} className="financialPart-grid-image"/>
                <img src={image10} className="financialPart-grid-image"/>
                <img src={image11} className="financialPart-grid-image"/>
            </div>
        </div>
    );
};

export default FinancialPart;
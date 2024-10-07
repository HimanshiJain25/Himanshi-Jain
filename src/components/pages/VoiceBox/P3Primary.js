import React from "react";
import pImage1 from '../../Assets/Project3/PrimaryPart/primary research 1.png';
import pImage2 from '../../Assets/Project3/PrimaryPart/primary research 2.png';
import pImage3 from '../../Assets/Project3/PrimaryPart/primary research 3.png';
import pImage4 from '../../Assets/Project3/PrimaryPart/primary research 4.png';
import pImage5 from '../../Assets/Project3/PrimaryPart/primary research 5.png';
import pImage6 from '../../Assets/Project3/PrimaryPart/primary research 6.png';
import pImage7 from '../../Assets/Project3/PrimaryPart/primary research 7.png';
import pImage8 from '../../Assets/Project3/PrimaryPart/primary research 8.png';
import pImage9 from '../../Assets/Project3/PrimaryPart/primary research 9.png';
import pImage10 from '../../Assets/Project3/PrimaryPart/primary research 10.png';
import pImage11 from '../../Assets/Project3/PrimaryPart/primary research 11.png';
import pImage12 from '../../Assets/Project3/PrimaryPart/primary research 12.png';
import pImage13 from '../../Assets/Project3/PrimaryPart/primary research 13.png';
import pImage14 from '../../Assets/Project3/PrimaryPart/primary research 14.png';
import pImage15 from '../../Assets/Project3/PrimaryPart/primary research 15.png';
import pImage16 from '../../Assets/Project3/PrimaryPart/primary research 16.png';
import pImage17 from '../../Assets/Project3/PrimaryPart/primary research 17.png';
import pImage18 from '../../Assets/Project3/PrimaryPart/primary research 18.png';
import pImage19 from '../../Assets/Project3/PrimaryPart/primary research 19.png';
import pImage20 from '../../Assets/Project3/PrimaryPart/primary research 20.png';

const PrimaryPart = () => {
    return (
        <div className="Primary-container">
            <h1>Primary Research</h1>

            <div className="Primary-images-grid">
            <img src={pImage1} className="Primary-grid-image" />
            <img src={pImage2} className="Primary-grid-image" />
            <img src={pImage3} className="Primary-grid-image" />
            <img src={pImage4} className="Primary-grid-image" />
            </div>

            <h1>User Personna</h1>
            <div className="Primary-images-grid">
            <img src={pImage5} className="Primary-grid-image" />
            <img src={pImage6} className="Primary-grid-image" />
            <img src={pImage7} className="Primary-grid-image" />
            <img src={pImage8} className="Primary-grid-image" />
            </div>

            <h1>Photo Journaling</h1>
            <div className="Primary-images-grid">
            <img src={pImage9} className="Primary-grid-image" />
            <img src={pImage10} className="Primary-grid-image" />
            <img src={pImage11} className="Primary-grid-image" />
            <img src={pImage12} className="Primary-grid-image" />
            <img src={pImage13} className="Primary-grid-image" />
            <img src={pImage14} className="Primary-grid-image" />
            <img src={pImage15} className="Primary-grid-image" />
            <img src={pImage16} className="Primary-grid-image" />
            <img src={pImage17} className="Primary-grid-image" />
            <img src={pImage18} className="Primary-grid-image" />
            </div>

            <h1>User Journey</h1>
            <div className="Primary-images-grid">
            <img src={pImage19} className="Primary-grid-image" />
            <img src={pImage20} className="Primary-grid-image" />
            </div>
        </div>
    );
};

export default PrimaryPart;
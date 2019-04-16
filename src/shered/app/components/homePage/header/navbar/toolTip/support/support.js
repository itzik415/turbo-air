import React from 'react';
import { Link } from 'react-router-dom';

const supportToolTip = (props) => {
    return (
        <div className="tooltip" style={props.translateValue}>  
            <div className="tooltip-cube"></div> 

            <Link id="Link" to="/contact">
                <div className="tooltip-first">
                    <i id="toolTip-icons" className="fas fa-headset"></i>
                    <div className="tooltip-first-div">
                        <p className="tooltip-first-div-title">צור קשר</p>
                        <p className="tooltip-first-div-text">אנו תמיד נשמח לעמוד לרשותך</p>
                    </div>
                </div>
            </Link>              

            <Link id="Link" to="/authorized-stores">
                <div className="tooltip-second">
                    <i id="toolTip-icons" className="fas fa-store"></i>
                    <div className="tooltip-second-div">
                        <p className="tooltip-second-div-title">משווקים מורשים</p>
                        <p className="tooltip-second-div-text">בדוק שאתה אכן קונה מלקוח מורשה</p>
                    </div>
                </div>
            </Link>
            
        </div>
    );
}

export default supportToolTip;
import React from 'react';
import { Link } from 'react-router-dom';

const aboutToolTip = (props) => {
    return (
        <div className="btn-group" style={{transform: props.scale}}>
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                אודותינו <i id="arrow-down" className="fas fa-angle-down"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-menu-square"></div>
                <Link id="Link" to="/about-shaoulian"><div className="tooltip-first">
                    <i id="toolTip-icons" className="fas fa-power-off"></i>
                    <div className="tooltip-first-div">
                        <p className="tooltip-first-div-title">חברת שאוליאן</p>
                        <p className="tooltip-first-div-text">תקציר אודות החברה</p>
                    </div>
                </div></Link>
                <Link id="Link" to="/about-turboair"><div className="tooltip-second">
                    <i id="toolTip-icons" className="fas fa-wind"></i>
                    <div className="tooltip-second-div">
                        <p className="tooltip-second-div-title">מותג turboair</p>
                        <p className="tooltip-second-div-text">תקציר אודות המותג האיטלקי</p>
                    </div>
                </div></Link> 
            </div>
        </div>
    );
}

export default aboutToolTip;
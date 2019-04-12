import React from 'react';
import { Link } from 'react-router-dom';

const aboutToolTip = (props) => {
    return (
        <div className="tooltip" style={props.translateValue}>  
            <div className="tooltip-cube"></div> 
            <Link id="Link" to="/"><div className="tooltip-first">
                <i id="toolTip-icons" id="toolTip-icons" class="fas fa-dragon"></i>
                <div className="tooltip-first-div">
                    <p className="tooltip-first-div-title">עוצמת שאיבה</p>
                    <p className="tooltip-first-div-text">בחירת עוצמת השאיבה הנכונה לכם</p>
                </div>
            </div></Link>
            <Link id="Link" to="/"><div className="tooltip-second">
                <i id="toolTip-icons" class="fas fa-toolbox"></i>
                <div className="tooltip-second-div">
                    <p className="tooltip-second-div-title">התקנה</p>
                    <p className="tooltip-second-div-text">כיצד להתקין את המוצר בצורה נכונה</p>
                </div>
            </div></Link>
            <Link id="Link" to="/"><div className="tooltip-third">
                <i id="toolTip-icons" className="fas fa-wind"></i>
                <div className="tooltip-second-div">
                    <p className="tooltip-second-div-title">שיטת שאיבה</p>
                    <p className="tooltip-second-div-text">שיטת השאיבה המותאת לצרכיכם בצורה הטובה ביותר</p>
                </div>
            </div></Link>
            <Link id="Link" to="/"><div className="tooltip-fourth">
                <i id="toolTip-icons" class="fab fa-buffer"></i>
                <div className="tooltip-second-div">
                    <p className="tooltip-second-div-title">פילטר</p>
                    <p className="tooltip-second-div-text">כיצד לנהוג בחוכמה עם פילטר קולט האדים</p>
                </div>
            </div></Link>
            <Link id="Link" to="/"><div className="tooltip-fifth">
                <i id="toolTip-icons" class="fas fa-exclamation-circle"></i>
                <div className="tooltip-second-div">
                    <p className="tooltip-second-div-title">זהירות</p>
                    <p className="tooltip-second-div-text">כיצד אנו דואגים ליצירת מוצר בטוח</p>
                </div>
            </div></Link>
        </div>
    );
}

export default aboutToolTip;
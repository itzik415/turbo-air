import React from 'react';
import { Link } from 'react-router-dom';

const detailsToolTip = (props) => {
    return (
        <div className="btn-group" style={{transform: props.scale}}>
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                מידע נוסף <i id="arrow-down" className="fas fa-angle-down"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-menu-square"></div>
                <Link id="Link" to="/details/airflow-power"><div className="tooltip-first">
                    <i id="toolTip-icons" id="toolTip-icons" className="fas fa-dragon"></i>
                    <div className="tooltip-first-div">
                        <p className="tooltip-first-div-title">עוצמת שאיבה</p>
                        <p className="tooltip-first-div-text">בחירת עוצמת השאיבה הנכונה לכם</p>
                    </div>
                </div></Link>
                <Link id="Link" to="/details/installation"><div className="tooltip-second">
                    <i id="toolTip-icons" className="fas fa-toolbox"></i>
                    <div className="tooltip-second-div">
                        <p className="tooltip-second-div-title">התקנה</p>
                        <p className="tooltip-second-div-text">כיצד להתקין את המוצר בצורה נכונה</p>
                    </div>
                </div></Link>
                <Link id="Link" to="/details/airflow-method"><div className="tooltip-third">
                    <i id="toolTip-icons" className="fas fa-wind"></i>
                    <div className="tooltip-second-div">
                        <p className="tooltip-second-div-title">שיטת שאיבה</p>
                        <p className="tooltip-second-div-text">שיטת השאיבה המותאת לצרכיכם בצורה הטובה ביותר</p>
                    </div>
                </div></Link>
                <Link id="Link" to="/details/filtration"><div className="tooltip-fourth">
                    <i id="toolTip-icons" className="fab fa-buffer"></i>
                    <div className="tooltip-second-div">
                        <p className="tooltip-second-div-title">פילטר</p>
                        <p className="tooltip-second-div-text">כיצד לנהוג בחוכמה עם פילטר קולט האדים</p>
                    </div>
                </div></Link>
                <Link id="Link" to="/details/safety"><div className="tooltip-fifth">
                    <i id="toolTip-icons" className="fas fa-exclamation-circle"></i>
                    <div className="tooltip-second-div">
                        <p className="tooltip-second-div-title">זהירות</p>
                        <p className="tooltip-second-div-text">כיצד אנו דואגים ליצירת מוצר בטוח</p>
                    </div>
                </div></Link>
            </div>
        </div>
    );
}

export default detailsToolTip;
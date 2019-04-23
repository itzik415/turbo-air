import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleResponsiveNavbar } from '../../../../../../../Redux/actions/responsiveNavbarReducer';

const detailsToolTip = (props) => {
    return (
        <div>
            <Link id="Link" onClick={ props.click } to="/details/airflow-power"><div className="tooltip2-first">
                <i id="toolTip-icons" id="toolTip-icons" className="fas fa-dragon"></i>
                <div className="tooltip2-first-div">
                    <p className="tooltip2-first-div-title">עוצמת שאיבה</p>
                    <p className="tooltip2-first-div-text">בחירת עוצמת השאיבה הנכונה לכם</p>
                </div>
            </div></Link>
            <Link id="Link" onClick={ props.click } to="/details/installation"><div className="tooltip2-second">
                <i id="toolTip-icons" className="fas fa-toolbox"></i>
                <div className="tooltip2-second-div">
                    <p className="tooltip2-second-div-title">התקנה</p>
                    <p className="tooltip2-second-div-text">כיצד להתקין את המוצר בצורה נכונה</p>
                </div>
            </div></Link>
            <Link id="Link" onClick={ props.click } to="/details/airflow-method"><div className="tooltip2-third">
                <i id="toolTip-icons" className="fas fa-wind"></i>
                <div className="tooltip2-second-div">
                    <p className="tooltip2-second-div-title">שיטת שאיבה</p>
                    <p className="tooltip2-second-div-text">שיטת השאיבה המותאת לצרכיכם בצורה הטובה ביותר</p>
                </div>
            </div></Link>
            <Link id="Link" onClick={ props.click } to="/details/filtration"><div className="tooltip2-fourth">
                <i id="toolTip-icons" className="fab fa-buffer"></i>
                <div className="tooltip2-second-div">
                    <p className="tooltip2-second-div-title">פילטר</p>
                    <p className="tooltip2-second-div-text">כיצד לנהוג בחוכמה עם פילטר קולט האדים</p>
                </div>
            </div></Link>
            <Link id="Link" onClick={ props.click } to="/details/safety"><div className="tooltip2-fifth">
                <i id="toolTip-icons" className="fas fa-exclamation-circle"></i>
                <div className="tooltip2-second-div">
                    <p className="tooltip2-second-div-title">זהירות</p>
                    <p className="tooltip2-second-div-text">כיצד אנו דואגים ליצירת מוצר בטוח</p>
                </div>
            </div></Link>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      click: () => dispatch(toggleResponsiveNavbar()),
    }
}

export default connect(null, mapDispatchToProps)(detailsToolTip);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleResponsiveNavbar } from '../../../../../../../Redux/actions/responsiveNavbarReducer';

const supportToolTip = (props) => {
    return (
        <div>
            <Link id="Link" onClick={ props.click } to="/contact">
                <div className="tooltip2-first">
                    <i id="toolTip-icons" className="fas fa-headset"></i>
                    <div className="tooltip2-first-div">
                        <p className="tooltip2-first-div-title">צור קשר</p>
                        <p className="tooltip2-first-div-text">אנו תמיד נשמח לעמוד לרשותך</p>
                    </div>
                </div>
            </Link>              

            <Link id="Link" onClick={ props.click } to="/authorized-stores">
                <div className="tooltip2-second">
                    <i id="toolTip-icons" className="fas fa-store"></i>
                    <div className="tooltip2-second-div">
                        <p className="tooltip2-second-div-title">משווקים מורשים</p>
                        <p className="tooltip2-second-div-text">בדוק שאתה אכן קונה מלקוח מורשה</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      click: () => dispatch(toggleResponsiveNavbar()),
    }
}

export default connect(null, mapDispatchToProps)(supportToolTip);
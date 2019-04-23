import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleResponsiveNavbar } from '../../../../../../../Redux/actions/responsiveNavbarReducer';

const aboutToolTip = (props) => {
    return (
        <div>
            <Link id="Link" onClick={ props.click } to="/about-shaoulian"><div className="tooltip2-first">
                <i id="toolTip-icons" className="fas fa-power-off"></i>
                <div className="tooltip2-first-div">
                    <p className="tooltip2-first-div-title">חברת שאוליאן</p>
                    <p className="tooltip2-first-div-text">תקציר אודות החברה</p>
                </div>
            </div></Link>
            <Link id="Link" onClick={ props.click } to="/about-turboair"><div className="tooltip2-second">
                <i id="toolTip-icons" className="fas fa-wind"></i>
                <div className="tooltip2-second-div">
                    <p className="tooltip2-second-div-title">מותג turboair</p>
                    <p className="tooltip2-second-div-text">תקציר אודות המותג האיטלקי</p>
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

export default connect(null, mapDispatchToProps)(aboutToolTip);
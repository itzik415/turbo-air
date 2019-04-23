import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleResponsiveNavbar } from '../../../../../Redux/actions/responsiveNavbarReducer';
import About from './toolTip/about/about';
import Details from './toolTip/details/details';
import Support from './toolTip/support/support';

const mainNav = (props) => {

    const style = {
        opacity: props.opacity,
        visibility: props.visibility,
        position: props.position
    }

    return (
        <div className="mainNav" style={style}>
            <div id="accordion">
                <div className="card border-0 my-5">
                    <div className="card-header border-0 p-0" id="headingOne">
                        <div className="card-header-button d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <p className="m-0">אודותינו</p>
                            <i id="responsiveNav-title-arrow-down" className="fas fa-angle-down"></i>
                        </div>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body px-0">
                            <About />
                        </div>
                    </div>
                </div>
                <div className="card border-0 my-5">
                    <div className="card-header border-0 p-0" id="headingTwo">
                        <div className="card-header-button d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <p className="m-0">מידע נוסף</p>
                            <i id="responsiveNav-title-arrow-down" className="fas fa-angle-down"></i>
                        </div>
                    </div>

                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body px-0">
                            <Details />
                        </div>
                    </div>
                </div>
                <div className="card border-0 my-5">
                    <div className="card-header border-0 p-0" id="headingThree">
                        <div className="card-header-button d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <p className="m-0">תמיכה</p>
                            <i id="responsiveNav-title-arrow-down" className="fas fa-angle-down"></i>
                        </div>
                    </div>

                    <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body px-0">
                            <Support />
                        </div>
                    </div>
                </div>
                <div className="mainNav-products">
                    <Link onClick={ props.click } to="/products" id="Link"><p>מוצרים</p></Link>
                </div> 
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        visibility: state.responsiveNavbarReducer.visibility,
        opacity: state.responsiveNavbarReducer.opacity,
        position: state.responsiveNavbarReducer.position,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(toggleResponsiveNavbar()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(mainNav);
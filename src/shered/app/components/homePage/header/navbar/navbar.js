import React from 'react';
import CartModal from './cart/cart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onClickOpenSearch } from '../../../../Redux/actions/searchFiled';
import AboutToolTip from './toolTip/about/about';
import DetailsToolTip from './toolTip/details/details';
import SupportToolTip from './toolTip/support/support';


const navbar = (props) => {
  return (
    <div className="navbar">  
        <div className="navbar-top">
            <div className="navbar-top-right">
                <div className="navbar-top-right-drop" style={{transform: props.transformScale}} onClick={props.click}>
                  <ion-icon name="search" id="search"></ion-icon>
                </div>
                <div className="navbar-top-right-drop" style={{transform: props.transformScale}}>
                  <span className="navbar-top-right-drop-quantity">7</span>
                  <CartModal display={props.scale}/>
                </div>
                <div className="navbar-top-right-drop" style={{transform: props.transformScale2}}>
                  <ion-icon name="close" id="close"></ion-icon>
                </div>
            </div>
            <div className="navbar-top-language">
                <p>HE</p>
                <img src="https://storage.googleapis.com/turboair-israel/general-images/israel-flag-icon-32.png" alt="דגל ארץ ישראל" />
            </div>
        </div>
        <div className="navbar-bottom">
          <div className="navbar-bottom-right">
              <div style={{transform: props.transformScale}} className="navbar-bottom-right-drop"><Link to="/products" id="Link" className="products-nav">מוצרים</Link></div>
              <AboutToolTip scale={props.transformScale}/>
              <DetailsToolTip scale={props.transformScale}/>
              <SupportToolTip scale={props.transformScale}/>
          </div>
          <Link id="Link" to="/"><div className="navbar-bottom-left">turboair</div></Link>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    transformScale: state.searchFiledReducer.transform0,
    transformScale2: state.searchFiledReducer.transform1,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(onClickOpenSearch()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(navbar);
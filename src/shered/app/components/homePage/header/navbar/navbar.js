import React, { Component } from 'react';
import Hamburger from './hamburger/hamburger';
import CartModal from './cart/cart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onClickOpenSearch } from '../../../../Redux/actions/searchFiled';
import AboutToolTip from './toolTip/about/about';
import DetailsToolTip from './toolTip/details/details';
import SupportToolTip from './toolTip/support/support';


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">  
          <div className="navbar__inner">
            <Hamburger />
            <div className="navbar__inner-right">
                <div className="navbar__inner-right-drop" style={{transform: this.props.transformScale}} onClick={this.props.click}>
                  <ion-icon name="search" id="search"></ion-icon>
                </div>
                <div className="navbar__inner-right-drop" style={{transform: this.props.transformScale}}>
                  <span className="navbar__inner-right-drop-quantity">0</span>
                  <CartModal display={this.props.scale}/>
                </div>
                <p className="navbar__inner-right-drop" style={{transform: this.props.transformScale2}}>
                  <ion-icon name="close" id="close"></ion-icon>
                </p>
            </div>
            <div className="navbar__inner-middle">
                <AboutToolTip scale={this.props.transformScale}/>
                <DetailsToolTip scale={this.props.transformScale}/>
                <div style={{transform: this.props.transformScale}} className="navbar__inner-middle-drop"><Link to="/products" id="Link" className="products-nav">מוצרים</Link></div>
                <SupportToolTip scale={this.props.transformScale}/>
            </div>
            <Link id="Link" to="/"><div className="navbar__inner-left">turboair</div></Link>
          </div>
      </div>
    );
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
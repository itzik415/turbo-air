import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartModal from '../navbar/cart/cart';
import { Link } from 'react-router-dom';
import MainNav from './mainNav/mainNav'
import { toggleResponsiveNavbar } from '../../../../Redux/actions/responsiveNavbarReducer';
import { onClickOpenSearch } from '../../../../Redux/actions/searchFiled';

const responsiveNavbar = (props) => {
    return (
        <div className="responsiveNavbar" style={{backgroundColor: props.bgcolor, position: props.position}}>  
            <div className="responsiveNavbar-headerTop">
                <div className="responsiveNavbar-headerTop-drop" style={{transform: props.transformScale}} onClick={props.click2}>
                  <ion-icon name="search" id="search"></ion-icon>
                </div>
                <div className="responsiveNavbar-headerTop-drop" style={{transform: props.transformScale}}>
                  <span className="responsiveNavbar-headerTop-drop-quantity">7</span>
                  <CartModal display={props.scale}/>
                </div>
                <div className="responsiveNavbar-headerTop-drop" style={{transform: props.transformScale2}}>
                  <ion-icon name="close" id="close-responsive-search"></ion-icon>
                </div>
                <p className="responsiveNavbar-headerTop-support">צור קשר</p>
                <div className="responsiveNavbar-headerTop-language">
                    <p>HE</p>
                    <img src="https://storage.googleapis.com/turboair-israel/general-images/israel-flag-icon-32.png" alt="דגל ארץ ישראל" />
                </div>
            </div>
            <div className="responsiveNavbar-headerBottom">
                <ion-icon id="menu-icon" onClick={props.click} name="menu"></ion-icon> 
                <Link id="Link" to="/"><div className="responsiveNavbar-headerBottom-logo">turboair</div></Link>
                <MainNav />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
  return {
        bgcolor: state.responsiveNavbarReducer.backgroundColor,
        position: state.responsiveNavbarReducer.position,
        transformScale: state.searchFiledReducer.transform0,
        transformScale2: state.searchFiledReducer.transform1,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(toggleResponsiveNavbar()),
    click2: () => dispatch(onClickOpenSearch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(responsiveNavbar);
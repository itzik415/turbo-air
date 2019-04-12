import React, { Component } from 'react';
import ToolTip from './toolTip/toolTip';
import Hamburger from './hamburger/hamburger';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onClickOpenSearch } from '../../../../Redux/actions/searchFiled';

class navbar extends Component {
  constructor() {
    super();
    this.state = {
      translate: `translateX(60px)`,
      visibility: 'hidden',
      transition: '0.3s',
      opacity: '0',
    }
  }

  onMouseEnter(e) {
    if(e.target.id === 'nav-1') this.setState({translate: 'translateX(105px)'})
    if(e.target.id === 'nav-2') this.setState({translate: 'translateX(47px)'})
    if(e.target.id === 'nav-3') this.setState({translate: 'translateX(-135px)'})
    if(e.target.id === 'nav-4') this.setState({translate: 'translateX(-270px)'})
    this.setState({visibility: 'visible', opacity: '1'})
  }

  onMouseLeave(e) {
    this.setState({visibility: 'hidden', opacity: '0'})
  }

  render() {
    const style3 = {
      transform: this.state.translate,
      visibility: this.state.visibility,
      transition: this.state.transition,
      opacity: this.state.opacity
    }

    return (
      <div className="navbar">  
          <div className="navbar__inner">
            <Hamburger />
            <div className="navbar__inner-right">
                <div className="navbar__inner-right-drop" style={{transform: this.props.transformScale}} onClick={this.props.click}>
                  <ion-icon name="search" id="search"></ion-icon>
                </div>
                <p className="navbar__inner-right-drop" style={{transform: this.props.transformScale}}>
                  <span className="navbar__inner-right-drop-quantity">0</span>
                  <ion-icon name="cart" id="cart"></ion-icon>
                </p>
                <p className="navbar__inner-right-drop" style={{transform: this.props.transformScale2}}>
                  <ion-icon name="close" id="close"></ion-icon>
                </p>
            </div>
            <div className="navbar__inner-middle" onMouseLeave={(e) => this.onMouseLeave(e)}>
                <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.props.transformScale}} id="nav-1" className="navbar__inner-middle-drop">אודותינו</div>
                <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.props.transformScale}} id="nav-2" className="navbar__inner-middle-drop">מידע נוסף</div>
                <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.props.transformScale}} id="nav-3" className="navbar__inner-middle-drop"><Link to="/products" id="Link">מוצרים</Link></div>
                <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.props.transformScale}} id="nav-4" className="navbar__inner-middle-drop">תמיכה</div>
                <ToolTip translateValue={style3} onMouseLeave={(e) => this.onMouseLeave(e)}/>
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
    transformScale2: state.searchFiledReducer.transform1
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch(onClickOpenSearch())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(navbar);
import React, { Component } from 'react';
import ToolTip from './toolTip/tooTip';
import Hamburger from './hamburger/hamburger';

class navbar extends Component {
  constructor() {
    super();
    this.state = {
      transform: `scale(1)`,
      transform2: `scale(0)`,
      transition: '0.3s',
      translate: `translateX(60px)`,
      visibility: 'hidden',
      opacity: '0'
    }
  }

  onClickSearch() {
    if(this.state.transform === 'scale(1)'){
      this.setState({transform: 'scale(0)'})
      this.setState({transform2: 'scale(1)'})
    }else {
      this.setState({transform: 'scale(1)'})
      this.setState({transform2: 'scale(0)'})
    }
  }

  onMouseEnter(e) {
    if(e.target.id === 'nav-1') this.setState({translate: 'translateX(65px)'})
    if(e.target.id === 'nav-2') this.setState({translate: 'translateX(-70px)'})
    if(e.target.id === 'nav-3') this.setState({translate: 'translateX(-200px)'})
    if(e.target.id === 'nav-4') this.setState({translate: 'translateX(-330px)'})
    this.setState({visibility: 'visible', opacity: '1'})
  }

  onMouseLeave(e) {
    this.setState({visibility: 'hidden', opacity: '0'})
  }

  render() {
    const style = {
      transform: this.state.transform,
      transition: this.state.transition,
    }
    
    const style2 = {
      transform: this.state.transform2,
      transition: this.state.transition,
    }

    const style3 = {
      transform: this.state.translate,
      visibility: this.state.visibility,
      opacity: this.state.opacity
    }

    return (
      <div className="navbar">   
          <div className="navbar__inner">
              <Hamburger />
              <div className="navbar__inner-right">
                  <p style={style} onClick={() => this.onClickSearch()} className="navbar__inner-right-drop">
                    <ion-icon name="search" id="search"></ion-icon>
                  </p>
                  <p style={style} className="navbar__inner-right-drop">
                    <span className="navbar__inner-right-drop-quantity">0</span>
                    <ion-icon name="cart" id="cart"></ion-icon>
                  </p>
                  <p style={style2} onClick={() => this.onClickSearch()} className="navbar__inner-right-drop">
                    <ion-icon name="close" id="close"></ion-icon>
                  </p>
              </div>
              <div style={style2} className="navbar__inner-searchFiled">
                  <p className="navbar__inner-right-drop "><ion-icon name="search" id="search2"></ion-icon></p>
                  <input name="search-filed" placeholder="חיפוש..." type="text" />
              </div>
              <div className="navbar__inner-middle" onMouseLeave={(e) => this.onMouseLeave(e)}>
                  <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.state.transform}} id="nav-1" className="navbar__inner-middle-drop">מוצרים</div>
                  <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.state.transform}} id="nav-2" className="navbar__inner-middle-drop">מוצרים</div>
                  <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.state.transform}} id="nav-3" className="navbar__inner-middle-drop">אודותינו</div>
                  <div onMouseEnter={(e) => this.onMouseEnter(e)} style={{transform: this.state.transform}} id="nav-4" className="navbar__inner-middle-drop">תמיכה</div>
                  <ToolTip translateValue={style3} onMouseLeave={(e) => this.onMouseLeave(e)}/>
              </div>
              <div className="navbar__inner-left">turboair</div>
          </div>
      </div>
    );
  }
}

export default navbar;

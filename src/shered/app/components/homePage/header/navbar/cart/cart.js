import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CartModal = (props) => {
    return (
        <div style={{transform: `scale(${props.display})`}}>
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <ion-icon name="cart" id="cart"></ion-icon>
            </button>
            <div className="cartModal dropdown-menu">
                <div className="cartModal-container">
                    <img src="http://www.turboair.com/row/wp-content/uploads/sites/9/2015/10/Norma02_bronzo_90_scont.jpg" alt="קולט אדים"/>
                    <div className="cartModal-container-details">
                        <p className="cartModal-container-details-model">Sertosa NH/X/60</p>
                        <p className="cartModal-container-details-quantity">כמות: 2</p>
                        <p className="cartModal-container-details-price">₪3942.00</p>
                    </div>
                    <ion-icon id="cartModal-close" name="close"></ion-icon>
                </div>
                <div className="cartModal-total">
                    <p className="cartModal-total-title">סה״כ</p>
                    <p className="cartModal-total-price">₪1000.00</p>
                </div>
                <div className="cartModal-buttons">
                    <Link id="Link" to="/"><p>לעגלת הקניות <ion-icon name="arrow-forward"></ion-icon></p></Link>
                    <Link id="Link" to="/"><button>לתשלום</button></Link>
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(CartModal);
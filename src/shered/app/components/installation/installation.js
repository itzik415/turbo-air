import React, { Component } from 'react';
// import { findAuthorizedStores } from '../../Redux/actions/authorizedStores';
import { connect } from 'react-redux';

class Installation extends Component {
    render() {
        return (
            <div className="installation">
                <h1 className="installation-title">התקנה</h1>
                <h1 className="installation-text">כיצד להתקין את קולט האדים שלכם בצורה הנכונה ביותר</h1>
                <img src="https://storage.googleapis.com/turboair-israel/details/details-1.jpg" alt="שיטות שאיבת אוויר" />

                <div className="stripes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(Installation);
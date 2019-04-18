import React, { Component } from 'react';
// import { findAuthorizedStores } from '../../Redux/actions/authorizedStores';
import { connect } from 'react-redux';

class Filtration extends Component {
    render() {
        return (
            <div className="filtration">
                <h1 className="filtration-title">פילטר</h1>
                <h1 className="filtration-text">כיצד לנהוג בחוכמה עם פילטר קולט האדים</h1>
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

export default connect(null, null)(Filtration);
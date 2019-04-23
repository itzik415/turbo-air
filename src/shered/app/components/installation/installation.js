import React, { Component } from 'react';
// import { findAuthorizedStores } from '../../Redux/actions/authorizedStores';
import { connect } from 'react-redux';

class Installation extends Component {
    render() {
        return (
            <div className="installation">
                <h1 className="installation-title">התקנה</h1>
                <h1 className="installation-text">כיצד להתקין את קולט האדים שלכם בצורה הנכונה ביותר</h1>
                <p>
                    התקנה נכונה חשובה כדי להבטיח כי קולט האדים עובד במיטבו. יש לעקוב אחר הצעדים המתוארים בחוברת ההדרכה של המוצר. בנוסף, הקפד להתקין את קולט האדים במרחק המינימלי מהכיריים שברשותך.
                </p>
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
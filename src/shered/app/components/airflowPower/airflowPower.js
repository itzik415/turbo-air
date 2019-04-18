import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirflowPower extends Component {
    render() {
        return (
            <div className="airflowPower">
                <h1 className="airflowPower-title">עוצמת השאיבה</h1>
                <h1 className="airflowPower-text">בחירת עוצמת השאיבה הנכונה לכם</h1>
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

export default connect(null, null)(AirflowPower);
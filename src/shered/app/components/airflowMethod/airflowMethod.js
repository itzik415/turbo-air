import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirflowMethod extends Component {
    render() {
        return (
            <div className="airflowMethod">
                <h1 className="airflowMethod-title">שיטת השאיבה</h1>
                <h1 className="airflowMethod-text">שיטת השאיבה המותאמת לצרכיכם בצורה הטובה ביותר</h1>
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


export default connect(null, null)(AirflowMethod);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Safety extends Component {
    render() {
        return (
            <div className="safety">
                <h1 className="safety-title">משני זהירות</h1>
                <h1 className="safety-text">כיצד אנו דואגים למוצר בטוח</h1>
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

export default connect(null, null)(Safety);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Safety extends Component {
    render() {
        return (
            <div className="safety">
                <h1 className="safety-title">משני זהירות</h1>
                <h1 className="safety-text">כיצד אנו דואגים למוצר בטוח</h1>
                <p>
                במהלך תהליך הייצור, עוברים קולטי האדים סדרה קפדנית של יותר מ 50 בדיקות ומבחנים כדי להבטיח את הבטיחות והפונקציונליות המירבית של המוצרים.
                כל החומרים, חלקים חשמליים ורכיבים אלקטרוניים המרכיבים את קולטי האדים נבדקים שוב ושוב על מנת להבטיח רמת בטיחות גבוה בתקנים המחמירים ביותר.
                כל המוצרים של חברת Turboair עושים שימוש בקצוות חלקים, זכוכית מחוסמת ובפלסטיק מגולוון.
                </p>
                <img src="https://images.unsplash.com/photo-1533625655932-73abd53515b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="בטיחות"/>
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
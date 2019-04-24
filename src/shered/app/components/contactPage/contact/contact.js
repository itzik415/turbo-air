import React from 'react';
// import { connect } from 'react-redux';
import { handleSubmit } from '../../../Redux/actions/contactForm';

const contact = () => {
    return (
        <form className="contact" onSubmit={handleSubmit}>
            <div className="contact-firstName">
                <input 
                    className="contact-firstName-input" 
                    id="first-name"
                    type="text" 
                    name="firstName" 
                    placeholder="ישראל"
                    required/>
                <label htmlFor="first-name" className="contact-firstName-text">שם מלא</label>
            </div>
            <div className="contact-familyName">
                <input 
                    className="contact-familyName-input" 
                    id="last-name"
                    type="text" 
                    name="lastName" 
                    placeholder="ישראלי"
                    required/>
                <label htmlFor="last-name" className="contact-familyName-text">שם משפחה</label>
            </div>
            <div className="contact-email">
                <input 
                    className="contact-email-input" 
                    id="email"
                    type="email" 
                    name="email" 
                    placeholder="israel@example.com"/>
                <label htmlFor="email" className="contact-email-text">דואר אלקטרוני</label>
            </div>
            <div className="contact-phone">
                <input 
                    className="contact-phone-input"
                    id="phone"
                    type="text" 
                    name="phonenumber" 
                    placeholder="0555-555555"
                    required/>
                <label htmlFor="phone" className="contact-phone-text">טלפון</label>
            </div>
            <div className="contact-textarea">
                <textarea 
                    className="contact-text-textarea"
                    id="textarea"  
                    name="message" 
                    required></textarea>
                <label htmlFor="textarea" className="contact-textarea-text">פרטי הפניה<br /><span>אנא נסו לפרט בצורה הטובה ביותר את פרטי הפניה</span></label>
            </div>
            {/* <div className="contact-message alert alert-success" style={{display: 'none'}}role='alert'>!ההודעה נשלחה בהצלחה</div>
            <div className="contact-message2 alert alert-danger" style={{display: 'none'}}role='alert'>שליחת ההודעה נכלשה</div> */}
            <div className="contact-submit">
                <button type="submit">שלח </button>
            </div>
        </form>
    )
}

export default contact;

import React from 'react';
import OfficeDetails from './officeDetails/officeDetails';
import StoreDetails from './storeDetails/storeDetails';
import Contact from './contact/contact';

const contactPage = () => {
    return (
    <div className="contactPage">
        <div className="contactPage-top">
            <h2 className="contactPage-top-title">צרו עימנו קשר</h2>
            <h4 className="contactPage-top-second">בכל בעיה פניה או בקשה אנו תמיד נשמח לעמוד לרשותכם</h4>
        </div>
        <div className="contactPage-main">
            <Contact />
            <div className="contactPage-main-location"> 
                <OfficeDetails />
                <StoreDetails />
            </div>
        </div>  
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

export default contactPage;
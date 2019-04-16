import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className="footer">
            <hr className="footer-line"/>
            <div className="footer__section">
                <div className="footer__section-navigation">
                    <h1 className="footer__section-navigation-title">מפת האתר</h1>
                    <Link id="Link" className="footer__section-navigation-mainPage" to="/"><p>ראשי</p></Link>
                    <Link id="Link" className="footer__section-navigation-products" to="/products"><p>מוצרים</p></Link>
                    {/* <Link id="Link" className="footer__section-navigation-recipes" to="/recipes"><p>מתכונים</p></Link> */}
                    <Link id="Link" className="footer__section-navigation-authorizedSellers" to="/authorized-stores"><p>משווקים מורשים</p></Link>
                    <Link id="Link" className="footer__section-navigation-about" to="/about"><p>אודותינו</p></Link>
                    <Link id="Link" className="footer__section-navigation-contact" to="/contact"><p>צור קשר</p></Link>
                </div>
                <div className="footer__section-websites">
                    <h1 className="footer__section-websites-title">אתרי החברה</h1>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.shaoulian.co.il" target="_blank"> shaoulian.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.lofra.co.il" target="_blank"> lofra.co.il </a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.sol.co.il" target="_blank">sol.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.hamiltonbeach.co.il" target="_blank">hamiltonbeach.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.valera.co.il" target="_blank">Valera.co.il </a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.ufesa.co.il" target="_blank">ufesa.co.il</a>
                    <a className="footer__section-websites-brandName" rel="noopener noreferrer" href="http://www.boohr.co.il" target="_blank">Boohr.co.il</a>
                </div>
                <div className="footer__section-companyDetails">
                    <h1 className="footer__section-companyDetails-title">מידע נוסף</h1>
                    <p className="footer__section-companyDetails-phone"><ion-icon id="footer-details-icon" name="call"></ion-icon> 09-7409835/6</p>
                    <p className="footer__section-companyDetails-address"><ion-icon id="footer-details-icon" name="map"></ion-icon> הרימון 3, אבן יהודה, ישראל</p>
                    <p className="footer__section-companyDetails-email"><ion-icon id="footer-details-icon" name="mail"></ion-icon> sherut@shaoulian.co.il</p>
                    <p className="footer__section-companyDetails-workingHours"><ion-icon id="footer-details-icon" name="time"></ion-icon> א׳ - ה׳ בין השעות 9:00-17:00</p>
                </div>
            </div>
        </div>
    )
}

export default footer;
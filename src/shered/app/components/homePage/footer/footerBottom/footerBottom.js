import React from 'react';

const footerBottom = () => {
    return (
        <div className="footerBottom">
            <div className="footerBottom-details">
                <p className="footerBottom-details-location"><ion-icon name="locate" id="footer-bottom-icon"></ion-icon> ישראל</p>
                <p className="footerBottom-details-language"><ion-icon name="globe" id="footer-bottom-icon"></ion-icon> עברית</p>
                <p className="footerBottom-details-copyright"> שאוליאן סחר בע״מ 2019 ©</p>
            </div>
        </div>
    );
}

export default footerBottom;
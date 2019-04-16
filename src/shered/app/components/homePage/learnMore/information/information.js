import React from 'react'

const information = () => {
    return (
        <div className="information">
            <div className="information__section section">
                <div className="information__section-right">
                    <p className="information__section-right-img"><ion-icon name="logo-buffer" id="box-icon1"></ion-icon></p>
                    <div className="information__section-right-text">
                        <p className="information__section-right-text-title">כותרת &#x21e0;</p>
                        <p className="information__section-right-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, eaque!</p>
                    </div>
                </div>
                <div className="information__section-left">
                    <p className="information__section-left-img"><ion-icon name="cube" id="box-icon2"></ion-icon></p>
                    <div className="information__section-left-text">
                        <p className="information__section-left-text-title">כותרת &#x21e0;</p>
                        <p className="information__section-left-text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ab.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default information;

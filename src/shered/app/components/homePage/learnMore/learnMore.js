import React from 'react'
import { Link } from 'react-router-dom'

const learnMore = () => {
    return (
        <div className="learnMore">
            <div className="learnMore-stores">
                <p className="learnMore-stores-name">א.ל.מ</p>
                <p className="learnMore-stores-name">טרקלין</p>
                <p className="learnMore-stores-name">יאקב</p>
                <p className="learnMore-stores-name">אבי סופר</p>
                <p className="learnMore-stores-name">ליאור</p>
                <p className="learnMore-stores-name">אור ישר</p>
            </div>
            <button className="learnMore-btn">לרשימת החנויות המלאה</button>
            <div className="learnMore-middle">
                <div className="learnMore-middle-right">
                    <p className="learnMore-middle-right-img"><ion-icon name="logo-buffer" id="box-icon1"></ion-icon></p>
                    <div className="learnMore-middle-right-text">
                        <p className="learnMore-middle-right-text-title">כותרת &#x21e0;</p>
                        <p className="learnMore-middle-right-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, eaque!</p>
                    </div>
                </div>
                <div className="learnMore-middle-left">
                    <p className="learnMore-middle-left-img"><ion-icon name="cube" id="box-icon2"></ion-icon></p>
                    <div className="learnMore-middle-left-text">
                        <p className="learnMore-middle-left-text-title">כותרת &#x21e0;</p>
                        <p className="learnMore-middle-left-text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ab.</p>
                    </div>
                </div>
            </div>
            <div className="learnMore-purchase">
                <div className="learnMore-purchase-right">
                    <p className="learnMore-purchase-right-title">צריכים עזרה?</p>
                    <p className="learnMore-purchase-right-text">לכל שאלה או בקשה אנחנו פה לרשותכם</p>
                </div>
                <div className="learnMore-purchase-left">
                    <Link id="Link" to='/contact' className="learnMore-purchase-left-btn">צור קשר</Link>
                </div>
            </div>
        </div>
    )
}

export default learnMore;

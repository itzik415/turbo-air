import React from 'react'
import { Link } from 'react-router-dom'

const brandAbout = () => {
    return (
        <div className="brandAbout">
            <div className="brandAbout__section">
                <div className="brandAbout__section-about">
                    <h2 className="brandAbout__section-about-title">אודות המותג</h2>
                    <p className="brandAbout__section-about-text">
                    שלוש מילים הן כל מה שנדרש כדי לתאר אותנו. טכנולוגיה איטלקית טהורה.
                    שלוש מילים המגלמות את הערכים, אשר במשך 35 שנים, Turbo Air לוקח לכל פינה של כדור הארץ - ערכים שהעולם למד להכיר ולכבד.
                    ערכים אשר, באמצעות קולטי האדים שלהם, ממציאים היסטוריה של מצוינות כל המצוינות האיטלקית: מצוינות של תפיסה, סגנון, עיצוב.
                    המצוינות של המוצר - בידע, בפירוט ובאיכות ללא פשרות. 
                    מצוינות טכנולוגית: בלעדי, חדשני, הובא בפניכם באמצעות תוצאות מעבדת המחקר והפיתוח של קבוצת אליקה, המתקדמת ביותר בעולם.
                    וכל זה מוקדש למטרה אחת שאפתנית במיוחד: אוויר מצוין.
                    </p>
                </div>
                <div className="brandAbout__section-composition">
                    <img src='https://storage.googleapis.com/turboair-israel/general-images/kitchen-1.jpg' alt="Photo 1" className="brandAbout__section-composition__photo brandAbout__section-composition__photo--p1" />
                    <img src='https://storage.googleapis.com/turboair-israel/general-images/kitchen-2.jpg' alt="Photo 2" className="brandAbout__section-composition__photo brandAbout__section-composition__photo--p2" />
                    <img src='https://storage.googleapis.com/turboair-israel/general-images/kitchen-3.jpg' alt="Photo 3" className="brandAbout__section-composition__photo brandAbout__section-composition__photo--p3" />
                </div>
            </div>
        </div>
    )
}

export default brandAbout;

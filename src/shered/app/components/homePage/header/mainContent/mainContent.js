import React from 'react'
import { Link } from 'react-router-dom'

const mainContent = () => {
    return (
        <div className="mainContent">
            <p className="mainContent-new"><span>חדש</span>בידקו מהו קולט האדים הטרנדי ביותר שלנו ></p>
            <div className="mainContent-paragraph">
                <h2 className="mainContent-paragraph-title">טורבו אייר כי מגיע לך יותר</h2>
                <p className="mainContent-paragraph-text">
                שלנו בידקו מהו קולט האדים הטרנדי ביותר שלנו בידקו מהו קולט האדים הטרנדי ביותר שלנושלנו בידקו מהו קולט האדים הטרנדי ביותר שלנו בידקו מהו קולט האדים הטרנדי ביותר שלנו
                </p>
            </div>
            <div className="mainContent-buttons">
                <Link to='/' id="Link">
                    <p className="mainContent-buttons-right">מוצרים</p>
                </Link>
                <Link to='/' id="Link">
                    <p className="mainContent-buttons-left">הרשמה</p>
                </Link>
            </div>
        </div>
    )
}

export default mainContent;

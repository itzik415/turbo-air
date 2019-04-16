import React from 'react'
import { Link } from 'react-router-dom'

const help = () => {
    return (
        <div className="help">
            <div className="help__section">
                <div className="help__section-right">
                    <p className="help__section-right-title">צריכים עזרה?</p>
                    <p className="help__section-right-text">לכל שאלה או בקשה אנחנו פה לרשותכם</p>
                </div>
                <div className="help__section-left">
                    <Link id="Link" to='/contact' className="help__section-left-btn">צור קשר</Link>
                </div>
            </div>
        </div>
    )
}

export default help;

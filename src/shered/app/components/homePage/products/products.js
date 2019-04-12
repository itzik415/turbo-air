import React from 'react'
import { Link } from 'react-router-dom'

const productsSection = () => {
    return (
        <div className="products">
            <h1 className="products-title">המוצרים המובילים שלנו</h1>
            <div className="products__section">
                <div className="products__section-flippingCard"> 
                    <div className="products__section-flippingCard__side products__section-flippingCard__side--front">
                        <div className="products__section-flippingCard__picture products__section-flippingCard__picture--1">
                            &nbsp;
                        </div>
                        <h4 className="products__section-flippingCard__heading">
                            <span className="products__section-flippingCard__heading-span products__section-flippingCard__heading-span--1">The history buff </span>
                        </h4>
                        <div className="products__section-flippingCard__details">
                            <ul className="">
                                <li>5 day tours</li>
                                <li>Up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>Sleep in cozy hotels</li>
                            </ul>
                        </div>
                    </div>
                    <div className="products__section-flippingCard__side products__section-flippingCard__side--back products__section-flippingCard__side--back-1">
                        <div className="products__section-flippingCard__cta">
                            <div className="products__section-flippingCard__price-box">
                                <p className="products__section-flippingCard__price-only">Only</p>
                                <p className="products__section-flippingCard__price-value">$497</p>
                            </div>
                            <div className="products__section-flippingCard-btn">
                                <h4 className="products__section-flippingCard-title">BUTTON</h4>
                            </div>   
                        </div>
                    </div>
                </div>
                <div className="products__section-flippingCard"> 
                    <div className="products__section-flippingCard__side products__section-flippingCard__side--front">
                        <div className="products__section-flippingCard__picture products__section-flippingCard__picture--2">
                            &nbsp;
                        </div>
                        <h4 className="products__section-flippingCard__heading">
                            <span className="products__section-flippingCard__heading-span products__section-flippingCard__heading-span--2">The history buff </span>
                        </h4>
                        <div className="products__section-flippingCard__details">
                            <ul className="">
                                <li>5 day tours</li>
                                <li>Up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>Sleep in cozy hotels</li>
                            </ul>
                        </div>
                    </div>
                    <div className="products__section-flippingCard__side products__section-flippingCard__side--back products__section-flippingCard__side--back-2">
                        <div className="products__section-flippingCard__cta">
                            <div className="products__section-flippingCard__price-box">
                                <p className="products__section-flippingCard__price-only">Only</p>
                                <p className="products__section-flippingCard__price-value">$497</p>
                            </div>
                            <div className="products__section-flippingCard-btn">
                                <h4 className="products__section-flippingCard-title">BUTTON</h4>
                            </div>   
                        </div>
                    </div>
                </div>
                <div className="products__section-flippingCard"> 
                    <div className="products__section-flippingCard__side products__section-flippingCard__side--front">
                        <div className="products__section-flippingCard__picture products__section-flippingCard__picture--3">
                            &nbsp;
                        </div>
                        <h4 className="products__section-flippingCard__heading">
                            <span className="products__section-flippingCard__heading-span products__section-flippingCard__heading-span--3">The history buff </span>
                        </h4>
                        <div className="products__section-flippingCard__details">
                            <ul className="">
                                <li>5 day tours</li>
                                <li>Up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>Sleep in cozy hotels</li>
                            </ul>
                        </div>
                    </div>
                    <div className="products__section-flippingCard__side products__section-flippingCard__side--back products__section-flippingCard__side--back-3">
                        <div className="products__section-flippingCard__cta">
                            <div className="products__section-flippingCard__price-box">
                                <p className="products__section-flippingCard__price-only">Only</p>
                                <p className="products__section-flippingCard__price-value">$497</p>
                            </div>
                            <div className="products__section-flippingCard-btn">
                                <h4 className="products__section-flippingCard-title">BUTTON</h4>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="products-btn">לכל המוצרים</button> */}
            <Link to="/products" id="Link" className="products-glowing-button">לכל המוצרים</Link> 
        </div>
    )
}

export default productsSection;

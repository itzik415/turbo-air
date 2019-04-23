import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../homePage/header/navbar/navbar';
import ProductModal from './productModal/productModel';

class ProductsPage extends Component {

    render() {
        const backgroundStyle = {
            backgroundImage: 'url(https://storage.googleapis.com/turboair-israel/products/norma.jpg)'
        }
        return (
            <div className="productsPage">
                <div className="stripes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="productsPage-top">
                    <Navbar />
                    <div className="productsPage-top-main">
                        <h1 className="productsPage-top-main-title"> מוצרים</h1>
                        <p className="productsPage-top-main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur asperiores sint ut, voluptatibus quasi laborum quae impedit quia et.</p>
                    </div>   
                </div>
                <div className="productsPage-nav">
                    <p className="productsPage-nav-option">כל הקולטים</p>
                    <p className="productsPage-nav-option">קולטי בילד אין</p>
                    <p className="productsPage-nav-option">קולטי אי</p>
                    <p className="productsPage-nav-option">קולטי קיר</p>
                </div>
                <div className="productsPage-items">
                    <div className="productsPage-items-product">
                        <div className="ribbon ribbon-primary">norma</div>
                        <div style={backgroundStyle} className="productsPage-items-product-background"></div>
                        <div className="productsPage-items-product-cover">
                            <ion-icon name="expand" id="item-expand" data-toggle="modal" data-target="#product-image-modal"></ion-icon>
                            <div id="item-search-div">
                                <p>לצפיה</p>
                                <ion-icon name="search" id="item-search"></ion-icon>
                            </div>
                            <ion-icon name="cart" id="item-cart"></ion-icon>
                        </div>
                        <div className="productsPage-items-product-details">
                            <p className="productsPage-items-product-details-category">קולטי קיר</p>
                            <p className="productsPage-items-product-details-price">₪ 40.00</p>
                        </div>
                    </div>
                    <div className="productsPage-items-product">
                        <div className="ribbon ribbon-primary">norma</div>
                        <div style={backgroundStyle} className="productsPage-items-product-background"></div>
                        <div className="productsPage-items-product-cover">
                            <ion-icon name="expand" id="item-expand" data-toggle="modal" data-target="#product-image-modal"></ion-icon>
                            <div id="item-search-div">
                                <p>לצפיה</p>
                                <ion-icon name="search" id="item-search"></ion-icon>
                            </div>
                            <ion-icon name="cart" id="item-cart"></ion-icon>
                        </div>
                        <div className="productsPage-items-product-details">
                            <p className="productsPage-items-product-details-category">קולטי קיר</p>
                            <p className="productsPage-items-product-details-price">₪ 40.00</p>
                        </div>
                    </div>
                    <div className="productsPage-items-product">
                        <div className="ribbon ribbon-primary">norma</div>
                        <div style={backgroundStyle} className="productsPage-items-product-background"></div>
                        <div className="productsPage-items-product-cover">
                            <ion-icon name="expand" id="item-expand" data-toggle="modal" data-target="#product-image-modal"></ion-icon>
                            <div id="item-search-div">
                                <p>לצפיה</p>
                                <ion-icon name="search" id="item-search"></ion-icon>
                            </div>
                            <ion-icon name="cart" id="item-cart"></ion-icon>
                        </div>
                        <div className="productsPage-items-product-details">
                            <p className="productsPage-items-product-details-category">קולטי קיר</p>
                            <p className="productsPage-items-product-details-price">₪ 40.00</p>
                        </div>
                    </div>
                    <div className="productsPage-items-product">
                        <div className="ribbon ribbon-primary">norma</div>
                        <div style={backgroundStyle} className="productsPage-items-product-background"></div>
                        <div className="productsPage-items-product-cover">
                            <ion-icon name="expand" id="item-expand" data-toggle="modal" data-target="#product-image-modal"></ion-icon>
                            <div id="item-search-div">
                                <p>לצפיה</p>
                                <ion-icon name="search" id="item-search"></ion-icon>
                            </div>
                            <ion-icon name="cart" id="item-cart"></ion-icon>
                        </div>
                        <div className="productsPage-items-product-details">
                            <p className="productsPage-items-product-details-category">קולטי קיר</p>
                            <p className="productsPage-items-product-details-price">₪ 40.00</p>
                        </div>
                    </div>
                </div>
                <ProductModal />
            </div>   
        );
    }
}

export default connect(null, null)(ProductsPage);
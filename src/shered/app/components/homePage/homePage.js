import React, { Component } from 'react'
import Header from './header/header';
import BrandAbout from './brandAbout/brandAbout';
import Products from './products/products';
import LearnMore from './learnMore/learnMore';
import Footer from './footer/footer';

class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <Header />
                <BrandAbout />
                <Products />
                <LearnMore />
                <Footer />
            </div>
        )
    }
}

export default HomePage;
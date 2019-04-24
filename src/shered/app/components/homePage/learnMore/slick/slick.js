import React, { Component } from 'react';
import Slider from 'react-slick';


class Carousel extends Component {
  
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: global.innerWidth <= 800 ? 3 : 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      pauseOnHover: true,
      arrows: false
    };

    return (
      <div>
        <div className="slider-main">
          <Slider {...settings}>
            <div className="store-name">א.ל.מ</div>
            <div className="store-name">טרקלין</div>
            <div className="store-name">יאקב</div>
            <div className="store-name">אבי סופר</div>
            <div className="store-name">ליאור</div>
            <div className="store-name">אור ישר</div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
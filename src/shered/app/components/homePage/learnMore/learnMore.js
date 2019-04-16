import React from 'react'
import Carousel from './slick/slick';
import Help from './help/help'
import Information from './information/information';

const learnMore = () => {
    return (
        <div className="learnMore">
            <Carousel/>
            <Information />
            <Help />
        </div>
    )
}

export default learnMore;

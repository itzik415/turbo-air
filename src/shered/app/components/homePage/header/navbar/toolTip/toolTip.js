import React from 'react';
import AboutToolTip from './about/about';
import SupportToolTip from './support/support';
import ProductsToolTip from './products/products';

const toolTip = (props) => {
    let transform = props.translateValue.transform;
    return (
        transform.slice(11,14) === '105' ? 
            <AboutToolTip translateValue={props.translateValue}/> : 
        transform.slice(11,15) === '-135' ? 
            <ProductsToolTip translateValue={props.translateValue}/> : 
        transform.slice(11,15) === '-270' ? 
            <SupportToolTip translateValue={props.translateValue}/> 
            : null
    );
}

export default toolTip;
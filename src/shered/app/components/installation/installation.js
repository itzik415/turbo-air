import React, { Component } from 'react';
// import { findAuthorizedStores } from '../../Redux/actions/authorizedStores';
import { connect } from 'react-redux';

class Installation extends Component {
    render() {
        return (
            <div className="authorizedSellers">
                <div className="stripes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
               
            </div>
        )
    }
}


export default connect(null, null)(Installation);
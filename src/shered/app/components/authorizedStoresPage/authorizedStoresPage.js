import React, { Component } from 'react';
import { findAuthorizedStores } from '../../Redux/actions/authorizedStores';
import { connect } from 'react-redux';

class AuthorizedStores extends Component {
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
                <h1 className="authorizedSellers-title">משווקים מורשים</h1>
                <p className="authorizedSellers-paragraph">שרות מוצרים קטנים הנתמך במעבדה ראשית ומחסן חלפים במרכז הלוגיסטי באשדוד ויותר מ-20 מעבדות שרות בפריסה ארצית.</p>
                <div className="authorizedSellers-main">
                    <div className="authorizedSellers-main-input">
                        <input onKeyDown={this.props.findStores} name="search" id="searchStoreInput" placeholder="יש להזין את העיר הרצויה..." type="text" />
                        <ion-icon onClick={this.props.findStores} name="search" id="search-authorized-stores"></ion-icon>
                    </div>
                    <p className="authorizedSellers-main-instructions">* במידה ולא הוזן שם העיר/ישוב לחיצה על המקש ״אנטר״ תציג את רשימת החנויות המלאה</p>
                    <div className="authorizedSellers-main-chart">
                        <div className="authorizedSellers-main-chart-header">
                            <h1>עיר</h1>
                            <h1>כתובת</h1>
                            <h1>שם</h1>
                            <h1>טלפון</h1>
                        </div>
                        <div>
                            {
                                this.props.authorizedStoresList.map(place => {
                                    return (
                                        <div className="authorizedSellers-main-chart-line" key={place.id}>
                                            <p>{place.name}</p>
                                            <p>{place.address}</p>
                                            <p>{place.city}</p>
                                            <p>{place.phonenumber.toString().length === 8 ? 
                                                `0${place.phonenumber.toString().slice(0,1)}-${place.phonenumber.toString().slice(1)}` :
                                                `0${place.phonenumber.toString().slice(0,2)}-${place.phonenumber.toString().slice(2)}`}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorizedStoresList: state.storesReducer.authorizedStores
    }
}

const mapDispatchToProps = dispatch => {
    return {
        findStores: (e) => dispatch(findAuthorizedStores(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedStores);
import React from 'react';
import { connect } from 'react-redux';

const searchModal = (props) => {
    return (
        <div className="searchModal" style={{visibility: props.visibility, opacity: props.opacity,transform: props.translate}}>
            <input name="searchModal-search" placeholder="חיפוש..." type="text" />
            <ion-icon name="search" id="search2"></ion-icon>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        visibility: state.searchFiledReducer.visibility,
        opacity: state.searchFiledReducer.opacity,
        translate: state.searchFiledReducer.translate,
    }
}

export default connect(mapStateToProps, null)(searchModal);




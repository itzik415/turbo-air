import React from 'react';
import { connect } from 'react-redux';
import { onClickCloseSearch } from '../../Redux/actions/searchFiled';

const cover = (props) => {
    console.log(props)
    return (
        <div className="bodyCover" onClick={props.click} style={{display: props.display}}></div>
    );
}

const mapStateToProps = state => {
    return {
        display: state.searchFiledReducer.display
    }
}

const mapDispatchToProps = dispatch => {
    return {
        click: () => dispatch(onClickCloseSearch())
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(cover);
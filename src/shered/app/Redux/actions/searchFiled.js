//Opening the modal search
export const onClickOpenSearch = () => {
    return function (dispatch) {
        document.body.style.overflow = 'hidden';
        dispatch({type: 'OPEN_SEARCH'})
    }
}

//Closing the modal search
export const onClickCloseSearch = () => {
    return function (dispatch) {
        document.body.style.overflow = 'unset';
        dispatch({type: 'CLOSE_SEARCH'})
    }
}
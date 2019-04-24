export const initialState = {
    visibility: 'hidden',
    opacity: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    fontColor: '#383838'
}

export const responsiveNavbarReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN_NAVBAR':
            return {
                ...state, 
                visibility: 'visible',
                opacity: 1,
                backgroundColor: '#273444',
                position: 'fixed',
                fontColor: 'white'
            }
        case 'CLOSE_NAVBAR':
            return {
                ...state, 
                visibility: 'hidden',
                opacity: 0,
                backgroundColor: 'transparent',
                position: 'absolute',
                fontColor: '#383838'
            }

        default:
            return state;
    }
}
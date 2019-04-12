export const initialState = {
    transform0: 'scale(1)', 
    transform1: 'scale(0)', 
    display: 'none', 
    visibility: 'hidden', 
    opacity: '0', 
    translate: 'translateY(0px)'
}

export const searchFiledReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN_SEARCH':
            return {
                ...state, 
                transform0: 'scale(0)', 
                transform1: 'scale(1)', 
                display: 'block', 
                visibility: 'visible', 
                opacity: '1', 
                translate: 'translateY(220px)'
            }
        case 'CLOSE_SEARCH':
            return {
                ...state, 
                transform0: 'scale(1)', 
                transform1: 'scale(0)', 
                display: 'none', 
                visibility: 'hidden', 
                opacity: '0', 
                translate: 'translateY(0px)'
            }
        default:
            return state;
    }
}
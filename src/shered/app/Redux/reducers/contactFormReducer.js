export const initialState = {
    displaySucess: 'none',
    displayFail: 'none',
}

export const contactFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                ...state, 
                displaySucess: 'block',
                displayFail: 'none',
            }

        case 'FAIL':
            return {
                ...state, 
                displaySucess: 'none',
                displayFail: 'block',
            }

        case 'CLOSE':
            return {
                ...state, 
                displaySucess: 'none',
                displayFail: 'none',
            }

        default:
            return state;
    }
}
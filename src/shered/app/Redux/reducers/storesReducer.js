export const initialState = {
    authorizedStores: [],
}

export const storesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECIVE_AUTHORIZED_SELLERS':
            return {
                ...state, 
                authorizedStores: action.payload,
            }
        default:
            return state;
    }
}
export const initialState = {
    authorizedStores: [],
    serviceLocationsList: [],
}

export const storesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECIVE_AUTHORIZED_SELLERS':
            return {
                ...state, 
                authorizedStores: action.payload,
            }
        case 'RECIVE_SERVICE_LOCATIONS':
            return {
                ...state, 
                serviceLocationsList: action.payload,
            }
        default:
            return state;
    }
}
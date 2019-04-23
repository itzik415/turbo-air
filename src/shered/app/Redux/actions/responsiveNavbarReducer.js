import { store } from '../store';

//Toggle responsive navbar 
export function toggleResponsiveNavbar() {
    return function(dispatch) {
        if(store.getState().responsiveNavbarReducer.opacity === 0) {
            dispatch({type: 'OPEN_NAVBAR'})
        } else {
            dispatch({type: 'CLOSE_NAVBAR'})
        }
    }
}
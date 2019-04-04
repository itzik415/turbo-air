import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from '../shered/app/main';
import '../shered/app/main.scss';

hydrate (
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById('root')
);



// import { Provider } from 'react-redux';
// import './main.scss';
// import { store } from './Redux/store';

// ReactDOM.render(
//     <Provider store={store}>
//         <Main />
//     </Provider>, 
//     document.getElementById('root')
// );
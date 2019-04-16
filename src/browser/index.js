import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from '../shered/app/Redux/store'
import Main from '../shered/app/main';
import '../shered/app/Scss/main.scss';

hydrate (
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

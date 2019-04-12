
import React from "react"

import express from "express"
import cors from "cors"
import { mainReducer } from '../shered/app/Redux/reducers/mainReducer'
import thunk from "redux-thunk"
import { renderToString } from "react-dom/server"
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import serialize from "serialize-javascript"
import { matchPath, StaticRouter } from 'react-router-dom'
import Main from '../shered/app/main'
import routes from '../shered/app/routes'

const app = express();

app.use(cors())

app.use(express.static('public')) // make everything in the public folder available for us

app.get('*', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
    const store = createStore(mainReducer, applyMiddleware(thunk));
    const preloadedState = store.getState();
    console.log(preloadedState)
    const promise = activeRoute.fetchInitialData ? 
        activeRoute.fetchInitialData(req.path): 
        Promise.resolve()

    promise.then((data) => {
        const context = { data }
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Main />    
                </StaticRouter>
            </Provider>
        )
    
        res.send(`
            <!DOCTYPE html>
            <html dir="rtl">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
                    <script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"></script>

                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

                    <script src='/bundle.js' defer></script>
                    <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
                    
                    <title>TurboAir</title>
                </head>
                <body>
                    <div id="root">${markup}</div>
                    <script>window._PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
        `)
    }).catch(next)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server start at ${port}`)
});

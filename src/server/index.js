
import React from "react"

import express from "express"
import cors from "cors"

import { renderToString } from "react-dom/server"
import serialize from "serialize-javascript"
import { matchPath, StaticRouter } from 'react-router-dom'
import Main from '../shered/app/main'
import routes from '../shered/app/routes'

const app = express();

app.use(cors())

app.use(express.static('public')) // make everything in the public folder available for us

app.get('*', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

    const promise = activeRoute.fetchInitialData ? 
        activeRoute.fetchInitialData(req.path): 
        Promise.resolve()

    promise.then((data) => {
        const context = { data }
        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <Main />    
            </StaticRouter>
        )
    
        res.send(`
            <!DOCTYPE html>
            <html dir="rtl">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet">
                    <script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"></script>
                    <script src='/bundle.js' defer></script>
                    <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
                    <title>SSR</title>
                </head>
                <body>
                    <div id="root">${markup}</div>
                </body>
            </html>
        `)
    }).catch(next)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server start at ${port}`)
});

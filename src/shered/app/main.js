import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import NoMatch from './noMatch'
// import NAVBAR
//import FOOTER

class Main extends Component {
    render() {
        return (
            <div className="router-div">
                <Switch>
                    {routes.map(( {path, exact, component: C, ...rest}) => (
                        <Route 
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => (
                                <C {...props} {...rest} />
                            )}
                        />
                    ))}
                    <Route render={(props) => <NoMatch {...props} />} />
                </Switch>
            </div>
        )

    }
}

export default Main;

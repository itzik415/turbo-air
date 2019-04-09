import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import NoMatch from './noMatch'
// import NAVBAR
import Navbar from '../app/components/homePage/header/navbar/navbar';
import ScrollToTop from './components/scrollToTop/scrollToTop'
import Footer from './components/homePage/footer/footer';

class Main extends Component {
    render() {
        return (
            <div className="router-div">
                <ScrollToTop />
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
                <Footer />
            </div>
        )

    }
}

export default Main;

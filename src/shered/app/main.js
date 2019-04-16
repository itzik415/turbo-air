import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import NoMatch from './noMatch'
import FooterBottom from './components/homePage/footer/footerBottom/footerBottom';
import Footer from './components/homePage/footer/footer';
import Navbar from './components/homePage/header/navbar/navbar';
import Cover from './components/cover/cover';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import SearchModal from './components/homePage/header/navbar/modal/modal';

class Main extends Component {
    render() {
        return (
            <div className="router-div">
                <Cover />
                <SearchModal />
                <ScrollToTop />
                <Navbar />
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
                <FooterBottom />
            </div>
        )

    }
}

export default Main;

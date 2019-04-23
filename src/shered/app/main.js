import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import { store } from './Redux/store'
import routes from './routes'
import NoMatch from './noMatch'
import FooterBottom from './components/homePage/footer/footerBottom/footerBottom';
import Footer from './components/homePage/footer/footer';
import Navbar from './components/homePage/header/navbar/navbar';
import ResponsiveNavbar from './components/homePage/header/responsiveNavbar/responsiveNavbar';
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
                <ResponsiveNavbar />
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

// const mapDispatchToProps = dispatch => {
//     return {
//         click: () => dispatch(onClickCloseAll())
//     }
// }

export default connect(null, null)(Main);

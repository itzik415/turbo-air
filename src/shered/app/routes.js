import HomePage from './components/homePage/homePage';
import Contact from './components/contactPage/contactPage';
import AuthorizedStores from './components/authorizedStoresPage/authorizedStoresPage';
import About from './components/about/about';
import ServiceLocations from './components/serviceLocationsPage/serviceLocationsPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/contact',
        exact: true,
        component: Contact
    },
    {
        path: '/authorized-stores',
        exact: true,
        component: AuthorizedStores
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/service-locations',
        exact: true,
        component: ServiceLocations
    },
    //an example with route with fetching
    // {
    //     path: '/products',
    //     component: Products,
    //     fetchInitialDate: (path = '') => fetchPopularRepos(path.split('/').pop())
    // }
]

export default routes;
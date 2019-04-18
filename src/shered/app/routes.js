import HomePage from './components/homePage/homePage';
import Contact from './components/contactPage/contactPage';
import AuthorizedStores from './components/authorizedStoresPage/authorizedStoresPage';
import About from './components/about/about';
import ProductsPage from './components/ProductsPage/ProductsPage';
import AboutTurboair from './components/aboutTurboair/aboutTurboair';
import AirflowPower from './components/airflowPower/airflowPower';
import Installation from './components/installation/installation';
import AirflowMethod from './components/airflowMethod/airflowMethod';
import Filtration from './components/filtration/filtration';
import Safety from './components/safety/safety';

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
        path: '/about-shaoulian',
        exact: true,
        component: About
    },
    {
        path: '/about-turboair',
        exact: true,
        component: AboutTurboair
    },
    {
        path: '/products',
        exact: true,
        component: ProductsPage
    },
    {
        path: '/details/airflow-power',
        exact: true,
        component: AirflowPower
    },
    {
        path: '/details/installation',
        exact: true,
        component: Installation
    },
    {
        path: '/details/airflow-method',
        exact: true,
        component: AirflowMethod
    },
    {
        path: '/details/filtration',
        exact: true,
        component: Filtration
    },
    {
        path: '/details/safety',
        exact: true,
        component: Safety
    },
    //an example with route with fetching
    // {
    //     path: '/products',
    //     component: Products,
    //     fetchInitialDate: (path = '') => fetchPopularRepos(path.split('/').pop())
    // }
]

export default routes;
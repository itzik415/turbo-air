import HomePage from './components/homePage/homePage';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    }
    //an example with route with fetching
    // {
    //     path: '/products',
    //     component: Products,
    //     fetchInitialDate: (path = '') => fetchPopularRepos(path.split('/').pop())
    // }
]

export default routes;
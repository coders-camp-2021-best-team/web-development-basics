export const routes = {
    home: {
        routerPath: '/',
        getPathWithParams: () => '/'
    },
    search: {
        routerPath: '/search',
        getPathWithParams: (q = '') => `/search?q=${q}`
    }
    // error404: {
    //     routerPath: '*',
    //     getPathWithParams: () => '/error404'
    // }
};

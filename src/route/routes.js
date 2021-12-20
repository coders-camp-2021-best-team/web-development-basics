export const routes = {
    home: {
        routerPath: '/',
        getPathWithParams: () => '/'
    },
    // search: {
    //     routerPath: '/search',
    //     getPathWithParams: (id = '') => `/search?id=${id}`
    // },
    // error404: {
    //     routerPath: '*',
    //     getPathWithParams: () => '/error404'
    // }
    details: {
        routerPath: '/details',
        getPathWithParams: (id = '') => `/details?id=${id}`
    }
};

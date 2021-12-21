export const routes = {
    home: {
        routerPath: '/',
        getPathWithParams: () => '/'
    },
    search: {
        routerPath: '/search',
        getPathWithParams: (query = '') =>
            `/search?q=${encodeURIComponent(query)}`
    },
    // error404: {
    //     routerPath: '*',
    //     getPathWithParams: () => '/error404'
    // }
    details: {
        routerPath: '/details',
        getPathWithParams: (id = '') => `/details?id=${encodeURIComponent(id)}`
    },
    favorites: {
        routerPath: '/favorites',
        getPathWithParams: () => '/favorites'
    }
};

export const routes = {
    home: {
        routerPath: '/',
        getPathWithParams: () => '/'
    },
    search: {
        routerPath: '/search',
        getPathWithParams: (id = '') => `/search?id=${id}`
    },
    error404: {
        routerPath: '*',
        getPathWithParams: () => '*'
    },
    details: {
        routerPath: '/details',
        getPathWithParams: (id = '') => `/details?id=${id}`
    },
    favorites: {
        routerPath: '/favorites',
        getPathWithParams: () => '/favorites'
    }
};

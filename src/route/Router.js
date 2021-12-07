export const Router = ({ routes, on }) => {
    const options = { renderOn: on };
    const path = window.location.pathname;

    let error404 = true;

    for (const route_path in routes) {
        const { component, route } = routes[route_path];

        if (route.routerPath === path) {
            component(options);
            error404 = false;
            break;
        }
    }

    if (error404) {
        const found = routes.find((v) => v.route.routerPath === '*');

        if (found) {
            const {
                component,
                route: { getPathWithParams }
            } = found;

            component(options);

            const path = getPathWithParams();
            history.replaceState({}, path, path);
        }
    }
};

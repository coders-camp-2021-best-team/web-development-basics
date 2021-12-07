export const Router = ({ routes, on }) => {
    const options = { renderOn: on };
    const path = window.location.pathname;

    for (const route_path in routes) {
        const route = routes[route_path];

        const regex = `^${route_path}$`;
        let matches = path.match(regex);
        if (matches) {
            matches.splice(0, 1);
            route(options, matches);
            break;
        }
    }
};

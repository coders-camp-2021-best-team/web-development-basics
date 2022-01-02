export const getQueryParams = () => {
    return Object.fromEntries(
        new URLSearchParams(window.location.search).entries()
    );
};

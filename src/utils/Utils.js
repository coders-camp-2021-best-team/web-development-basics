/**
 * Source: https://stackoverflow.com/a/1714899/12126676
 * @param {object} params key-value object of query parameters
 * @returns {string}
 */
const serializeQueryParams = (params) => {
    let str = [];
    for (let p in params) {
        if (params.hasOwnProperty(p)) {
            str.push(
                encodeURIComponent(p) + '=' + encodeURIComponent(params[p])
            );
        }
    }
    return str.join('&');
};

module.exports = {
    serializeQueryParams
};

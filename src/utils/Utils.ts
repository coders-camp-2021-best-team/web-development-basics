import { HttpRequestParams } from '../interfaces';

/**
 * Source: https://stackoverflow.com/a/1714899/12126676
 */
export const serializeQueryParams = (params: HttpRequestParams) => {
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
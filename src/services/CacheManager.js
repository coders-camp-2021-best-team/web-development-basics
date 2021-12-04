import { serializeQueryParams } from '../utils/Utils';

class CacheManager {
    /**
     * @param {'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'} method request method (GET, POST, OPTIONS, HEAD, ...)
     * @param {string} endpoint ex. `/title/find`
     * @param {object} parameters key-value object of query parameters
     */
    async getCache(method = 'GET', endpoint, parameters) {
        let url = `/static/api/${endpoint}/${serializeQueryParams(
            parameters
        )}.json`;

        console.debug('Trying to fetch data from cache... ' + url);

        if (method != 'GET') {
            throw new Error('HTTP method other than GET is not supported.');
        } else {
            try {
                let resp = await fetch(url);
                let json = await resp.json();
                console.debug('Successfully fetched data from cache!');
                return json;
            } catch (e) {
                console.error(e);
                return null;
            }
        }
    }
}

export default new CacheManager();

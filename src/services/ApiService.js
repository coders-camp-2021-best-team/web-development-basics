import cacheManager from './CacheManager';
import { serializeQueryParams } from '../utils/Utils';

class ApiService {
    getURL(endpoint = '/') {
        return process.env.API_BASE_URL + endpoint;
    }

    /**
     * @param {'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'} method request method (GET, POST, OPTIONS, HEAD, ...)
     * @param {string} endpoint ex. `/title/find`
     * @param {object} parameters key-value object of query parameters
     */
    async callAPI(method = 'GET', endpoint = '/', parameters) {
        let url =
            this.getURL(endpoint) + '?' + serializeQueryParams(parameters);

        console.debug('Trying to fetch data from API... ' + url);

        try {
            let resp = await fetch(url, {
                method: method,
                headers: {
                    'X-RapidAPI-Host': (process.env.API_BASE_URL || '').replace(
                        'https://',
                        ''
                    ),
                    'X-RapidAPI-Key': process.env.API_SECRET_KEY
                }
            });
            let json = await resp.json();
            return json;
        } catch (e) {
            console.error(e);
            throw new Error('Error occurred while fetching the API!');
        }
    }

    /**
     * @param {'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'} method request method (GET, POST, OPTIONS, HEAD, ...)
     * @param {string} endpoint ex. `/title/find`
     * @param {object} parameters key-value object of query parameters
     */
    async request(method = 'GET', endpoint = '/', parameters) {
        let cache_entry = await cacheManager.getCache(
            method,
            endpoint,
            parameters
        );

        if (cache_entry) {
            return cache_entry;
        } else if (process.env.USE_API == 'true') {
            return this.callAPI(method, endpoint, parameters);
        } else {
            throw new Error(
                'Entry not found in cache, calling the API is disabled!'
            );
        }
    }
}

export default new ApiService();

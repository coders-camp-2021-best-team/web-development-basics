import CacheManager from './CacheManager';
import Logger from '../utils/ConsoleLogger';
import ErrorState from '../utils/errorState';

const API_SECRET_KEY = process.env.API_SECRET_KEY || '';
const API_BASE_URL = process.env.API_BASE_URL || '';

class ApiService {
    /**
     * @param {string} endpoint
     * @param {string} prefix
     * @returns {string}
     */
    getURL(endpoint, prefix = API_BASE_URL) {
        let url = prefix + endpoint;
        while (url.match('//')) {
            url = url.replace('//', '/');
        }
        return url;
    }

    /**
     * @param {'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'} method
     * @param {string} api
     * @param {string} params
     * @param {string} optional_params
     * @returns {Promise<object>}
     */
    async callAPI(method, api, params, optional_params = '') {
        const url = this.getURL(
            `/${api}/${process.env.API_SECRET_KEY}/${params}/${optional_params}`
        );
        Logger.debug(`Trying to fetch data from API... ${url}`);

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'X-RapidAPI-Host': API_BASE_URL.replace('https://', ''),
                    'X-RapidAPI-Key': API_SECRET_KEY
                }
            });
            const json = await response.json();

            CacheManager.reportNewCacheEntry(json, api, params);

            return json;
        } catch (e) {
            Logger.error(e);
            ErrorState.setNewState(true);

            throw new Error('Error occurred while fetching the API!');
        }
    }

    /**
     * @param {'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'} method
     * @param {string} api
     * @param {string} params
     * @param {string} optional_params
     * @returns {Promise<object>}
     */
    async request(method, api, params, optional_params = '') {
        let cache_params = params;
        if (params == ' ') {
            params = '';
        }

        const cache_entry = await CacheManager.getCache(
            method,
            api,
            cache_params
        );

        if (cache_entry) {
            return cache_entry;
        } else if (process.env.USE_API === 'true') {
            return this.callAPI(method, api, params, optional_params);
        } else {
            throw new Error(
                'Entry not found in cache, calling the API is disabled!'
            );
        }
    }
}

export default new ApiService();

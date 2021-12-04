import CacheManager from './CacheManager';
import { ApiType, Http } from '../interfaces';

const API_SECRET_KEY = process.env.API_SECRET_KEY || '';
const API_BASE_URL = process.env.API_BASE_URL || '';

class ApiService {
    getURL(endpoint: string, prefix = API_BASE_URL) {
        let url = prefix + endpoint;
        while (url.match('//')) {
            url = url.replace('//', '/');
        }
        return url;
    }

    async callAPI(method: Http, api: ApiType, params: string, optional_params?: string) {
        let url = this.getURL(`/${api}/${process.env.API_SECRET_KEY}/${params}/${optional_params}`);

        console.debug(`Trying to fetch data from API... ${url}`);

        try {
            let resp = await fetch(url, {
                method: method,
                headers: {
                    'X-RapidAPI-Host': API_BASE_URL.replace('https://', ''),
                    'X-RapidAPI-Key': API_SECRET_KEY
                }
            });
            let json = await resp.json();

            CacheManager.reportNewCacheEntry(json, api, params);

            return json;
        } catch (e) {
            console.error(e);
            throw new Error('Error occurred while fetching the API!');
        }
    }

    async request(method: Http, api: ApiType, params: string, optional_params?: string) {
        let cache_entry = await CacheManager.getCache(method, api, params);

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

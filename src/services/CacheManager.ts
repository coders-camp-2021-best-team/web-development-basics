import ApiService from './ApiService';
import { ApiType, Http } from '../interfaces';

class CacheManager {

    getCacheFilename(api: ApiType, params: string) {
        return ApiService.getURL(`/static/api/${api}/${params}.json`, '');
    }

    reportNewCacheEntry(json: object, api: ApiType, params: string) {
        console.warn(`New cache entry!`, {
            filename: this.getCacheFilename(api, params),
            content: JSON.stringify(json)
        });
    }

    async getCache(method: Http, api: ApiType, params: string) {
        let url = this.getCacheFilename(api, params);

        console.debug(`Trying to fetch data from cache... ${url}`);

        if (method != Http.GET) {
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

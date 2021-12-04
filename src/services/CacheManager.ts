import { serializeQueryParams } from '../utils';
import { HttpRequestMethod, HttpRequestParams } from '../interfaces';

class CacheManager {
    async getCache(method: HttpRequestMethod, endpoint: string, parameters: HttpRequestParams) {
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

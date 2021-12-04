import ApiService from './ApiService';
import { ApiType, Http } from '../interfaces';

class CacheManager {

    getCacheFilename(api: ApiType, params: string) {
        return ApiService.getURL(`/static/api/${api}/${params}.json`, '');
    }

    downloadFile(filename: string, text: string) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    reportNewCacheEntry(json: object, api: ApiType, params: string) {
        let filename = this.getCacheFilename(api, params);
        let path_arr = filename.split('/');
        let basename = path_arr[path_arr.length - 1];

        console.warn(`New cache entry!`, {
            filename,
            content: JSON.stringify(json)
        });

        this.downloadFile(basename, JSON.stringify(json));
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

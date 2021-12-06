import ApiService from './ApiService';

class CacheManager {
    /**
     * @param {string} api
     * @param {string} params
     * @returns {string}
     */
    getCacheFilename(api, params) {
        return ApiService.getURL(`/static/api/${api}/${params}.json`, '');
    }

    /**
     * @param {string} filename
     * @param {string} text
     */
    downloadFile(filename, text) {
        const element = document.createElement('a');
        element.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
        );
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    /**
     * @param {object} json
     * @param {string} api
     * @param {string} params
     */
    reportNewCacheEntry(json, api, params) {
        const filename = this.getCacheFilename(api, params);
        let path_arr = filename.split('/');
        let basename = path_arr[path_arr.length - 1];

        console.warn(`New cache entry!`, {
            filename,
            content: JSON.stringify(json)
        });

        this.downloadFile(basename, JSON.stringify(json));
    }

    /**
     * @param {'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'} method
     * @param {string} api
     * @param {string} params
     * @returns {Promise<object>}
     */
    async getCache(method, api, params) {
        const url = this.getCacheFilename(api, params);

        console.debug(`Trying to fetch data from cache... ${url}`);

        if (method !== 'GET') {
            throw new Error('HTTP method other than GET is not supported.');
        } else {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.debug('Successfully fetched data from cache!');
                return json;
            } catch (err) {
                console.error(err);
                return null;
            }
        }
    }
}

export default new CacheManager();

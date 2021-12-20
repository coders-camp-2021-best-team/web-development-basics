import ApiService from '../services/ApiService';

class ApiProvider {
    /**
     * @param {string} name
     */
    search(name) {
        return ApiService.request('GET', 'Search', name);
    }

    /**
     * @param {string} name
     */
    searchTitle(name) {
        return ApiService.request('GET', 'SearchTitle', name);
    }

    /**
     * @param {string} name
     */
    searchMovie(name) {
        return ApiService.request('GET', 'SearchMovie', name);
    }

    /**
     * @param {string} name
     */
    searchSeries(name) {
        return ApiService.request('GET', 'SearchSeries', name);
    }

    /**
     * @param {string} id
     * @param {string} options
     */
    getTitleDetails(id, options = 'Posters,Images,Trailer,') {
        return ApiService.request('GET', 'Title', id, options);
    }

    getTop250Movies() {
        return ApiService.request('GET', 'Top250Movies', ' ');
    }

    async getRandomAsset() {
        const idx = Math.floor(250 * Math.random());
        const asset = await this.getTop250Movies();

        return asset.items[idx];
    }
}

export default new ApiProvider();

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
    getRandomAsset() {
        const idx = Math.floor(250 * Math.random());
        return this.getTop250Movies()[idx];
    }
}

export default new ApiProvider();

import ApiService from '../services/ApiService';

class ApiProvider {
    /**
     * @param {string} name
     */
    search(name) {
        return ApiService.request('GET', 'Search', name.toLowerCase());
    }

    /**
     * @param {string} name
     */
    searchTitle(name) {
        return ApiService.request('GET', 'SearchTitle', name.toLowerCase());
    }

    comingSoon() {
        return ApiService.request('GET', 'ComingSoon', ' ');
    }

    mostPopularTVs() {
        return ApiService.request('GET', 'MostPopularTVs', ' ');
    }

    mostPopularMovies() {
        return ApiService.request('GET', 'MostPopularMovies', ' ');
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

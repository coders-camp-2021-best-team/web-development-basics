import ApiService from '../services/ApiService';
import { ApiType, Http, SearchData } from '../interfaces';

class ApiProvider {
    search(q: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.Search, q);
    }

    searchTitle(q: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.SearchTitle, q);
    }

    searchMovie(q: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.SearchMovie, q);
    }

    searchSeries(q: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.SearchSeries, q);
    }

    getTitleDetails(id: string) {
        return ApiService.request(Http.GET, ApiType.Title, id);
    }
}

export default new ApiProvider();

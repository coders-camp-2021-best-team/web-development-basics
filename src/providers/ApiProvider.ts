import ApiService from '../services/ApiService';
import { ApiType, Http, SearchData, TitleData } from '../interfaces';

class ApiProvider {
    search(name: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.Search, name);
    }

    searchTitle(name: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.SearchTitle, name);
    }

    searchMovie(name: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.SearchMovie, name);
    }

    searchSeries(name: string): Promise<SearchData> {
        return ApiService.request(Http.GET, ApiType.SearchSeries, name);
    }

    getTitleDetails(id: string, options: string = 'Posters,Images,Trailer,'): Promise<TitleData> {
        return ApiService.request(Http.GET, ApiType.Title, id, options);
    }
}

export default new ApiProvider();

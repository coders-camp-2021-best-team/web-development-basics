import ApiService from '../services/ApiService';

class ApiProvider {
    search(q) {
        return ApiService.request('GET', '/title/find', { q });
    }
}

export default new ApiProvider();

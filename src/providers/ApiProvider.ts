import ApiService from '../services/ApiService';
import { Response } from '../interfaces/api/';

class ApiProvider {
    search(q): Promise<Response> {
        return ApiService.request('GET', '/title/find', { q });
    }
}

export default new ApiProvider();

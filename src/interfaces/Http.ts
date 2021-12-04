// export enum HttpRequestMethod {
//     GET = 'GET',
//     HEAD = 'HEAD',
//     POST = 'POST',
//     PUT = 'PUT',
//     DELETE = 'DELETE',
//     OPTIONS = 'OPTIONS',
//     PATCH = 'PATCH'
// };

export type HttpRequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH';

export type HttpRequestParams = {
    [key: string]: string | number | boolean
};
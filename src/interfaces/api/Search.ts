export enum SearchType {
    Title = 'Title',
    Movie = 'Movie',
    Series = 'Series',
    Name = 'Name',
    Episode = 'Episode',
    Company = 'Company',
    Keyword = 'Keyword',
    All = 'All'
}

export interface SearchData {
    searchType: SearchType;
    expression: string;
    results: SearchResult[];
    errorMessage: string;
}

export interface SearchResult {
    id: string;
    resultType: SearchType;
    image: string;
    title: string;
    description: string;
}

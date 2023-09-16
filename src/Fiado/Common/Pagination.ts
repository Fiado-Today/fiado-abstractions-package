export interface Pagination {
    page: number;
    pageSize: number;
    nextPage: number|string|null;
    previousPage: number|string|null;
    lastPage: number|string|null;
}
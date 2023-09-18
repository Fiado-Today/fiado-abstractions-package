export interface Pagination {
    page: number|string|null;
    pageSize: number|string|null;
    nextPage: number|string|null;
    previousPage: number|string|null;
    lastPage: number|string|null;
}
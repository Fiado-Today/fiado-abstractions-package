import { Pagination } from "./Pagination"

export interface GetListBaseOutput <T> {
    data: T[]
    pagination: Pagination
}
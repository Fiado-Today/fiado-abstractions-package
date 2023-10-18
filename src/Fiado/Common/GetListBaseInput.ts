import { PaginationInput } from "./PaginationInput";

export interface GetListBaseInput {
    id?:string,
    createDate?: string,
    updateDate?: string,
    pagination:PaginationInput
}
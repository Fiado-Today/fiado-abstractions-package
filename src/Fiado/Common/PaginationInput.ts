import { DatabaseIndexType } from "../Database/indexes/DatabaseIndexType"

export interface PaginationInput{
    pageSize?:number,
    pageNumber?:number|string,
    index?:DatabaseIndexType
    scanIndexForward?: boolean
}
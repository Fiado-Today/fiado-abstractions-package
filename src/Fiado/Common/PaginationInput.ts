import { IndexList } from "../Database/indexes/IndexList"

export interface PaginationInput{
    pageSize:number,
    pageNumber?:number|string,
    index?:typeof IndexList[keyof typeof IndexList]
}




export const c:PaginationInput = {
    pageSize: 0,
    index: IndexList.APPVERSION_IX_VERSION
}
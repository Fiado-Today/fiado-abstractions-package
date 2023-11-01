import { EntitiesEnum } from "../Database/EntitiesEnum"
import { IndexList } from "../Database/indexes/IndexList"

export interface PaginationInput{
    pageSize?:number,
    pageNumber?:number|string,
    index?:{
        schema: string| EntitiesEnum,
        required: string[],
        indexName: string,
        keyCondition: string
    }
}
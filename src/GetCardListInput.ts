import { CardProvider } from "./enums/CardProvider"
import { CardType } from "./enums/CardType"
import { CreditOrDebit } from "./enums/CreditOrDebit"

export interface GetCardListInput {
    documentNumber?:string,
    externalUserId?:string,
    status?:string,
    taxNumber?:string,
    nominated?:boolean,
    shippingId?:string,
    countryId?:string,
    typeOfCard?:CardType,
    provider?:CardProvider,
    creditOrDebit?:CreditOrDebit,
    pagination?:{
        pageSize?:number,
        pageNumber?:number,
    }
}
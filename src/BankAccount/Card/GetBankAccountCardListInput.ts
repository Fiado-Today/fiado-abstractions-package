import { BankAccountCardProvider } from "../enums/BankAccountCardProvider"
import { BankAccountCardType } from "../types/BankAccountCardType"
import { BankAccountCreditOrDebit } from "../enums/BankAccountCreditOrDebit"

export interface GetBankAccountCardListInput {
    documentNumber?:string,
    externalUserId?:string,
    status?:string,
    taxNumber?:string,
    nominated?:boolean,
    shippingId?:string,
    countryId?:string,
    typeOfCard?:BankAccountCardType,
    provider?:BankAccountCardProvider,
    creditOrDebit?:BankAccountCreditOrDebit,
    pagination?:{
        pageSize?:number,
        pageNumber?:number,
    }
}
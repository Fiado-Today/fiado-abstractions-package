import { BankAccountCardStatus } from "../../BankAccount/enums/BankAccountCardStatus";
import { GetListBaseInput } from "../Common/GetListBaseInput";

export interface GetCardInput extends GetListBaseInput {
    id?:string,
    accountId?:string,
    cardInventoryId?:string,
    cardShippingId?:string,
    countryId?:string,
    creditOrDebit?:string,
    delivery?:string,
    directoryId?:string,
    externalCardId?:string,
    externalShippingId?:string,
    mii?:string,
    nominated?:boolean,
    status?:BankAccountCardStatus,
}
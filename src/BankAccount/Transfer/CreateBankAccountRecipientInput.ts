import {CountryIso2} from "../../General/enum/CountryIso2";

export interface CreateBankAccountRecipientInput {
    firstName: string,
    lastName: string,
    externalRecipientId: string,
    transferMethod: number,
    externalAccountNumber: string,
    externalRoutingNumber: string,
    provinceId: number,
    city: string,
    address: string,
    postal: string,
    phoneNumber: string,
    email: string,
    iso2: CountryIso2,
    currency: string
}
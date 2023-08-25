import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";
import { Address } from "../../KYC/types/Address";

export interface CreateBankAccountCardShippingInput {
    externalCardId?:string,
    typeOfDocumentId?:TypeOfDocument,
    documentNumber?:string,
    phoneNumber?:string,
    firstName:string,
    lastName:string,
    address:Address,
}
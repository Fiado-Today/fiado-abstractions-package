import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";
import { Address } from "../../Fiado/Address/AddressOutput";

export interface CreateBankAccountCardShippingInput {
    externalCardId?:string,
    typeOfDocumentId?:TypeOfDocument,
    documentNumber?:string,
    phoneNumber?:string,
    firstName:string,
    lastName:string,
    address:Address,
    nominated:boolean,
    email?: string;
}
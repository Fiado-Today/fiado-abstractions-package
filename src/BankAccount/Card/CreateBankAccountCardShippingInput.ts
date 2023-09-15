import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";
import { AddressOutput } from "../../Fiado/Address/AddressOutput";

export interface CreateBankAccountCardShippingInput {
    externalCardId?:string,
    typeOfDocumentId?:TypeOfDocument,
    documentNumber?:string,
    phoneNumber?:string,
    firstName:string,
    lastName:string,
    address:AddressOutput,
    nominated:boolean,
    email?: string;
}
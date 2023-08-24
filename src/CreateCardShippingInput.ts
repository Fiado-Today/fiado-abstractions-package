import { Address } from "./enums/Address"
import { TypeOfDocument } from "./enums/TypeOfDocument"

export interface CreateCardShippingInput {
    externalCardId?:string,
    typeOfDocumentId?:TypeOfDocument,
    documentNumber?:string,
    phoneNumber?:string,
    firstName:string,
    lastName:string,
    address:Address,
}
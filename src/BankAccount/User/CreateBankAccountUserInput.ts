import { AddressOutput } from "../../Fiado/Address/AddressOutput";
import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";

export interface CreateBankAccountUserInput {
    directoryId: string,
    typeOfDirectoryId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: AddressOutput,
    email: string,
    dob: string,
    typeOfDocumentId: TypeOfDocument
    documentNumber: string,
}
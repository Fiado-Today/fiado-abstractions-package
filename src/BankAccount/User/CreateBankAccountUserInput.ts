import { Address } from "../../Fiado/Address/Address";
import { Sex } from "../../KYC/enums/Sex";
import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";

export interface CreateBankAccountUserInput {
    directoryId: string,
    typeOfDirectoryId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: Address,
    email: string,
    dob: string,
    password?: string,
    typeOfDocumentId: TypeOfDocument
    documentNumber: string,
    sex:Sex
}
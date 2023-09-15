import { AddressOutput } from "../../Fiado/Address/AddressOutput";
import { SexEnum } from "../../General/enum/SexEnum";
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
    password?: string,
    typeOfDocumentId: TypeOfDocument
    documentNumber: string,
    sex:SexEnum
}
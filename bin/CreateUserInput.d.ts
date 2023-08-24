import { Address } from "./enums/Address";
import { Sex } from "./enums/Sex";
import { TypeOfDocument } from "./enums/TypeOfDocument";
export interface CreateUserInput {
    directoryId: string;
    typeOfDirectoryId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: Address;
    email: string;
    dob: string;
    password?: string;
    typeOfDocumentId: TypeOfDocument;
    documentNumber: string;
    sex: Sex;
}

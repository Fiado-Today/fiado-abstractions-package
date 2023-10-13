import { AddressOutput } from "../../Fiado/Address/AddressOutput";

export interface CreateBankAccountUserInput {
    directoryId: string,
    typeOfDirectoryId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: AddressOutput,
    email: string,
    dob: string,
    documentNumber: string,
}
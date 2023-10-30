import { AddressOutput } from "../../Fiado/Address/AddressOutput";
import { SexEnum } from "../../General/enum/SexEnum";

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
    documentType: string,
    gender: SexEnum,
}
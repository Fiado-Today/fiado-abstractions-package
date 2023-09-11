import { Address } from "../../../Fiado/Address/Address";

export type CreateAccountInput = {
    directoryId: string;
    typeOfDirectoryId: string;
    countryId: string;
    phoneNumber: string;
    address: Address;
    email: string;
    document: Document
}
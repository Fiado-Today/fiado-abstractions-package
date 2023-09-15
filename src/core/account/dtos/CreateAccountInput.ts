import { AddressOutput } from "../../../Fiado/Address/AddressOutput";

export type CreateAccountInput = {
    directoryId: string;
    typeOfDirectoryId: string;
    countryId: string;
    phoneNumber: string;
    address: AddressOutput;
    email: string;
    document: Document
}
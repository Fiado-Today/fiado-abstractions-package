import { Address } from "../../../Fiado/Address/AddressOutput";

export type CreateAccountInput = {
    directoryId: string;
    typeOfDirectoryId: string;
    countryId: string;
    phoneNumber: string;
    address: Address;
    email: string;
    document: Document
}
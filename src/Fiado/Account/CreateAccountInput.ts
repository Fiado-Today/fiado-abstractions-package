import { Country } from "../../General/enum/Country";
import { IdentificationDocument } from "../../KYC/IdentificationDocument";
import { Address } from "../Address/AddressOutput";


export type CreateAccountInput = {

    directoryId: string;
    typeOfDirectoryId: string;
    countryId: Country;
    phoneNumber: string;
    address: Address;
    email: string;
    document: IdentificationDocument;
}
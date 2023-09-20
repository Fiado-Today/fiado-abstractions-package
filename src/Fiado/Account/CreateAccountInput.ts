import { Country } from "../../General/enum/Country";
import { IdentificationDocument } from "../Identity/IdentificationDocument";
import { AddressOutput } from "../Address/AddressOutput";


export type CreateAccountInput = {

    directoryId: string;
    typeOfDirectoryId: string;
    countryId: Country;
    phoneNumber: string;
    address: AddressOutput;
    email: string;
    document: IdentificationDocument;
}
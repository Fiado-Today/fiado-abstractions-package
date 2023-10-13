import { Country } from "../../General/enum/Country";
import { AddressOutput } from "../Address/AddressOutput";

export type CreateAccountInput = {

    directoryId: string;
    typeOfDirectoryId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: AddressOutput;
    email: string;
    dob: string;
    documentNumber: string;
    countryId: Country;
}
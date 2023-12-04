import {AddressOutput} from "../../Address/AddressOutput";

export interface UpdateCardHolderInformationInput {
    directoryId: string;
    usNames: string;
    usLastNames: string;
    latNames: string | null;
    latLastNameMaternal: string | null;
    latLastNamePaternal: string | null;
    externalName: string | null;
    externalLastName: string | null;
    dateOfBirth: string | null;
    countryOfBirth: string | null;
    curp: string | null;
    docSex: string | null;
    ssnItin: string | null;
    passportNumber: string | null;
    address?: AddressOutput;
}
import {AddressOutput} from "../../Address/AddressOutput";

export interface AccountNumberInformation {
    accountNumber: string;
    accountId: string;
}
export interface CardHolderAccountInformation {
    routingNumber: string;
    accounts: AccountNumberInformation[]
}
export interface CardHolderBasicInformationOutput {
    directoryId: string;
    peopleId: string;
    usNames: string | null;
    usLastNames: string | null;
    latNames: string | null;
    latLastNameMaternal: string | null;
    latLastNamePaternal: string | null;
    ternName: string | null;
    ternLastName: string | null;
    ternUserId: string | null;
    countryOfBirth: string | null;
    curp: string | null;
    dateOfBirth: string | null;
    docSex: string | null;
    ssnItin: string | null;
    passportNumber: string | null;
    address: AddressOutput;
    ternAddress: AddressOutput;
    accountInformation: CardHolderAccountInformation
}
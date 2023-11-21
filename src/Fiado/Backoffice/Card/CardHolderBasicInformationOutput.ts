import { Address } from "../../Database/Address";

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
    ternAddress: Address;
    accountInformation: CardHolderAccountInformation
}
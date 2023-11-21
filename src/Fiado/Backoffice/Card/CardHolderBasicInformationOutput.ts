import {Address} from "../../../../bin/Fiado/Address/Address";

export interface AccountNumberInformation {
    accountNumber: string;
    accountId: string;
}
export interface CardHolderAccountInformation {
    routingNumber: string;
    accounts: AccountNumberInformation[]
}
export interface CardHolderBasicInformationOutput {
    usNames: string | null;
    usLastNames: string | null;
    latNames: string | null;
    latLastNameMaternal: string | null;
    latLastNamePaternal: string | null;
    ternName: string | null;
    ternLastName: string | null;
    externalUserId: string | null;
    address: Address;
    accountInformation: CardHolderAccountInformation
}
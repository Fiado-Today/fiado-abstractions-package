import {Address} from "../../KYC/types/Address";

export interface ReplaceBankAccountCardInput {
    externalCardId: string,
    firstName: string,
    lastName: string,
    address: Address
}
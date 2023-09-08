import {Address} from "../../Fiado/Address/Address";

export interface ReplaceBankAccountCardInput {
    externalCardId: string,
    firstName: string,
    lastName: string,
    address: Address
}
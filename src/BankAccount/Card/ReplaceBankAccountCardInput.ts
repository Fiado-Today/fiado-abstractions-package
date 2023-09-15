import {AddressOutput} from "../../Fiado/Address/AddressOutput";

export interface ReplaceBankAccountCardInput {
    externalCardId: string,
    firstName: string,
    lastName: string,
    address: AddressOutput
}
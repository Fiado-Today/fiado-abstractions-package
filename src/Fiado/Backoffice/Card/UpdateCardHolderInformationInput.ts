import {AddressOutput} from "../../Address/AddressOutput";

export interface UpdateCardHolderInformationInput {
    directoryId: string;
    firstName: string;
    lastName: string;
    address?: AddressOutput;
}
import {Address} from "../../../../bin/Fiado/Address/Address";

export interface UpdateCardHolderInformationInput {
    directoryId: string;
    firstName: string;
    lastName: string;
    address?: Address;
}
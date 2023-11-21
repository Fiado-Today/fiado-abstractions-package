import {Address} from "../../../../bin/Fiado/Address/Address";
import {CardReasonEnum} from "./CardReasonEnum";

export interface ReplaceCardInput {
    cardId: string;
    firstName: string;
    lastName: string;
    address: Address;
    reason?: CardReasonEnum;
}
import {Address} from "../../../../bin/Fiado/Address/Address";
import {CardReasonEnum} from "../enums/CardReasonEnum";


export interface ExternalReplaceCardInput {
    externalCardId: string;
    firstName: string;
    lastName: string;
    address?: Address;
    reason?: CardReasonEnum;
}
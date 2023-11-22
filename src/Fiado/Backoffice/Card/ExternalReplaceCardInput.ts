import {CardReasonEnum} from "../enums/CardReasonEnum";
import {AddressOutput} from "../../Address/AddressOutput";


export interface ExternalReplaceCardInput {
    externalCardId: string;
    firstName: string;
    lastName: string;
    address?: AddressOutput;
    reason?: CardReasonEnum;
}
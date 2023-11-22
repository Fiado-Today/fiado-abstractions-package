import {CardReasonEnum} from "../enums/CardReasonEnum";
import {AddressOutput} from "../../Address/AddressOutput";


export interface ReplaceCardInput {
    cardId: string;
    firstName: string;
    lastName: string;
    address: AddressOutput;
    reason?: CardReasonEnum;
}
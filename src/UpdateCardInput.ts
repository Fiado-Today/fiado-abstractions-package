import { CardStatus } from "./enums/CardStatus";
import { CardStatusDetail } from "./enums/CardStatusDetail";

export interface UpdateCardInput {
    cardId:string,
    nominated?:boolean|null,
    status?:CardStatus|null,
    statusReason?: CardStatusDetail|null,
    pin?:string|null
}
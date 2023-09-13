import {PocketOperationTypeEnum} from "../../../../General/enum/PocketOperationTypeEnum";

export type PocketBalance = {
    operation: PocketOperationTypeEnum,
    amount: number,
}
import {Pagination} from "../../../Common/Pagination";
import {PocketItem} from "../types/PocketItem";

export interface GetPocketOutput {
    pockets: PocketItem[],
    pagination?: Pagination
}
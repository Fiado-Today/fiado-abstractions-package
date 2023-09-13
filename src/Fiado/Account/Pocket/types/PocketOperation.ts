import {PocketBalance} from "./PocketBalance";

export type PocketOperation = {
    pocketId: string,
    currentBalance: PocketBalance,
    balanceLock: PocketBalance
}
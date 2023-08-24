import { AccountStatus } from "./enums/AccountStatus";
import { AccountType } from "./enums/AccountType";

export interface UpdateAccountInput {
    externalAccountId: string,
    name: string,
    lastName:string
    accountType?: AccountType,
    status?: AccountStatus,
    isPrimary?: boolean,
}
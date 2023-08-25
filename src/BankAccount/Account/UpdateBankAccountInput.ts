import { BankAccountStatus } from "../enums/BankAccountStatus";
import { BankAccountType } from "../types/BankAccountType";

export interface UpdateAccountInput {
    externalAccountId: string,
    name: string,
    lastName:string
    accountType?: BankAccountType,
    status?: BankAccountStatus,
    isPrimary?: boolean,
}
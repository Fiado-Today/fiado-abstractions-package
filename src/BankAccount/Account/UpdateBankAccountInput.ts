import {BankAccountStatus} from "../enums/BankAccountStatus";
import {BankAccountTypeEnum} from "../enums/BankAccountTypeEnum";

export interface UpdateBankAccountInput {
    externalAccountId: string,
    name: string,
    lastName:string
    accountType?: BankAccountTypeEnum,
    status?: BankAccountStatus,
    isPrimary?: boolean,
}
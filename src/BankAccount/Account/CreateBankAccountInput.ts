import {BankAccountTypeEnum} from "../enums/BankAccountTypeEnum";

export interface CreateBankAccountInput {
    externalClientId?: string;
    externalUserId?: string;
    name: string;
    lastName: string;
    type: BankAccountTypeEnum;
}
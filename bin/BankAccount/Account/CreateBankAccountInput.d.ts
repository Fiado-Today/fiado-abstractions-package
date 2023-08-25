import { BankAccountType } from "../types/BankAccountType";
export interface CreateBankAccountInput {
    externalClientId?: string;
    externalUserId?: string;
    name: string;
    lastName: string;
    type: BankAccountType;
}

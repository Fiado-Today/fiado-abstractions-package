import { BankAccountProviders } from "../enums/BankAccountProviders";
export interface CreateBankAccountUserOutput {
    externalUserId: string;
    externalAccountId?: string;
    provider: BankAccountProviders;
}

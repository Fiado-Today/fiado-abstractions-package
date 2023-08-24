import { BankAccountProviders } from "./enums/BankAccountProviders";
export interface CreateUserOutput {
    externalUserId: string;
    externalAccountId?: string;
    provider: BankAccountProviders;
}

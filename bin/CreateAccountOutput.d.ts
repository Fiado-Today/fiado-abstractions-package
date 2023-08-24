import { BankAccountProviders } from "./enums/BankAccountProviders";
export interface CreateAccountOutput {
    externalAccountId: string;
    provider: BankAccountProviders;
}

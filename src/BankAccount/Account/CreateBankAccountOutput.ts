import { BankAccountProviders } from "../enums/BankAccountProviders";

export interface CreateBankAccountOutput {
    externalAccountId:string,
    provider:BankAccountProviders,
}
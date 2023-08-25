import { BankAccountProviders } from "../enums/BankAccountProviders";
import { BankAccountCardStatus } from "../enums/BankAccountCardStatus";
export interface CreateBankAccountCardOutput {
    externalCardId: string;
    provider: BankAccountProviders;
    status: BankAccountCardStatus;
}

import { BankAccountCardStatus } from "../enums/BankAccountCardStatus";
import { BankAccountCardStatusDetail } from "../enums/BankAccountCardStatusDetail";
export interface UpdateBankAccountCardInput {
    cardId: string;
    nominated?: boolean | null;
    status?: BankAccountCardStatus | null;
    statusReason?: BankAccountCardStatusDetail | null;
    pin?: string | null;
}

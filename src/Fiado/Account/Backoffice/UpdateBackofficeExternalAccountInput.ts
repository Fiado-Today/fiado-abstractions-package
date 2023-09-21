import {BankAccountStatus} from "../../../BankAccount/enums/BankAccountStatus";

export interface UpdateBackofficeExternalAccountInput {
    externalAccountId: string,
    name?: string,
    accountType?: string,
    status?: BankAccountStatus,
    isPrimary?: boolean,
}
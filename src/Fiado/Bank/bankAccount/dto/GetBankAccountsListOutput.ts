import {AccountType} from "../type/AccountType";
export interface GetBankAccountsListOutput {
    id: string,
    countryId: string,
    accountNumber: string | null,
    bankId: string,
    alias: string | null,
    directoryId: string,
    typeOfDirectoryId: string,
    accountHolderName: string,
    email: string | null,
    accountType: [AccountType],
    bankName: string | null,
    iconUrl: string | null
}
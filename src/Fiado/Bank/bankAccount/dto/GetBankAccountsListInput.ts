export interface GetBankAccountsListInput {
    countryId?: string;
    bankAccountId?: string;
    accountNumber?: string;
    directoryId?: string;
    typeOfDirectoryId?: string;
    alias?: string;
    accountTypeId?: string;
    accountHolderName?: string;
    bankId?: string;
    default?: boolean;
}
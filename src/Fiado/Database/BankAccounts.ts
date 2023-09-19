import {AccountType} from "../Bank/bank/type/AccountType";
export interface BankAccounts {
    "id": string,
    "accountHolderName": string,
    "accountNumber": string,
    "accountType": AccountType,
    "alias": string,
    "bankId": string,
    "countryId": string,
    "createDate": string,
    "directoryId": string,
    "email": string | null,
    "tenantId": string,
    "typeOfDirectoryId": string
}
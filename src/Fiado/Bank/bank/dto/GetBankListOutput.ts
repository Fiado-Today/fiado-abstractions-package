import {AccountType} from "../type/AccountType";
import {Currency} from "../type/Currency";

export interface GetBankListOutput {
    id: string,
    name: string,
    description: string,
    accountNumberRegex: string,
    sortNumber: number,
    currency: Currency,
    accountType: [AccountType],
    iconUrl: string,
    bankCode: string
}
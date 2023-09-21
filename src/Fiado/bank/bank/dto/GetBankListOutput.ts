import {Currency} from "../type/Currency";
import {AccountType} from "../type/AccountType";

export interface GetBankListOutput {
    id: string,
    name: string,
    description: string,
    accountNumberRegex: string,
    sortNumber: number,
    currency: Currency,
    accountType: [AccountType],
    iconUrl: string | null,
    bankCode: string | null,
}
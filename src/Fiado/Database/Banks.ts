import { Currency } from "../Bank/bank/type/Currency";
import { AccountType } from "../Bank/bank/type/AccountType";

export interface Banks {
    id: string,
    accountNumberRegex: string,
    accountType: AccountType,
    bankCode: string | null,
    countryId: string,
    createDate: string,
    currency: Currency,
    description: string,
    iconUrl: string,
    isEnabled: boolean,
    name: string,
    sortNumber: number,
    tenantId: string
}
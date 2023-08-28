import {GetBankAccountOutput} from "./GetBankAccountOutput";

export interface GetBankAccountListOutput {
    accounts: GetBankAccountOutput[]
    pagination: {
        page: number,
        pageSize: number,
        nextPage: number|null,
        previousPage: number|null,
    }
}
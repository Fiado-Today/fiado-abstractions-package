import {GetBankAccountCardOutput} from "./GetBankAccountCardOutput";

export interface GetBankAccountCardListOutput {
    cards: GetBankAccountCardOutput[],
    total: number
    pagination: {
        page: number,
        pageSize: number,
        nextPage: number|null,
        previousPage: number|null,
    }
}
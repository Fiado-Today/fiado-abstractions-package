import { GetBankAccountCardInput } from "./GetBankAccountCardInput";

export interface GetBankAccountCardListOutput {
    cards: GetBankAccountCardInput[],
    total: number
    pagination: {
        page: number,
        pageSize: number,
        nextPage: number|null,
        previousPage: number|null,
    }
}
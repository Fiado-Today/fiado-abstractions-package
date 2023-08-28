import {MerchantInfo} from "../Account/GetBankAccountTransactionListOutput";

export interface GetBankAccountCardTransaction {
    id: string,
    accountId: string,
    userId: string,
    cardId: string,
    cardSpendLimit: number,
    amount: number,
    type: string,
    status: string,
    declinedReason: string,
    createdAt: string,
    updatedAt: string,
    merchantInfo: MerchantInfo
}

export interface GetBankAccountCardTransactionListOutput {
    transactions: GetBankAccountCardTransaction[],
    pagination: {
        page: number,
        pageSize: number,
        nextPage?: number,
        previousPage?: number,
        lastPage: number,
    }
}
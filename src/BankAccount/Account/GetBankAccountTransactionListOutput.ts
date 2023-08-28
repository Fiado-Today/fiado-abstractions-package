export interface MerchantInfo {
    id: string,
    description: string,
    country: string,
    province: string,
    city: string,
    mccName: string,
}

export interface BankAccountTransaction {
    id: string,
    accountId: string,
    amount: number,
    type?: string,
    transferType?: string,
    transactionStatus: string,
    source: string,
    merchantInfo?: MerchantInfo,
    createdAt: string,
    updatedAt: string,
    fromUserName: string,
    fromUserLastName: string,
    toUserName: string,
    toUserLastName: string,
    description?: string
}

export interface GetBankAccountTransactionListOutput {
    transactions: BankAccountTransaction[],
    pagination: {
        page: number,
        pageSize: number,
        nextPage?: number,
        previousPage?: number,
        lastPage: number,
    }
}
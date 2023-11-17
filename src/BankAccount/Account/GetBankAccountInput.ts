export interface GetBankAccountInput {
    externalAccountId: string
    accountType?: "USER" | "BUSINESS"
}
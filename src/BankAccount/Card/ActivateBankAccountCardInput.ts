export interface ActivateBankAccountCardInput {
    externalAccountId?: string,
    externalUserId?: string,
    pin?: string,
    pan?: string,
    previousCardId?: string
    value?: string
}
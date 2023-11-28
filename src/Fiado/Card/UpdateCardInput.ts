

export type UpdateCardInput = {

    expirationMonth?: string,
    expirationYear?: string,
    externalCardId?: string,
    holder?: {
        name: string,
        lastName: string
    },
    pan?: string,
    panLastDigits?: string,
    status?: string,
    activationDate?: string | null,
}
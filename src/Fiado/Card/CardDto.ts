

export type CardDto = {

    id: string,
    mii: string,
    pan: string,
    cvc: string,
    pin?: string,
    typeOfCardId: string,
    creditOrDebit: string,
    expirationMonth: string,
    expirationYear: string,
    status: string,
    imageUrl: string,
    countryId: string,
    holderName: string,
}


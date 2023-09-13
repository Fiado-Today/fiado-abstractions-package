export interface CreateRecipientInput<T> {
    firstName: string,
    lastName: string,
    externalRecipientId: string,
    transferMethod: number,
    externalAccountNumber: string,
    externalRoutingNumber: string,
    provinceId: number,
    city: string,
    address: string,
    postal: string,
    phoneNumber: string,
    email: string,
    iso_code: string,
    currency: string
}
export interface GetBankAccountSensitiveInformationOutput {
    name: string;
    cvv: string;
    expirationYear: string;
    expirationMonth: string;
    pin?: string;
    pan: string;
}

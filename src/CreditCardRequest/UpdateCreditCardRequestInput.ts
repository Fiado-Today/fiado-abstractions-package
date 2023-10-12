import { CreditCardRequestStatus } from "./enums/CreditCardRequestStatus";

export interface UpdateCreditCardRequestInput {
    id:string
    status : CreditCardRequestStatus
}
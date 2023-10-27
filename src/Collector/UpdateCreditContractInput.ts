import { CreditContractStatusEnum } from "./enums/CreditContractStatusEnum";

export interface UpdateCreditContractInput {
    id:string
    status?: CreditContractStatusEnum
    cvContractId?: string
    cvDate?: string
    cvAmount?: number
    collectorId?: string
    collectorDate?: string
    collectorAmount?: number
    profit?: number
    inBuro?: boolean
    inPLD?: boolean
}
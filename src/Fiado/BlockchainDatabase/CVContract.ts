import { ContractInfo } from "../../Collector/entites/ContractInfo";

export interface CVContract {
    id:string,
    createDate: string,
    cvContractVersion: string,
    contractInfo: ContractInfo[],
    executionExchange: number,
    discountRate: number,
    sumCVAmountMXN: number,
    sumCVAmountUSD: number,
    netCVAmountMXN: number,
    netCVAmountUSD: number,
    approved: boolean
}
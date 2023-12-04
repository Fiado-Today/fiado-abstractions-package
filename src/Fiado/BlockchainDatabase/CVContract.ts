import { ContractInfo } from "../../Collector/entites/ContractInfo";

export interface CVContract {
    id:string,
    createDate: string,
    contractInfo: ContractInfo[],
    discountRate: number,
    executionExchange: number,    
    currencyId: string,
    sumCVAmount: number,
    netCVAmount: number,
    sumCVAmountUSD: number,
    netCVAmountUSD: number,
    approved: boolean
    cvContractVersion: string,
    tenantId: string,
}
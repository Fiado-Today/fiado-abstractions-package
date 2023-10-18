import { ContractInfo } from "../../Collector/entites/ContractInfo";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CollectorTransaction extends EntityBase{
    transactionNumber:string,
    relatedIDTern:string,
    directoryUserId:string,
    contractInfo: ContractInfo[],
    collectorExchange:number,
    sumCollectorAmountMXN:number,
    sumCollectorAmountUSD:number,
    feeRate:number,
    feeAmount:number,
    netCollectorAmountUSD:number
}
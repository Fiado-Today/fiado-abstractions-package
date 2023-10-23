import { ContractInfo } from "../../Collector/entites/ContractInfo";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CollectorTransaction extends EntityBase{
    transactionNumber:string,
    relatedExternalId:string,
    directoryUserId:string,
    contractInfo: ContractInfo[],
    tcExecution:number,
    tcCobro:number,
    tcCollector:number,
    tcSpread:number,
    sumCollectorAmountMXN:number,
    sumCollectorAmountUSD:number,
    availableBalance:boolean,
    errorLog:string,
    cobrado:boolean
}
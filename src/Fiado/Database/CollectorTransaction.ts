import { ContractInfo } from "../../Collector/entites/ContractInfo";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CollectorTransaction extends EntityBase{
    transactionNumber:string,
    relatedExternalId:string,
    directoryUserId:string,
    contractInfo: ContractInfo[],
    tcExecution:number,
    tcCollector:number,
    sumCollectorAmountMXN:number,
    sumCollectorAmountUSD:number,
    availableBalance:boolean,
    cobrado:boolean
}
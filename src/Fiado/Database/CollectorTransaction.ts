import { ContractInfo } from "../../Collector/entites/ContractInfo";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CollectorTransaction extends EntityBase{
    transactionNumber:string,
    relatedExternalId:string|null,
    directoryUserId:string,
    contractInfo: ContractInfo[],
    currencyId:string,
    tcExecution:number,
    tcCobro:number,
    tcCollector:number,
    tcSpread:number,
    sumCollectorAmount:number,
    sumCollectorAmountUSD:number,
    availableBalance:boolean,
    errorLog:string|null,
    cobrado:boolean
}
export interface UpdateCollectorTransactionInput {   
        id:string,
        tcExecution? :number ,
        tcCollector? : number,
        sumCollectorAmountUSD?: number,
        availableBalance? : boolean,
        cobrado? : boolean,
        transactionNumber?:string,
        relatedExternalId?:string

}
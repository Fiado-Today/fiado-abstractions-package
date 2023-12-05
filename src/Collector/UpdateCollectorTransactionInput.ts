export interface UpdateCollectorTransactionInput {   
        id:string,
        transactionNumber?:string,
        relatedExternalId?:string,
        tcExecution?:number,
        tcCobro?:number,
        tcCollector?:number,
        tcSpread?:number,
        sumCollectorAmountUSD?:number,
        availableBalance?:boolean,
        errorLog?:string|null,
        cobrado?:boolean
}
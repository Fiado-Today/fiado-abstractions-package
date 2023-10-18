export interface CVContract {
    id:string,
    createDate: string,
    cvContractVersion: string,
    contractInfo: [
        {
            contractNumber:string,
            contractAmount:number,
            contractDate:string,
        }
    ],
    executionExchange: number,
    discountRate: number,
    sumCVAmountMXN: number,
    sumCVAmountUSD: number,
    netCVAmountMXN: number,
    netCVAmountUSD: number,
}
import { InstrumentEnum } from "./enums/InstrumentEnum";

export interface CreateCreditContractInput {
    directoryUserId: string,
    relatedTransaction: string,
    peopleId:string,
    currencyId: string,
    creditNotional: number,
    creditFee: number,
    creditTax: number,
    creditTotal: number,
    instrument: InstrumentEnum,
    amountBlocked: number,
    relatedPocketId: string
}
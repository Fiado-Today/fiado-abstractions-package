import { InstrumentEnum } from "./enums/InstrumentEnum";

export interface CreateCreditContractInput {
    directoryUserId: string,
    relatedTransaction: string,
    creditNotional: number,
    creditFee: number,
    creditTax: number,
    creditTotal: number,
    instrument: InstrumentEnum,
    amountBlocked: number,
    relatedPocketId: string
}
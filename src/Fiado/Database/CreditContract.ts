import { CreditContractStatusEnum } from "../../Collector/enums/CreditContractStatusEnum";
import { InstrumentEnum } from "../../Collector/enums/InstrumentEnum";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CreditContract  extends EntityBase{
    status: CreditContractStatusEnum;
    directoryId:string,
    peopleId:string,
    paymentDate: string;
    relatedTransaction: string;
    currencyId:string,
    creditNotional: number;
    creditFee: number;
    creditTax: number;
    creditTotal: number;
    instrument: InstrumentEnum;
    amountBlocked: number;
    relatedPocketId: string;
    cvContractId: string|null;
    cvDate: string|null;
    cvAmountUSD: number;
    collectorId: string|null;
    collectorDate: string|null;
    collectorAmountUSD: number;
    profit: number;
    inBuro: number;
    inPLD: number;
}
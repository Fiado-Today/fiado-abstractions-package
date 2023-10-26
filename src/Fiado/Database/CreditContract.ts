import { CreditContractStatusEnum } from "../../Collector/enums/CreditContractStatusEnum";
import { InstrumentEnum } from "../../Collector/enums/InstrumentEnum";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CreditContract  extends EntityBase{
    status: CreditContractStatusEnum;
    directoryId:string,
    paymentDate: string;
    relatedTransaction: string;
    creditNotional: number;
    creditFee: number;
    creditTax: number;
    creditTotal: number;
    instrument: InstrumentEnum;
    amountBlocked: number;
    relatedPocketId: string;
    cvContractId: string|null;
    cvDate: string|null;
    cvAmount: number;
    collectorId: string|null;
    collectorDate: string|null;
    collectorAmount: number;
    profit: number;
    inBuro: boolean|null;
    inPLD: boolean|null;
}
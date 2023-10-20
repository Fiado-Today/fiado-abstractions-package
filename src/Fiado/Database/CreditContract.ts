import { CreditContractStatusEnum } from "../../Collector/enums/CreditContractStatusEnum";
import { InstrumentEnum } from "../../Collector/enums/InstrumentEnum";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CreditContract  extends EntityBase{
    status: CreditContractStatusEnum;
    directoryId:string,
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
    cvAmount: number|null;
    collectorId: string|null;
    collectorDate: string|null;
    collectorAmount: number|null;
    profit: number|null;
    inBuro: boolean|null;
    inPLD: boolean|null;
}
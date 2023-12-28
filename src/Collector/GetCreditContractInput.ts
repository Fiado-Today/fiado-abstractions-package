import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";
import { CreditContractStatusEnum } from "./enums/CreditContractStatusEnum";
import { InstrumentEnum } from "./enums/InstrumentEnum";

export interface GetCreditContractInput extends GetListBaseInput{
    status?: CreditContractStatusEnum;
    directoryId?:string,
    relatedTransaction?: string;
    creditNotional?: number;
    creditFee?: number;
    creditTax?: number;
    creditTotal?: number;
    instrument?: InstrumentEnum;
    amountBlocked?: number;
    relatedPocketId?: string;
    cvContractId?: string|null;
    cvDate?: string|null;
    cvAmountUSD?: string|null;
    collectorId?: string|null;
    collectorDate?: string|null;
    collectorAmount?: number|null;
    profit?: number|null;
    inBuro?: number;
    inPLD?: number;
}


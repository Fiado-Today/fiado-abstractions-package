import { Courier } from "../../General/enum/Courier";
import { BankAccountCardShippingStatus } from "../enums/BankAccountCardShippingStatus";
import { BankAccountCardShippingStatusDetail } from "../enums/BankAccountCardShippingStatusDetail";
import { BankAccountCardShippingType } from "../types/BankAccountCardShippingType";
export interface CreateBankAccountCardShippingOutput {
    type: BankAccountCardShippingType;
    status: BankAccountCardShippingStatus;
    statusDetail: BankAccountCardShippingStatusDetail;
    courier: {
        company: Courier;
        trackingNumber?: string;
        trackingUrl?: string;
    };
}

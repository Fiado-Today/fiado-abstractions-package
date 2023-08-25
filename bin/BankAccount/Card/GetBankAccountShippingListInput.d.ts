import { Country } from "../../General/enum/Country";
import { BankAccountCardShippingStatus } from "../enums/BankAccountCardShippingStatus";
export interface GetBankAccountShippingListInput {
    country?: Country;
    startDate?: string;
    endDate?: string;
    status?: BankAccountCardShippingStatus;
}


import { Country } from "../../General/enum/Country";

export interface Trx {
    amount: number;
    fee: number;
    taxes: number;
    totalAmount: number;
    date: string;
    transactionNumber: string;
    transactionType: string;
    category: string | null;
    status: string | null;
    description: string | null;
    merchantId: string | null;
    merchantCity: string | null;
    merchantState: string | null;
    merchantCountry: string | null;
    fromName: string | null;
    toName: string | null;
    currencyId: Country;
    collectorData: CollectorData | null;
    credit: Credit | null;
    createDate: string;
}

export interface Credit {
    usedOverflow: number;
    creditAmount: number;
    creditFee: number;
    creditTaxes: number;
    creditTotalAmount: number;
}
export interface CollectorData {
    collectorCurrencyId: Country;
    collectorAmount: number;
    fxrate: number;
    contractInfo: ContractInfo[];
}

type ContractInfo = {
    contractNumber: string;
    contractAmount: number;
};
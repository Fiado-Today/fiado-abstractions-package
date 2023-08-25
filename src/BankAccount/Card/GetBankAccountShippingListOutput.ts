import { GetBankAccountShippingOutput } from "./GetBankAccountShippingOutput";

export interface GetBankAccountShippingListOutput {
    shippings: GetBankAccountShippingOutput[],
    pagination: {
        page: number,
        pageSize: number,
        nextPage: number|null,
        previousPage: number|null,
    }
}
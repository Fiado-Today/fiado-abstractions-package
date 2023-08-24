import { GetShippingOutput } from "./GetShippingOutput";

export interface GetShippingListOutput {
    shippings: GetShippingOutput[],
    pagination: {
        page: number,
        pageSize: number,
        nextPage: number|null,
        previousPage: number|null,
    }
}
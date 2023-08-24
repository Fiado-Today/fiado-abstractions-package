import { Country } from "./enums/Country";
import { ShippingStatus } from "./enums/ShippingStatus";
export interface GetShippingListInput {
    country?: Country;
    startDate?: string;
    endDate?: string;
    status?: ShippingStatus;
}

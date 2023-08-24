import { Courier } from "./enums/Courier";
import { ShippingStatus } from "./enums/ShippingStatus";
import { ShippingStatusDetail } from "./enums/ShippingStatusDetail";
import { ShippingType } from "./enums/ShippingType";
export interface CreateCardShippingOutput {
    type: ShippingType;
    status: ShippingStatus;
    statusDetail: ShippingStatusDetail;
    courier: {
        company: Courier;
        trackingNumber?: string;
        trackingUrl?: string;
    };
}

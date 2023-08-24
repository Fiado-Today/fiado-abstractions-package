import { Address } from "./enums/Address";
import { Courier } from "./enums/Courier";
import { ShippingStatus } from "./enums/ShippingStatus";
import { ShippingStatusDetail } from "./enums/ShippingStatusDetail";
import { ShippingType } from "./enums/ShippingType";
export interface GetShippingOutput {
    id: string;
    courier: {
        company: Courier;
        trackingNumber?: string;
        trackingUrl?: string;
    };
    status: ShippingStatus;
    statusDetail: ShippingStatusDetail;
    type: ShippingType;
    shippingAddress: Address;
    reciever: {
        name: string;
        lastName: string;
        phoneNumber: string;
    };
}

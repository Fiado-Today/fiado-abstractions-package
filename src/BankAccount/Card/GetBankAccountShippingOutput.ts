
import { BankAccountCardShippingStatus } from "../enums/BankAccountCardShippingStatus";
import { BankAccountCardShippingStatusDetail } from "../enums/BankAccountCardShippingStatusDetail";
import { BankAccountCardShippingType } from "../types/BankAccountCardShippingType";
import { AddressOutput } from "../../Fiado/Address/AddressOutput";
import { Courier } from "../../General/enum/Courier";

export interface GetBankAccountShippingOutput {
    id:string,
    courier:{
        company:Courier,
        trackingNumber?:string
        trackingUrl?:string
    }
    status:BankAccountCardShippingStatus,
    statusDetail:BankAccountCardShippingStatusDetail,
    type:BankAccountCardShippingType
    shippingAddress:AddressOutput,
    reciever:{
        name:string,
        lastName:string,
        phoneNumber:string,
    }
}
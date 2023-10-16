import {BankAccountTypeEnum} from "../enums/BankAccountTypeEnum";
import {BankAccountStatus} from "../enums/BankAccountStatus";
import {AddressOutput} from "../../Fiado/Address/AddressOutput";

export interface GetBankAccountOutput {
    id: string,
    businessId: string,
    userId: string,
    name: string,
    accountNumber: string,
    routingNumber: string,
    accountType: BankAccountTypeEnum,
    active: boolean,
    isPrimary: boolean,
    createdDate: string,
    updatedDate: string,
    deletedDate: string,
    updatedBy: string,
    balance: number,
    address?: AddressOutput,
    kybStatus?: string,
    statusName?: BankAccountStatus
}
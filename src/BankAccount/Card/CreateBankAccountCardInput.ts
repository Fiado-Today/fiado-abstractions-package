
import { Address } from "../../KYC/types/Address";
import { BankAccountCardIssuing } from "../enums/BankAccountCardIssuing";
import { BankAccountCardType } from "../types/BankAccountCardType";

export interface CreateBankAccountCardInput {
    externalUserId?: string,
    externalAccountId?: string,
    cardType: BankAccountCardType,
    firstName: string,
    lastName: string,
    address: Address,
    nominated:boolean,
    directoryId:string,
    typeOfDirectoryId:string,
    previousCardId?:string,
    issuing: BankAccountCardIssuing
}
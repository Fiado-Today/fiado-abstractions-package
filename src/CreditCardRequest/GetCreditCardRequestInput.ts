import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput"
import { CreditCardRequestStatus } from "./enums/CreditCardRequestStatus"

export interface GetCreditCardRequestInput extends GetListBaseInput  {
    directoryId?:string
    ownerDirectoryId?:string
    initiatedBy?:string
    status?: CreditCardRequestStatus
}